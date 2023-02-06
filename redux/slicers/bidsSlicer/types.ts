import { IBid, IUser } from '../../../swagger';

export type TBidsState = {
  bids: IBid[];
  loading: boolean;
};

export type TBidsResponse = {
  data: IBid[];
  limit: number;
  skip: any;
  totalLength: number;
};
