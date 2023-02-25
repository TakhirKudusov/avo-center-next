import { IVerification } from '../../../swagger';

export type TVerificationsState = {
  verification: IVerification | null;
  loading: boolean;
};
