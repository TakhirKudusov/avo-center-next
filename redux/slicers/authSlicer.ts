import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { HttpStatus, Role } from '../../common/enums';
import {
  getErrorMassage,
  handleError,
  handlePending,
} from '../../common/helpers';
import { IUser } from '../../common/interfaces';
import { axiosInstance } from '../../components/common/axios.instance';
import { TAuthState } from '../types';

import Web3 from 'web3';
import {
  getUserInfo,
  setAccessToken,
} from '../../common/helpers/jwt-token.helper';
import {
  handleAuthenticate,
  handleSignMessage,
  handleSignup,
} from '../../common/helpers/auth.helper';
import { OpenAPI } from '../../swagger';

export const signin = createAsyncThunk<
  IUser,
  undefined,
  { rejectValue: string }
>('auth/signin', async function (payload, { rejectWithValue }): Promise<any> {
  try {
    if (!(window as any).ethereum) {
      window.alert('Please install MetaMask first.');

      return;
    }

    if (!(window as any).web3obj) {
      try {
        await (window as any).ethereum.enable();

        (window as any).web3obj = new Web3((window as any).ethereum);
      } catch (error) {
        window.alert('You need to allow MetaMask.');

        return;
      }
    }

    const coinbase = await (window as any).web3obj.eth.getCoinbase();
    if (!coinbase) {
      window.alert('Please activate MetaMask first.');

      return;
    }

    const publicAddress = coinbase.toLowerCase();
    // setLoading(true);

    try {
      const response = await axiosInstance.get(
        `/users?publicAddress=${publicAddress}`,
      );

      let authData = {} as any;

      if (!response.data.data.length) {
        const sunupResponse: any = await handleSignup(publicAddress);
        authData = sunupResponse.data?.data;
      } else {
        authData = response.data.data[0];
      }

      const handleSignMessageResponse = await handleSignMessage(authData);
      const handleAuthenticateResponse = await handleAuthenticate({
        ...handleSignMessageResponse,
      });

      setAccessToken(handleAuthenticateResponse.data.accessToken.accessToken);
      OpenAPI.TOKEN = handleAuthenticateResponse.data.accessToken.accessToken;

      const user = getUserInfo();

      console.log('LOGGED IN', handleAuthenticateResponse.data);
      return user;
    } catch (error) {
      window.alert(error);
      // setLoading(false);
    }
  } catch (error: any) {
    return rejectWithValue(getErrorMassage(error.response.status));
  }
});

const initialState: TAuthState = {
  user: null,
  loading: false,
};

const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signout(state: TAuthState) {
      state.user = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      OpenAPI.TOKEN = '';
    },
    setUser(state: TAuthState, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //signin
      .addCase(signin.pending, handlePending)
      .addCase(signin.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(signin.rejected, handleError);
  },
});

export const { signout, setUser } = authSlicer.actions;

export default authSlicer.reducer;
