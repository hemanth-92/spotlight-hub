import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import Image from "next/image";
import { EllipsisVertical, Copy, Link } from "lucide-react";

interface ImageCardProps {
  ImageUrl: string;
  className?: ClassValue;
}

export default function ImageCard({ ImageUrl, className }: ImageCardProps) {
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
      <div className="absolute top-2 right-2 flex space-x-2 z-10">
          <button className="bg-white/0 backdrop-blur-md rounded-md p-2 shadow-md">
            <Link className="h-4 w-4 text-icon-foreground hover:text-icon" />
          </button>
          <button className="bg-white/0 backdrop-blur-md rounded-md p-2 shadow-md">
            <Copy className="h-4 w-4 text-icon-foreground hover:text-icon" />
          </button>
          <button className="bg-white/0 backdrop-blur-md rounded-md p-2 shadow-md">
            <EllipsisVertical className="h-4 w-4 text-icon-foreground hover:text-icon" />
          </button>
        </div>
      </div>
      <div className="flex flex-col p-2">
        <div className="flex w-full justify-between p-2">
          <div className="text-2xl font-bold text-foreground">Title</div>
          <div className="rounded-full bg-[#948888] px-4 py-1 font-bold text-foreground">
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
          <div className="test-sm flex items-center text-[#A3A3A3]">
            600 x 600
          </div>
        </div>
      </div>
    </div>
  );
}
