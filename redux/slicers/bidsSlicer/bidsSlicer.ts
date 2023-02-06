import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { handleError, handlePending } from '../../../common/helpers';
import { BidsService, IBid } from '../../../swagger';

import { TBidsResponse, TBidsState } from './types';

export const getHotBids = createAsyncThunk<
  TBidsResponse,
  undefined,
  { rejectValue: string }
>('bids/hot-bids', async function (payload): Promise<any> {
  return await BidsService.getBids(payload);
});

export const createBid = createAsyncThunk<IBid, IBid, { rejectValue: string }>(
  'bids/create',
  async function (payload): Promise<any> {
    return await BidsService.createBid({
      date: payload.date,
      nft: payload.nft.name,
    });
  },
);

// export const editBid = createAsyncThunk<
//   IBid,
//   { id: string; body: IBid },
//   { rejectValue: string }
// >('bids/edit', async function (payload): Promise<any> {
//   return await BidsService.updateBid(payload.id, {
//     date: payload.body.date,
//     nft: payload.body.nft.name,
//   });
// });

export const initialState: TBidsState = {
  bids: [],
  loading: false,
};

const bidsSlicer = createSlice({
  name: 'bids',
  initialState,
  reducers: {
    // setUser(state: TAuthState, action: PayloadAction<IUser | null>) {
    //   state.user = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHotBids.pending, handlePending)
      .addCase(getHotBids.fulfilled, (state, action) => {
        state.bids = action.payload.data;
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(getHotBids.rejected, handleError);
    builder
      .addCase(createBid.pending, handlePending)
      .addCase(createBid.fulfilled, (state, action) => {
        state.bids = [...state.bids, action.payload];
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(createBid.rejected, handleError);
  },
});

export const {} = bidsSlicer.actions;

export default bidsSlicer.reducer;
