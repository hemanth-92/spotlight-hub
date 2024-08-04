"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface loginText {
  text: string;
  className?: ClassValue;
}

export default function LoginButton({ text,className }: loginText) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return <Button className={cn(className)}  onClick={handleClick}>{text}</Button>;
}
