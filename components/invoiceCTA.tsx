"use client";

import { FC } from "react";
import { ThemeLink } from "./themeLink";

export const InvoiceCTA: FC = () => {
  return (
    <div className="invoice-cta flex items-center justify-center">
      <div className="bg-white py-16 px-16 rounded-lg shadow-xl">
        <ThemeLink
          className="bg-rose-500 hover:bg-rose-600 focus:ring-red-300 width-4/5"
          href="/invoice/new"
          title="Create Your First Invoice"
        />
      </div>
    </div>
  );
};
