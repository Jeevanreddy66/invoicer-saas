"use client";

import Link from "next/link";
import { FC } from "react";
import { ThemeLink } from "./themeLink";

export const Navbar: FC = () => {
  return (
    <header className="bg-violet-700 text-slate-50 fixed top-0 w-full h-16 flex items-center justify-between px-16">
      <Link href="/" className="font-bold text-2xl md:text-3xl italic">
        Invoicer
      </Link>

      <nav className="flex items-center gap-3">
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/free-tools">Free Tools</Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/login">Login</Link>
        <ThemeLink
          className=" bg-red-500 hover:bg-red-600 focus:ring-red-300"
          href="/register"
          title="Register"
        />
      </div>
    </header>
  );
};
