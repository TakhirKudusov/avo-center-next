import { IUser } from '../../../swagger';

export type TProfileState = {
  user: IUser | null;
  loading: boolean;
};
