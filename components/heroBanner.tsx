"use client";

import Image from "next/image";
import { FC } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import BannerImage from "../public/images/banner.webp";
import { ThemeLink } from "./themeLink";

export const HeroBanner: FC = () => {
  return (
    <div className="bg-violet-700 text-slate-50 grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 py-8 md:px-16 md:py-16">
      <div className="flex flex-col items-center md:items-start gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Free Invoice Generator - Invoice Maker
        </h2>

        <p className="text-base md:text-xl font-thin">
          Create, Manage and Track Recurring Invoices. <br /> Download as PDF,
          Email and Print Invoices
        </p>

        <ThemeLink
          className="bg-rose-500 hover:bg-rose-600 focus:ring-rose-300"
          href="/invoice/new"
          Icon={AiOutlineArrowDown}
          title="Create Your First Invoice"
        />
      </div>

      <div className="">
        <Image src={BannerImage} alt="Invoice-Banner" />
      </div>
    </div>
  );
};
