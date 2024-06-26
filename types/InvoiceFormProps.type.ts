import type { InvoiceFormType } from "./InvoiceForm.type";

import { ChangeEvent, SyntheticEvent } from "react";
import { TableData } from "./TableData.type";

export type InvoiceFormProps = {
  invoiceData: InvoiceFormType;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  updateTableData: (newTableData: TableData[]) => void;
  handleFormSubmit: (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => void;
};
