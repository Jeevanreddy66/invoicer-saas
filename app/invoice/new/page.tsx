"use client";

import type { InvoiceFormType } from "@/types";

import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import {
  AiOutlineCloudDownload,
  AiOutlineCloudUpload,
  AiOutlinePrinter,
} from "react-icons/ai";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { InvoiceForm, InvoicePreview } from "@/components";

const initialInvoiceData: InvoiceFormType = {
  companyName: "",
  invoiceAuthor: "",
  companyAddress: "",
  companyCity: "",
  companyCountry: "",
  clientCompany: "",
  clientAddress: "",
  clientCity: "",
  clientCountry: "",
  invoiceNumber: "",
  invoiceDate: "",
  invoiceDueDate: "",
};

const CreateInvoicePage: FC = () => {
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [invoiceData, setInvoiceData] =
    useState<InvoiceFormType>(initialInvoiceData);

  const handlePreviewBtn = (): void => setIsPreview(!isPreview);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInvoiceData({ ...invoiceData, [name]: value });
  };

  const handleFormSubmit = (
    e: SyntheticEvent<HTMLFormElement, SubmitEvent>
  ): void => {
    e.preventDefault();
    setIsPreview(!isPreview);
  };

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
        <InvoicePreview data={invoiceData} />
      ) : (
        // Invoice Form
        <InvoiceForm
          invoiceData={invoiceData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default CreateInvoicePage;
