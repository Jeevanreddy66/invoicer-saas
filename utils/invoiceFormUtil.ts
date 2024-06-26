import type {
  InputDetails,
  InvoiceInputDetails,
  InvoiceTableDetails,
} from "@/types";

export const companyDetails: InputDetails[] = [
  {
    name: "companyName",
    placeholder: "Your Company",
  },
  {
    name: "invoiceAuthor",
    placeholder: "Your Name",
  },
  {
    name: "companyAddress",
    placeholder: "Company Address",
  },
  {
    name: "companyCity",
    placeholder: "City, State, Zip",
  },
  {
    name: "companyCountry",
    placeholder: "Country (eg: USA)",
  },
];

export const clientDetails: InputDetails[] = [
  {
    name: "clientCompany",
    placeholder: "Your Company",
  },
  {
    name: "clientAddress",
    placeholder: "Client's Address",
  },
  {
    name: "clientCity",
    placeholder: "City, State, Zip",
  },
  {
    name: "clientCountry",
    placeholder: "Country (eg: USA)",
  },
];

export const invoiceDetails: InvoiceInputDetails[] = [
  {
    label: "Invoice # :",
    id: "invoice-number",
    type: "text",
    name: "invoiceNumber",
    placeholder: "INV - 202",
  },
  {
    label: "Invoice Date :",
    id: "invoice-date",
    type: "date",
    name: "invoiceDate",
  },
  {
    label: "Due Date :",
    id: "invoice-due-date",
    type: "date",
    name: "invoiceDueDate",
  },
];

export const invoiceTableDetails: InvoiceTableDetails[] = [
  {
    name: "quantity",
    placeholder: "2",
    className: "w-14",
  },
  {
    name: "unitPrice",
    placeholder: "100",
    className: "w-24",
  },
  {
    name: "tax",
    placeholder: "40",
    className: "w-14",
  },
  {
    name: "amount",
    placeholder: "1999",
    className: "w-16",
  },
];
