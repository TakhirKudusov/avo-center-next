import {
  Bid,
  Category,
  Collection,
  Creators,
  Faqs,
  Nft,
  Notification,
  Report,
  Sellers,
  User,
  Verification,
} from '../../../../redux/APIs/types';
import { ReactNode } from 'react';

type TableHead = {
  id: number;
  name: string;
  filter?: boolean;
  width?: string;
  inputType?: 'input' | 'select';
  render?: (data: any) => JSX.Element;
};

type TableContent =
  | Nft
  | User
  | Collection
  | Bid
  | Faqs
  | Report
  | Notification
  | Category
  | Sellers
  | Creators
  | Verification;

export type { TableHead, TableContent };
