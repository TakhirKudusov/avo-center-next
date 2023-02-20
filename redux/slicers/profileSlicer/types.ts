import { IUser } from '../../../swagger';

export type TProfileState = {
  users: IUser[];
  user: IUser | null;
  loading: boolean;
};
