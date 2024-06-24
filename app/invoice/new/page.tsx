"use client";

import { FC, useState } from "react";
import {
  AiOutlineCloudDownload,
  AiOutlineCloudUpload,
  AiOutlinePrinter,
} from "react-icons/ai";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { InvoicePreview } from "@/components";

const CreateInvoicePage: FC = () => {
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const companyPlaceholderArray: string[] = [
    "Your Company",
    "Your Name",
    "Company Address",
    "City, State, Zip",
    "Country (eg: USA)",
  ];

  const clientPlaceholderArray: string[] = [
    "Your Client's Company",
    "Client's Address",
    "City, State, Zip",
    "Country (eg: USA)",
  ];

  const handlePreviewBtn = (): void => setIsPreview(!isPreview);

  return (
    <div className="bg-slate-50 py-8 md:py-12 px-6 md:px-16">
      {/* Invoice Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            className="px-3 py-2 shadow-md border border-gray-300 hover:border-blue-300 rounded-md"
            onClick={handlePreviewBtn}
          >
            {isPreview ? (
              <div className="flex items-center gap-2">
                <FiEdit3 />
                <span>Edit Form</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <BsLayoutTextWindowReverse />
                <span>Preview</span>
              </div>
            )}
          </button>

          <button className="flex items-center justify-center gap-3 px-3 py-2 shadow-md border border-gray-300 hover:border-blue-300 rounded-md">
            <AiOutlinePrinter />
            <span>Print</span>
          </button>

          <button className="flex items-center justify-center gap-3 px-3 py-2 shadow-md border border-gray-300 hover:border-blue-300 rounded-md">
            <AiOutlineCloudDownload />
            <span>Download</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center gap-3 px-3 py-2 shadow-md font-semibold text-purple-600 border border-purple-400 hover:text-blue-600 hover:border-blue-300 rounded-md">
            <AiOutlineCloudUpload className="font-semibold" />
            <span>Save Online</span>
          </button>

          <button className="flex items-center justify-center gap-3 px-3 py-2 shadow-md font-semibold text-purple-600 border border-purple-400 hover:text-blue-600 hover:border-blue-300 rounded-md">
            <CiMail className="font-semibold" />
            <span>Send</span>
          </button>
        </div>
      </div>

      {isPreview ? (
        // Invoice Preview
        <InvoicePreview />
      ) : (
        // Invoice Form
        <form className="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          {/* Image & Invoice Label */}
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-48 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center py-4">
                  <AiOutlineCloudUpload className="w-6 h-6 mb-2 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500 font-semibold">
                    Upload Logo
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG (MAX. 240x240px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <h2 className="text-4xl uppercase font-medium">Invoice</h2>
          </div>

          {/* Company Details */}
          <div className="flex flex-col gap-1 w-1/2 mt-6">
            {companyPlaceholderArray.map((item: string, i: number) => (
              <input
                key={i}
                type="text"
                placeholder={item}
                className="border-none py-1 h-7 text-slate-600 rounded-md placeholder:italic placeholder:text-slate-400 focus:ring-1 focus:ring-purple-300"
              />
            ))}
          </div>

          {/*  Client Details i.e., Bill To : */}
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-1 w-1/2 mt-8">
              <h2 className="text-lg font-medium">Bill To:</h2>
              {clientPlaceholderArray.map((item: string, i: number) => (
                <input
                  key={i}
                  type="text"
                  placeholder={item}
                  className="border-none py-1 h-7 text-slate-600 rounded-md placeholder:italic placeholder:text-slate-400 focus:ring-1 focus:ring-purple-300"
                />
              ))}
            </div>

            <div className="flex flex-col justify-start gap-1 w-1/2 mt-8">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="invoice-number"
                  className="font-semibold text-slate-600 shrink-0"
                >
                  Invoice # :
                </label>
                <input
                  id="invoice-number"
                  type="text"
                  placeholder="INV - 202"
                  className="border-none py-1 w-full h-7 text-slate-600 rounded-md placeholder:text-slate-400 focus:ring-1 focus:ring-purple-300"
                />
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="invoice-date"
                  className="font-semibold text-slate-600 shrink-0"
                >
                  Invoice Date :
                </label>
                <input
                  id="invoice-date"
                  type="date"
                  className="border-none py-1 w-full h-7 text-slate-600 rounded-md placeholder:text-slate-400 focus:ring-1 focus:ring-purple-300"
                />
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="due-date"
                  className="font-semibold text-slate-600 shrink-0"
                >
                  Due Date :
                </label>
                <input
                  id="due-date"
                  type="date"
                  className="border-none py-1 w-full h-7 text-slate-600 rounded-md placeholder:text-slate-400 focus:ring-1 focus:ring-purple-300"
                />
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateInvoicePage;
