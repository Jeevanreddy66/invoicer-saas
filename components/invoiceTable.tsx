"use client";

import type { TableData } from "@/types";

import { ChangeEvent, FC, useState } from "react";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { invoiceTableDetails } from "@/utils";

const tableColumnsList: string[] = [
  "Item Description",
  "Quantity",
  "Unit Price",
  "Tax",
  "Amount",
];

export const InvoiceTable: FC<{
  updateTableData: (newTableData: TableData[]) => void;
}> = ({ updateTableData }) => {
  const [tableData, setTableData] = useState<TableData[]>([
    {
      itemDescription: "",
      quantity: "",
      unitPrice: "",
      tax: "",
      amount: "",
    },
  ]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number
  ): void => {
    const { name, value } = e.target;

    const updatedData = [...tableData];
    updatedData[i][name as keyof TableData] = value;

    if (name === "quantity" || name === "unitPrice") {
      const qty = parseFloat(updatedData[i].quantity);
      const price = parseFloat(updatedData[i].unitPrice);

      if (!isNaN(qty) && !isNaN(price))
        updatedData[i].amount = (qty * price).toFixed(2).toString();
      else updatedData[i].amount = "";
    }

    setTableData(updatedData);
    updateTableData(updatedData);
  };

  const addTableRow = (): void =>
    setTableData([
      ...tableData,
      { itemDescription: "", quantity: "", unitPrice: "", tax: "", amount: "" },
    ]);

  const removeTableRow = (index: number): void => {
    const updatedTableData = [...tableData]; // Creates a Shallow Copy
    updatedTableData.splice(index, 1);

    setTableData(updatedTableData);
  };

  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {tableColumnsList.map((item: string, i: number) => (
              <th key={i} scope="col" className="px-6 py-3">
                {item}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index: number) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <input
                  type="text"
                  name="itemDescription"
                  placeholder="Item Description"
                  onChange={(e) => handleInputChange(e, index)}
                  value={row.itemDescription}
                  className="border-none px-0 py-1 h-7 w-3/4 bg-transparent text-slate-600 rounded-sm placeholder:italic placeholder:text-slate-400 focus:ring-1 focus:ring-purple-300"
                />
              </th>
              {invoiceTableDetails.map(
                ({ name, placeholder, className }, i: number) => (
                  <td key={i} className="px-6 py-4">
                    <input
                      type="number"
                      name={name}
                      placeholder={placeholder}
                      onChange={(e) => handleInputChange(e, index)}
                      value={row[name as keyof TableData] || ""}
                      className={`border-none px-0 py-1 h-7 text-slate-600 bg-transparent rounded-sm placeholder:italic placeholder:text-slate-400 focus:ring-1 focus:ring-purple-300 ${className}`}
                    />
                  </td>
                )
              )}
              <td className="px-6 py-4">
                <button
                  type="button"
                  onClick={() => removeTableRow(index)}
                  className="font-medium"
                >
                  <AiOutlineCloseCircle className="text-red-600 text-lg" />
                </button>
              </td>
            </tr>
          ))}

          <button
            type="button"
            onClick={addTableRow}
            className="my-3 ms-5 flex items-center gap-2 text-purple-500 font-bold"
          >
            <AiOutlinePlus className="text-md" />
            <span>Add line item</span>
          </button>
        </tbody>
      </table>
    </div>
  );
};
