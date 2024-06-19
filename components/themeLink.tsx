"use client";

import type { ThemeLinkProps } from "@/types";

import Link from "next/link";
import { FC } from "react";

export const ThemeLink: FC<ThemeLinkProps> = ({ href, className, title }) => {
  return (
    <Link
      href={href}
      className={`text-white focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-8 py-2 text-center ${className}`}
    >
      {title}
    </Link>
  );
};
