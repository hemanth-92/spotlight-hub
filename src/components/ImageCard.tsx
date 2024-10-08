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
  Pencil,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { SetStateAction, useState, useRef, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

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

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("This is some alt text");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setContent(event.target.value);
  };
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      if (content.trim() === "") {
        setError("Content cannot be empty");
        inputRef.current?.focus();
      } else {
        setIsEditing(false);
        setError(null);
      }
    }
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
      className={cn(
        "box-content flex transform-gpu flex-col rounded-xl border-2 border-transparent bg-muted/50 shadow-lg ease-out hover:scale-[1.05] hover:cursor-pointer hover:border-red-500 hover:shadow-none",
        className,
      )}
    >
      <div className="relative h-56 w-full">
        <Image
          src={ImageUrl}
          alt="logo"
          layout="fill"
          objectFit="cover"
          className="aspect-[3/4] h-52 rounded-t-xl"
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
                <button className="text-md flex items-center rounded-md bg-white/0 px-1.5 py-1 text-left text-icon-foreground hover:text-icon hover:backdrop-blur-lg">
                  Rename
                </button>
                <button className="text-md flex items-center rounded-md bg-white/0 px-1.5 py-1 text-left text-icon-foreground hover:text-icon hover:backdrop-blur-lg">
                  Resize
                </button>
                <button className="text-md flex items-center rounded-md bg-white/0 px-1.5 py-1 text-left text-icon-foreground hover:text-icon hover:backdrop-blur-lg">
                  Edit
                </button>
                <button className="text-md flex items-center rounded-md bg-white/0 px-1.5 py-1 text-left text-icon-foreground hover:text-icon hover:backdrop-blur-lg">
                  Delete
                </button>
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
        <div className="flex w-full justify-between px-3">
          <div className="flex w-7/12">
            <div className="flex items-center overflow-y-hidden pt-0.5 text-xs text-foreground">
              {isEditing ? (
                <div className="flex w-full items-center">
                  <Input
                    type="text"
                    value={content}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className="h-auto max-w-[14.9ch] border-b border-x-0 border-t-0 rounded-none border-primary bg-transparent p-0 text-xs text-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                    aria-label="Edit content"
                    ref={inputRef}
                  />
                  <Pencil className="ml-2 h-4 w-4" />
                </div>
              ) : (
                <div className="flex w-full items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p
                          className="ellipsis max-w-[19ch] overflow-hidden truncate"
                          onDoubleClick={handleEditClick}
                        >
                          {content}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Alt text: click to edit.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <button
                    className="ml-2 rounded pr-2"
                    onClick={handleEditClick}
                    aria-label="Edit content"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center text-sm text-png">600 x 600</div>
        </div>
      </div>
    </div>
  );
}
