import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import Image from "next/image";

interface ImageCardProps {
  ImageUrl: string;
  className?: ClassValue;
}

export default function ImageCard({ ImageUrl, className }: ImageCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl bg-white shadow-lg",
        className,
      )}
    >
        <Image
          src={ImageUrl}
          alt="logo"
          width={300}
          height={300}
          className="h-52 rounded-t-xl object-cover"
        />
        <div className="flex flex-col p-2">
          <div className="flex w-full justify-between p-2">
            <div className="text-2xl font-bold">Title</div>
            <div className="rounded-full bg-neutral-400 px-4 py-1 font-bold">
              .png
            </div>
          </div>
          <div className="mt-4 flex w-full justify-between p-2">
            <div className="flex w-7/12 gap-1">
              <div className="text-slate-400">alt</div>
              <div className="flex items-center pt-0.5 text-sm">
                This is some alt
              </div>
            </div>
            <div className="test-sm flex items-center">600 x 600</div>
          </div>
        </div>
      </div>
  );
}
