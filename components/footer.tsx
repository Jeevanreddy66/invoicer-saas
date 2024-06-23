"use client";

import { footerLinks } from "@/utils";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="italic flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Invoicer
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Free Open Source Platform for making Invoices for erntirely free.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          {footerLinks.map(({ href, title }, i: number) => (
            <li key={i}>
              <a href={href} className="mr-4 hover:underline md:mr-6 ">
                {title}
              </a>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024-2025{" "}
          <a href="#" className="hover:underline">
            Invoicer
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
