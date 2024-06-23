"use client";

import Link from "next/link";
import { FC } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";

export const Pricing: FC = () => {
  return (
    <div className="bg-slate-100 py-8 md:py-16 px-6 md:px-16">
      <div className="mb-12">
        <h2 className="text-center text-2xl md:text-3xl font-medium">
          Pricing of Invoice Generator
        </h2>

        <p className="text-center mt-3 text-slate-600">
          Only pay when you need premium features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-start gap-6">
          <div className="flex items-center justify-center rounded-full w-16 h-16 shadow-lg shadow-purple-500">
            <BsCheck2Circle className="text-purple-500 text-2xl" />
          </div>

          <h4 className="font-semibold text-xl text-slate-900">Free Plan</h4>
          <p className="text-slate-500">
            Create upto 100 invoices and other documents in a year - completely
            free. Invoices, Quotations, Pro Forma, Expenses and more. No hidden
            Charges.
          </p>
          <Link
            href={"/invoice/new"}
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Create Free Invoice
          </Link>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-start gap-6">
          <div className="flex items-center justify-center rounded-full w-16 h-16 shadow-lg shadow-purple-500">
            <IoDiamondOutline className="text-purple-500 text-2xl" />
          </div>

          <h4 className="font-semibold text-xl text-slate-900">Premium Plan</h4>
          <p className="text-slate-500">
            Manage your accounting at faster pace with additional premium
            features at minimal cost.
          </p>
          <Link
            href={"/features"}
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Explore Premium Features
          </Link>
        </div>
      </div>
    </div>
  );
};
