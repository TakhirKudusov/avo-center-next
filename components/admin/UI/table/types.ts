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

type TableHead = {
  id: number;
  name: string;
  configurable: boolean;
  filter?: boolean;
  width?: string;
  inputType?: 'input' | 'select';
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
