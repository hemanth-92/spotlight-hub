"use client";

import Link from "next/link";
import { Icons } from "../icons";
import { LogIn } from "lucide-react";
import { Balancer } from "react-wrap-balancer";
import { siteConfig } from "@/config/site-config";
import { ModeToggle } from "../toggle-theme";
import { SearchPopOver } from "../search";
import { Pages } from "@/config/docs-config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { SideBar } from "../side-bar";
import RedirectButton from "../redirectButton";

export const SiteHeader = () => {
  const pathname = usePathname();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="fixed left-0 top-0 z-10 w-full">
      {pathname === "/" && <></>}
      <div className="flex h-12 items-center justify-between border-b border-border bg-background px-4 py-2">
        <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-4">
            <MobileMenu />
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="h-5 w-5 fill-current" />
              <Balancer
                as={"span"}
                className="truncate text-ellipsis font-bold"
              >
                {siteConfig.name}
              </Balancer>
            </Link>
            {Pages.map((page) => {
              const isActive = pathname.includes(page.path ?? "");
              return (
                page.path && (
                  <Link
                    key={page.title}
                    href={page.path}
                    className={cn(
                      "hidden text-foreground/70 transition-colors md:inline-block",
                      isActive && "text-foreground",
                    )}
                  >
                    {page.title}
                  </Link>
                )
              );
            })}
          </div>
          <div className="xs:gap-2 flex items-center gap-2">
            <SearchPopOver />
            <RedirectButton
              redirect="/dashboard"
              text="Sign in"
              icon={<LogIn className="text-xs" />}
              bool={isSmallScreen}
              className="h-6"
            />
            <div className="xs:hidden flex">
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu className="size-4" />
          <span className="sr-only">menu</span>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SideBar setOpen={setOpen} />
        </SheetContent>
      </Sheet>
    </div>
  );
};
