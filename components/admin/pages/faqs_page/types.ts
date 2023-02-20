import { FAQ_FORM_NAME } from './enums';

type FAQFormValues = {
  [FAQ_FORM_NAME.TITLE]: string;
  [FAQ_FORM_NAME.DESCRIPTION]: string;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type { FAQFormValues };
