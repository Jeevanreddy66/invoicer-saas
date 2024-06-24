"use client";

import { FC, useState } from "react";
import {
  AiOutlineCloudDownload,
  AiOutlineCloudUpload,
  AiOutlinePrinter,
} from "react-icons/ai";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const CreateInvoicePage: FC = () => {
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const handlePreviewBtn = (): void => setIsPreview(!isPreview);

  return (
    <div className="bg-slate-50 py-8 md:py-12 px-6 md:px-16">
      {/* Invoice Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center justify-center gap-3 px-3 py-2 shadow-md border border-gray-300 hover:border-blue-300 rounded-md"
            onClick={handlePreviewBtn}
          >
            <BsLayoutTextWindowReverse />
            <span>Preview</span>
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

      {/* Invoice Form */}
      {!isPreview && (
        <div className="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <h2>Invoice</h2>
        </div>
      )}

      {/* Invoice Preview */}
      {isPreview && (
        <div className="w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <h2>Preview</h2>
        </div>
      )}
    </div>
  );
};

export default CreateInvoicePage;
