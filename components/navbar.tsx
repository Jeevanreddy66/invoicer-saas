"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { ThemeLink } from "./themeLink";

export const Navbar: FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleMenuClick = (): void => setShowSidebar(!showSidebar);

  return (
    <>
      <header className="bg-violet-700 text-slate-50 fixed top-0 w-full h-16 flex items-center justify-between px-16">
        <Link href="/" className="font-bold text-2xl md:text-3xl italic">
          Invoicer
        </Link>

        <nav className="hidden md:flex items-center gap-3">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/free-tools">Free Tools</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">Login</Link>
          <ThemeLink
            className=" bg-rose-500 hover:bg-rose-600 focus:ring-rose-300"
            href="/register"
            title="Register"
          />
        </div>

        {/* Hamburger Menu Button */}
        {!showSidebar && (
          <button className="md:hidden" onClick={handleMenuClick}>
            <BiMenu className="text-3xl" />
          </button>
        )}
      </header>

      {/* Responsive Sidebar MenuItems */}
      {showSidebar && (
        <div className="md:hidden fixed top-0 right-0 w-3/6 bg-slate-800 bg-opacity-90 text-slate-50 h-screen z-50 p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-bold text-2xl italic">Invoicer</h2>

            <button onClick={handleMenuClick}>
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>

          <nav className="flex flex-col items-center gap-3 mb-10">
            <Link href="/features" className="hover:text-purple-400">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-purple-400">
              Pricing
            </Link>
            <Link href="/free-tools" className="hover:text-purple-400">
              Free Tools
            </Link>
          </nav>

          <div className="flex flex-col items-center gap-4">
            <Link href="/login">Login</Link>
            <ThemeLink
              className=" bg-rose-500 hover:bg-rose-600 focus:ring-rose-300"
              href="/register"
              title="Register"
            />
          </div>
        </div>
      )}
    </>
  );
};
