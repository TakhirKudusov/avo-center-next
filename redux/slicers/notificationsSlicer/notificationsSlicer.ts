import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleError, handlePending } from '../../../common/helpers';
import { INotification, NotificationsService } from '../../../swagger';

import { TNotificationsState } from './types';

export const getNotifications = createAsyncThunk<
  INotification[],
  undefined,
  { rejectValue: string }
>('notifications', async function (): Promise<any> {
  return await NotificationsService.getUserNotifications();
});

export const readNotification = createAsyncThunk<
  INotification,
  string,
  { rejectValue: string }
>('notifications/readNotification', async function (payload): Promise<any> {
  return await NotificationsService.readNotification(payload);
});

const initialState: TNotificationsState = {
  notifications: [],
  loading: false,
};

const notificationsSlicer = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setIsRead(state: TNotificationsState) {
      state.notifications = state.notifications.map((item) => ({
        ...item,
        isRead: true,
      }));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotifications.pending, handlePending)
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.notifications = action.payload;
        state.loading = false;
        // console.log('fulfilled');
      })
      .addCase(getNotifications.rejected, handleError);
    builder
      //readNotification
      .addCase(readNotification.pending, handlePending)
      .addCase(readNotification.fulfilled, () => {})
      .addCase(readNotification.rejected, handleError);
  },
});

export const { setIsRead } = notificationsSlicer.actions;

export default notificationsSlicer.reducer;
