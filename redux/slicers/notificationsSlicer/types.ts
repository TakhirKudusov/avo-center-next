import { INotification } from '../../../swagger';

export type TNotificationsState = {
  notifications: INotification[];
  loading: boolean;
};
