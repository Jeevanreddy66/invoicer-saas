"use client";

import { InvoiceFormType } from "@/types";
import { FC } from "react";

export const InvoicePreview: FC<{ data: InvoiceFormType }> = ({ data }) => {
  const {
    companyName,
    invoiceAuthor,
    companyAddress,
    companyCity,
    companyCountry,
    clientCompany,
    clientAddress,
    clientCity,
    clientCountry,
    invoiceNumber,
    invoiceDate,
    invoiceDueDate,
  } = data;
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
      <h2>Preview</h2>

      <h2>Company Name : {companyName}</h2>
      <h2>Your Name : {invoiceAuthor}</h2>
      <h2>Company Address : {companyAddress}</h2>
      <h2>Company City : {companyCity}</h2>
    </div>
  );
};
