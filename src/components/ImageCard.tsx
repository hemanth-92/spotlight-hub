"use client";

import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import Image from "next/image";
import {
  EllipsisVertical,
  Copy,
  Link,
  Check,
  Edit,
  Trash2,
} from "lucide-react";
import { useState } from "react";

interface ImageCardProps {
  ImageUrl: string;
  className?: ClassValue;
}

export default function ImageCard({ ImageUrl, className }: ImageCardProps) {
  const [icon1, setIcon1] = useState("link");
  const [icon2, setIcon2] = useState("copy");
  const [icon3, setIcon3] = useState("ellipsis");

  const toggleIcon1 = () => {
    setIcon1((prevIcon) => (prevIcon === "link" ? "check" : "link"));
    setTimeout(() => {
      setIcon1("link");
    }, 1000);
  };

  const toggleIcon2 = () => {
    setIcon2((prevIcon) => (prevIcon === "copy" ? "edit" : "copy"));
    setTimeout(() => {
      setIcon2("copy");
    }, 1000);
  };

  const toggleIcon3 = () => {
    setIcon3((prevIcon) => (prevIcon === "ellipsis" ? "trash" : "ellipsis"));
    setTimeout(() => {
      setIcon3("ellipsis");
    }, 1000);
  };
  return (
    <div
      className={cn("flex flex-col rounded-xl bg-accent shadow-lg", className)}
    >
      <div className="relative">
        <Image
          src={ImageUrl}
          alt="logo"
          width={300}
          height={300}
          className="h-52 rounded-t-xl object-cover"
        />
        <div className="absolute right-2 top-2 z-10 flex space-x-2">
          <Image
            src={ImageUrl}
            alt="logo"
            width={300}
            height={300}
            className="h-52 rounded-t-xl object-cover"
          />
          <div className="absolute right-2 top-2 z-10 flex space-x-2">
            <button
              onClick={toggleIcon1}
              className="rounded-md bg-white/0 p-2 shadow-md backdrop-blur-md"
            >
              {icon1 === "link" ? (
                <Link className="h-4 w-4 text-icon-foreground transition-all hover:text-icon dark:rotate-0 dark:scale-100" />
              ) : (
                <Edit className="h-4 w-4 text-icon-foreground transition-all hover:text-icon dark:rotate-0 dark:scale-100" />
              )}
            </button>
            <button
              onClick={toggleIcon2}
              className="rounded-md bg-white/0 p-2 shadow-md backdrop-blur-md"
            >
              {icon2 === "copy" ? (
                <Copy className="h-4 w-4 text-icon-foreground transition-all hover:text-icon" />
              ) : (
                <Check className="h-4 w-4 text-icon-foreground transition-all hover:text-icon" />
              )}
            </button>
            <button
              onClick={toggleIcon3}
              className="rounded-md bg-white/0 p-2 shadow-md backdrop-blur-md"
            >
              {icon3 === "ellipsis" ? (
                <EllipsisVertical className="h-4 w-4 text-icon-foreground transition-all hover:text-icon" />
              ) : (
                <Trash2 className="h-4 w-4 text-icon-foreground transition-all hover:text-icon" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col p-2">
          <div className="flex w-full justify-between p-2">
            <div className="text-2xl font-bold text-foreground">Title</div>
            <div className="bg-png text-png-foreground rounded-full px-4 py-1 font-bold">
              .png
            </div>
          </div>
          <div className="mt-4 flex w-full justify-between p-2">
            <div className="flex w-7/12 gap-1">
              <div className="text-muted-foreground">alt</div>
              <div className="flex items-center pt-0.5 text-sm text-foreground">
                This is some alt
              </div>
            </div>
            <div className="test-sm text-png flex items-center">600 x 600</div>
          </div>
        </div>
      </div>
    </div>
  );
}
