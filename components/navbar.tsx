"use client";

import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <header className="bg-violet-800 text-slate-50 fixed top-0 w-full h-14 flex items-center justify-between px-16">
      <Link href="/">Invoicer</Link>

      <nav className="flex items-center gap-3">
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/free-tools">Free Tools</Link>
      </nav>

      <div className="flex items-center gap-3">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </header>
  );
};
