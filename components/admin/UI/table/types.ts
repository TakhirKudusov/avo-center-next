import { Bid, Collection, Nft, User } from '../../../../redux/APIs/types';

type TableHead = {
  id: number;
  name: string;
  configurable: boolean;
  filter?: boolean;
  width?: string;
  inputType?: 'input' | 'select';
};

type TableContent = Nft | User | Collection | Bid;

export type { TableHead, TableContent };
