import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { handleError, handlePending } from '../../../common/helpers';
import {
  IRequestVerification,
  IVerification,
  VerificationsService,
} from '../../../swagger';

import { TVerificationsState } from './types';

export const requestVerification = createAsyncThunk<
  IVerification,
  IRequestVerification,
  { rejectValue: string }
>('nfts/create', async function (payload): Promise<any> {
  return await VerificationsService.requestVerification(payload);
});

export const initialState: TVerificationsState = {
  verification: null,
  loading: false,
};

const verificationSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestVerification.pending, handlePending)
      .addCase(requestVerification.fulfilled, (state, action) => {
        state.verification = action.payload;
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
      })
      .addCase(requestVerification.rejected, handleError);
  },
});

export const {} = verificationSlicer.actions;

export default verificationSlicer.reducer;
