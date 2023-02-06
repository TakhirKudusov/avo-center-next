import { IBid, ICollection, IUser } from '../../../swagger';

export type TCollectionsState = {
  collections: ICollection[];
  hotCollections: ICollection[];
  loading: boolean;
};

export type TCollectionsResponse = {
  data: ICollection[];
  limit: number;
  skip: number;
  totalLength: number;
};
