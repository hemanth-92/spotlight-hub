"use client";

import Link from "next/link";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageCard from "@/components/ImageCard";
import DashboardHeader from "@/components/layouts/Dashboard-header";

const numberOfCards = 40;

const Dashboard = () => {
  return (
    <div className="flex h-screen flex-col">
      <DashboardHeader />

      <main className="grid h-screen w-full overflow-hidden md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-background md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 px-2 py-4">
              <nav className="text-md grid items-start px-2 font-medium lg:px-4">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                >
                  <Package className="h-4 w-4" />
                  Products{" "}
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                >
                  <Users className="h-4 w-4" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                >
                  <LineChart className="h-4 w-4" />
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Docs Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-8 overflow-y-auto bg-background p-4 shadow-lg sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: numberOfCards }, (_, index) => (
            <div
              key={index}
              className="shadow-lg-invert flex items-center justify-center"
            >
              <ImageCard ImageUrl={`/github.jpeg`} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
