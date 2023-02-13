import { ICollection, INFT } from '../../../swagger';

export type TSearchState = {
  items: Array<INFT | ICollection>;
  loading: boolean;
};
