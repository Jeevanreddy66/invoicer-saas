"use client";

import { FC } from "react";
import { featureItems } from "@/utils";
import { ThemeLink } from "./themeLink";

export const Features: FC = () => {
  return (
    <div className="bg-slate-950 text-slate-50 py-8 md:py-16 px-6 md:px-16 flex flex-col items-center gap-8">
      <h2 className="text-center text-2xl md:text-3xl font-medium">
        Features of Invoice Generator
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featureItems.map(({ Icon, title, description }, i: number) => (
          <div key={i}>
            <div className="border-2 border-purple-400 w-14 h-14 flex items-center justify-center rounded-lg mb-3">
              <Icon className="text-2xl" />
            </div>

            <p className="mb-3 text-lg md:text-xl font-medium">{title}</p>
            <p className="text-slate-400 text-sm md:text-md">{description}</p>
          </div>
        ))}
      </div>

      <ThemeLink
        className=" bg-purple-500 hover:bg-purple-600 focus:ring-purple-300"
        href="/invoice/new"
        title="Create Invoice for Free"
      />
    </div>
  );
};
