import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { handleError, handlePending } from '../../../common/helpers';
import { IUser, UsersService } from '../../../swagger';

import { TProfileState } from './types';

export const getUserProfile = createAsyncThunk<
  IUser,
  string,
  { rejectValue: string }
>('users', async function (payload): Promise<any> {
  return await UsersService.getUser(payload);
});

export const editUserProfile = createAsyncThunk<
  IUser,
  IUser,
  { rejectValue: string }
>('users/edit-profile', async function (payload): Promise<any> {
  return await UsersService.editProfile(payload);
});

export const initialState: TProfileState = {
  user: null,
  loading: false,
};

const profileSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setUser(state: TAuthState, action: PayloadAction<IUser | null>) {
    //   state.user = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      //signin
      .addCase(getUserProfile.pending, handlePending)
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(getUserProfile.rejected, handleError);
    builder
      //signin
      .addCase(editUserProfile.pending, handlePending)
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(editUserProfile.rejected, handleError);
  },
});

export const {} = profileSlicer.actions;

export default profileSlicer.reducer;
