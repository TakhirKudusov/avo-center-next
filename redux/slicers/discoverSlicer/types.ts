import { IBid, ICategory, INFT } from '../../../swagger';

export type TDiscoverState = {
  categories: ICategory[];
  nfts: INFT[];
  bids: IBid[];
  priceRange: { minPrice?: number; maxPrice?: number };
  loading: boolean;
};
