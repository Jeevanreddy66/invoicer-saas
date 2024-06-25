import type { InvoiceFormType } from "./InvoiceForm.type";

import { ChangeEvent, SyntheticEvent } from "react";

export type InvoiceFormProps = {
  invoiceData: InvoiceFormType;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => void;
};
