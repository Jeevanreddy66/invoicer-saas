import type { TableData } from "./TableData.type";

export type InvoiceFormType = {
  companyName: string;
  invoiceAuthor: string;
  companyAddress: string;
  companyCity: string;
  companyCountry: string;
  clientCompany: string;
  clientAddress: string;
  clientCity: string;
  clientCountry: string;
  invoiceNumber: string;
  invoiceDate: string;
  invoiceDueDate: string;
};

export type CombinedInvoiceDataType = {
  companyName: string;
  invoiceAuthor: string;
  companyAddress: string;
  companyCity: string;
  companyCountry: string;
  clientCompany: string;
  clientAddress: string;
  clientCity: string;
  clientCountry: string;
  invoiceNumber: string;
  invoiceDate: string;
  invoiceDueDate: string;
  invoiceTableData: TableData[];
};
