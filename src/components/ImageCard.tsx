"use client";

import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import Image from "next/image";
import { EllipsisVertical, Copy, Link, Check, Edit } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ImageCardProps {
  ImageUrl: string;
  className?: ClassValue;
}

export default function ImageCard({ ImageUrl, className }: ImageCardProps) {
  const [icon1, setIcon1] = useState("link");
  const [icon2, setIcon2] = useState("copy");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handlePopoverToggle = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

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
          <button
            onClick={toggleIcon1}
            className="rounded-md bg-white/0 p-2 text-icon-foreground shadow-md backdrop-blur-md hover:text-icon"
          >
            {icon1 === "link" ? (
              <Link className="h-4 w-4 transition-all" />
            ) : (
              <Edit className="h-4 w-4 transition-all" />
            )}
          </button>
          <button
            onClick={toggleIcon2}
            className="rounded-md bg-white/0 p-2 text-icon-foreground shadow-md backdrop-blur-md hover:text-icon"
          >
            {icon2 === "copy" ? (
              <Copy className="h-4 w-4 transition-all" />
            ) : (
              <Check className="h-4 w-4 transition-all" />
            )}
          </button>
          <Popover>
            <PopoverTrigger asChild>
              <button
                onClick={handlePopoverToggle}
                aria-expanded={isPopoverOpen}
                aria-label="More options"
                className="rounded-md bg-white/0 p-2 text-icon-foreground shadow-md backdrop-blur-md hover:text-icon"
              >
                <EllipsisVertical className="h-4 w-4 transition-all" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-full border-0 bg-white/10 px-1 py-1 shadow-md backdrop-blur-md"
            >
              <div className="flex flex-col">
                <button className="flex items-center text-left text-md text-icon-foreground rounded-md bg-white/0 px-1.5 py-1 hover:backdrop-blur-lg hover:text-icon">Rename</button>
                <button className="flex items-center text-left text-md text-icon-foreground rounded-md bg-white/0 px-1.5 py-1 hover:backdrop-blur-lg hover:text-icon">Resize</button>
                <button className="flex items-center text-left text-md text-icon-foreground rounded-md bg-white/0 px-1.5 py-1 hover:backdrop-blur-lg hover:text-icon">Edit</button>
                <button className="flex items-center text-left text-md text-icon-foreground rounded-md bg-white/0 px-1.5 py-1 hover:backdrop-blur-lg hover:text-icon">Delete</button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex flex-col p-2">
        <div className="flex w-full justify-between p-2">
          <div className="text-2xl font-bold text-foreground">Title</div>
          <div className="rounded-full bg-png px-4 py-1 font-bold text-png-foreground">
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
          <div className="flex items-center text-sm text-png">600 x 600</div>
        </div>
      </div>
    </div>
  );
}
