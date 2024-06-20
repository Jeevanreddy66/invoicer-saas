"use client";

import type { ThemeLinkProps } from "@/types";

import Link from "next/link";
import { FC } from "react";

export const ThemeLink: FC<ThemeLinkProps> = ({
  href,
  className,
  title,
  Icon,
}) => {
  return (
    <Link
      href={href}
      className={`text-white focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-8 py-2 text-center flex items-center ${className}`}
    >
      {title} <span className="ms-2">{Icon && <Icon />}</span>
    </Link>
  );
};
