import { INFT } from '../../../swagger';

export type TNftsState = {
  nfts: INFT[];
  userNfts: INFT[];
  nft: INFT | null;
  loading: boolean;
};
