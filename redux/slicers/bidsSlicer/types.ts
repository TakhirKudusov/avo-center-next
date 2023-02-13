import { IBid, IUser } from '../../../swagger';

export type TBidsState = {
  bids: IBid[];
  bid: IBid | null;
  loading: boolean;
};

export type TBidsResponse = {
  data: IBid[];
  limit: number;
  skip: any;
  totalLength: number;
};
