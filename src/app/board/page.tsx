"use client";

import { Button } from "@/components/ui/button";
import { Plus, Settings } from "lucide-react";
import React from "react";
import { Icons } from "@/components/icons";
import DashboardHeader from "@/components/layouts/Dashboard-header";

export default function Board() {
  return (
    <div className="mx-auto flex w-full flex-col">
      <div>
        <DashboardHeader />
      </div>
      <div className="mx-auto flex w-full items-center justify-between p-4">
        <div className="text-2xl">Your Apps</div>
        <div>
          <Button className="h-9 items-center justify-center gap-1 rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:!bg-red-500 hover:!text-white hover:!shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            <Plus className="h-5 w-5" />
            create a new app
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-1 overflow-y-auto p-5">
        <div className="overflow-hidden rounded-lg bg-neutral-50 shadow-md dark:bg-neutral-900 dark:shadow-none">
          <div className="bg-neutral-100">
            <Icons.logoCard />
          </div>
          <div className="bg-muted/50 p-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-lg font-semibold">
                test
              </span>
              <Settings className="h-5 w-5 cursor-pointer" />
            </div>
            <div className="mb-4">
              User name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
