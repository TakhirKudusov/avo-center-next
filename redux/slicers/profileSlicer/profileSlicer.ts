import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { handleError, handlePending } from '../../../common/helpers';
import { IUpdateUserDto, IUser, UsersService } from '../../../swagger';

import { TProfileState } from './types';

export const getUsers = createAsyncThunk<
  IUser[],
  undefined,
  { rejectValue: string }
>('users', async function (): Promise<any> {
  return await UsersService.getUsers();
});

export const getUserProfile = createAsyncThunk<
  IUser,
  string,
  { rejectValue: string }
>('users/user', async function (payload): Promise<any> {
  return await UsersService.getUser(payload);
});

export const editUserProfile = createAsyncThunk<
  IUser,
  IUpdateUserDto,
  { rejectValue: string }
>('users/edit-profile', async function (payload): Promise<any> {
  return await UsersService.editProfile(payload);
});

export const followUser = createAsyncThunk<
  IUser,
  string,
  { rejectValue: string }
>('users/follow', async function (payload): Promise<any> {
  return await UsersService.followUser(payload);
});

export const unFollowUser = createAsyncThunk<
  IUser,
  string,
  { rejectValue: string }
>('users/unfollow', async function (payload): Promise<any> {
  return await UsersService.unFollowUser(payload);
});

export const initialState: TProfileState = {
  users: [],
  user: null,
  loading: false,
};

const profileSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //TODO: доработать логику для изменения followers и following на фронте
    updateUserAfterFollow(
      state: TProfileState,
      action: PayloadAction<(IUser & { userId: string }) | null>,
    ) {
      if (action.payload && state.user) {
        const followedUser = state.user.followers.find(
          (follower) => follower._id === action.payload?._id,
        );

        state.user = {
          ...state.user,
          following: [...state.user.following, action.payload],
          followers: [
            ...state.user.followers.filter(
              (item) => item._id !== action.payload?._id,
            ),
          ],
        };

        if (!!followedUser) {
          //followedUser.followers has string[] type
          (followedUser?.followers as unknown[]).push(action.payload?.userId);

          state.user.followers.push(followedUser);
        }
      }
    },
    updateUserAfterUnFollow(
      state: TProfileState,
      action: PayloadAction<(IUser & { userId: string }) | null>,
    ) {
      if (action.payload && state.user) {
        let followedUser = state.user.followers.find(
          (follower) => follower._id === action.payload?._id,
        );

        state.user = {
          ...state.user,
          following: [
            ...state.user.followers.filter(
              (item) => item._id !== action.payload?._id,
            ),
          ],
          followers: [
            ...state.user.followers.filter(
              (item) => item._id !== action.payload?._id,
            ),
          ],
        };

        if (!!followedUser) {
          //followedUser.followers has string[] type
          followedUser['followers'] = (followedUser?.followers as any[]).filter(
            (followerId) => followerId !== action.payload?.userId,
          );

          state.user.followers.push(followedUser);
        }
      }
    },
    setInitialUserData(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, handlePending)
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.rejected, handleError);
    builder
      .addCase(getUserProfile.pending, handlePending)
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(getUserProfile.rejected, handleError);
    builder
      .addCase(editUserProfile.pending, handlePending)
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(editUserProfile.rejected, handleError);
    builder
      .addCase(followUser.pending, handlePending)
      .addCase(followUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(followUser.rejected, handleError);
    builder
      .addCase(unFollowUser.pending, handlePending)
      .addCase(unFollowUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(unFollowUser.rejected, handleError);
  },
});

export const {
  updateUserAfterFollow,
  updateUserAfterUnFollow,
  setInitialUserData,
} = profileSlicer.actions;

export default profileSlicer.reducer;
