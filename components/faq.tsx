"use client";

import { FC } from "react";
import { Accordion } from "./accordion";

export const FAQ: FC = () => {
  return (
    <div className="bg-white py-8 md:py-16 px-6 md:px-16">
      <h2 className="text-center text-2xl md:text-3xl font-medium mb-8">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="max-w-2xl m-auto">
        <Accordion />
      </div>
    </div>
  );
};
