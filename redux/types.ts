import { IUser } from "../common/interfaces/user.interface";

type TAuthState = {
  user: IUser | null;
  loading: boolean;
};

export type {
  TAuthState,
};
