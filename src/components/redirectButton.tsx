"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface loginText {
  redirect: string;
  text: string;
  className?: ClassValue;
}

export default function RedirectButton({
  redirect,
  text,
  className,
}: loginText) {
  const router = useRouter();

  const handleClick = () => {
    router.push(redirect);
  };

  return (
    <Button className={cn(className)} onClick={handleClick}>
      {text}
    </Button>
  );
}
