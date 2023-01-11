// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import {
//   handleError,
//   handlePending,
// } from '../../common/helpers';
// import { IUser } from '../../common/interfaces';
// import { TAuthState } from '../types';

// export const signin = createAsyncThunk<
//   IUser,
//   undefined,
//   { rejectValue: string }
// >(
//   'auth/signin',
//   async function (payload, { rejectWithValue }): Promise<any> {},
// );

export const initialState: any = {
  user: null,
  loading: false,
};

// const authSlicer = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     signout(state: TAuthState) {
//       state.user = null;
//       localStorage.removeItem('accessToken');
//       localStorage.removeItem('refreshToken');
//     },
//     setUser(state: TAuthState, action: PayloadAction<IUser | null>) {
//       state.user = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       //signin
//       .addCase(signin.pending, handlePending)
//       .addCase(signin.fulfilled, (state, action) => {
//         console.log(action.payload);
//         state.user = action.payload;
//         state.loading = false;
//         // openSuccessNotification('Вы успешно авторизованы!');
//         console.log('fulfilled');
//       })
//       .addCase(signin.rejected, handleError);
//   },
// });

// export const { signout, setUser } = authSlicer.actions;

// export default authSlicer.reducer;
