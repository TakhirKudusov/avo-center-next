import { IBid, ICategory, INFT } from '../../../swagger';

export type TDiscoverState = {
  categories: ICategory[];
  nfts: INFT[];
  bids: IBid[];
  loading: boolean;
};
