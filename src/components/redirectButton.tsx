"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface loginText {
  redirect: string;
  text: string;
  icon?: any;
  bool: boolean;
  className?: ClassValue;
}

export default function RedirectButton({
  redirect,
  text,
  bool,
  icon,
  className,
}: loginText) {
  const router = useRouter();

  const handleClick = () => {
    router.push(redirect);
  };

  return (
    <Button className={cn(className,"p-1 md:px-4 py-2")} onClick={handleClick}>
      {bool?icon:text}
    </Button>
  );
}
