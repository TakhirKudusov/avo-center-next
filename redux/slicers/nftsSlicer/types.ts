import { INFT } from '../../../swagger';

export type TNftsState = {
  nfts: INFT[];
  nft: INFT | null;
  loading: boolean;
};
