"use client";

import { FC, useEffect, useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

export const Steps: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const handleResize = (): void => setWindowWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderIcon = () => {
    if (windowWidth >= 768) return <BsChevronRight size={24} />;
    else return <BsChevronDown size={24} />;
  };

  return (
    <div className="px-6 py-8 md:px-16 md:py-16 bg-slate-50 flex items-center justify-center">
      <div>
        <h2 className="text-xl md:text-2xl text-center font-medium mb-6">
          Create your Invoice in less than 2 minutes
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <p className="border border-slate-400 rounded-full w-8 h-8 p-2 flex items-center justify-center">
              1
            </p>
            <p className="text-slate-600">Invoice Details</p>
          </div>

          {renderIcon()}

          <div className="flex items-center gap-2">
            <p className="border border-slate-400 rounded-full w-8 h-8 p-2 flex items-center justify-center">
              2
            </p>
            <p className="text-slate-600">
              Your Bank Details <br />
              (Optional)
            </p>
          </div>

          {renderIcon()}

          <div className="flex items-center gap-2">
            <p className="border border-slate-400 rounded-full w-8 h-8 p-2 flex items-center justify-center">
              3
            </p>
            <p className="text-slate-600">
              Select Design & Colors <br />
              (Download or Email Invoice)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
