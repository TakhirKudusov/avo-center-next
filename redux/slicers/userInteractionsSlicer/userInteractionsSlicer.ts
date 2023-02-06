import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { handleError, handlePending } from '../../../common/helpers';
import { ICreator, ISeller, UserInteractionsService } from '../../../swagger';

import { TUserInteractionsState } from './types';

export const getSellers = createAsyncThunk<
  ISeller[],
  undefined,
  { rejectValue: string }
>('user-interactions/sellers', async function (): Promise<any> {
  return await UserInteractionsService.getSellers();
});

export const getCreators = createAsyncThunk<
  ICreator[],
  undefined,
  { rejectValue: string }
>('user-interactions/creators', async function (): Promise<any> {
  return await UserInteractionsService.getCreators();
});

export const initialState: TUserInteractionsState = {
  sellers: null,
  creators: null,
  loading: false,
};

const userInteractionsSlicer = createSlice({
  name: 'userInteractions',
  initialState,
  reducers: {
    // setUser(state: TAuthState, action: PayloadAction<IUser | null>) {
    //   state.user = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSellers.pending, handlePending)
      .addCase(getSellers.fulfilled, (state, action) => {
        state.sellers = action.payload;
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(getSellers.rejected, handleError);
    builder
      .addCase(getCreators.pending, handlePending)
      .addCase(getCreators.fulfilled, (state, action) => {
        state.creators = action.payload;
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(getCreators.rejected, handleError);
  },
});

export const {} = userInteractionsSlicer.actions;

export default userInteractionsSlicer.reducer;
