import { ICreator, ISeller } from '../../../swagger';

export type TUserInteractionsState = {
  sellers: ISeller[] | null;
  creators: ICreator[] | null;
  loading: boolean;
};
