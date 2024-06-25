"use client";

import { InvoiceFormProps } from "@/types";

import { FC } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { companyDetails, clientDetails, invoiceDetails } from "@/utils";

export const InvoiceForm: FC<InvoiceFormProps> = ({
  invoiceData,
  handleInputChange,
  handleFormSubmit,
}) => {
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
    >
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
              <p className="text-xs text-gray-500">PNG, JPG (MAX. 240x240px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <h2 className="text-4xl uppercase font-medium">Invoice</h2>
      </div>

      {/* Company Details */}
      <div className="flex flex-col gap-1 w-1/2 mt-6">
        {companyDetails.map(({ name, placeholder }, i: number) => (
          <input
            key={i}
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={handleInputChange}
            value={invoiceData[name as keyof typeof invoiceData] || ""}
            className="border-none py-1 h-7 text-slate-600 rounded-sm placeholder:italic placeholder:text-slate-400 focus:ring-1 focus:ring-purple-300"
          />
        ))}
      </div>

      {/*  Client Details i.e., Bill To : */}
      <div className="flex justify-between gap-6 my-8">
        <div className="flex flex-col gap-1 w-1/2">
          <h2 className="text-lg font-medium">Bill To:</h2>
          {clientDetails.map(({ name, placeholder }, i: number) => (
            <input
              key={i}
              type="text"
              name={name}
              placeholder={placeholder}
              onChange={handleInputChange}
              value={invoiceData[name as keyof typeof invoiceData] || ""}
              className="border-none py-1 h-7 text-slate-600 rounded-sm placeholder:italic placeholder:text-slate-400 focus:ring-1 focus:ring-purple-300"
            />
          ))}
        </div>

        <div className="flex flex-col gap-1 w-1/2">
          {invoiceDetails.map(
            ({ label, id, type, name, placeholder }, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <label
                  htmlFor={id}
                  className="font-semibold text-slate-600 shrink-0"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={handleInputChange}
                  value={invoiceData[name as keyof typeof invoiceData] || ""}
                  className="border-none py-1 w-full h-7 text-slate-600 rounded-sm placeholder:text-slate-400 focus:ring-1 focus:ring-purple-300"
                />
              </div>
            )
          )}
        </div>
      </div>

      <button
        type="submit"
        className="bg-purple-700 py-2 px-6 rounded-md text-white"
      >
        Create Invoice
      </button>
    </form>
  );
};
