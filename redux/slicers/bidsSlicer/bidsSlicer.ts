import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { handleError, handlePending } from '../../../common/helpers';
import { BidsService, IBid, IComment, INFT } from '../../../swagger';
import { findComment } from '../../helpers';

import { TBidsState } from './types';

export const getHotBids = createAsyncThunk<
  IBid[],
  undefined,
  { rejectValue: string }
>('bids/hot-bids', async function (): Promise<any> {
  return await BidsService.getHotBids();
});

export const getBidById = createAsyncThunk<
  IBid,
  string,
  { rejectValue: string }
>('bids/bid', async function (payload): Promise<any> {
  return await BidsService.getBidById(payload);
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
  bid: null,
  loading: false,
};

const bidsSlicer = createSlice({
  name: 'bids',
  initialState,
  reducers: {
    setBid(state: TBidsState, action: PayloadAction<INFT>) {
      state.bid =
        state.bid && action.payload
          ? {
              ...state.bid,
              nft: { ...state.bid.nft, comments: action.payload.comments },
            }
          : state.bid;
    },
    likeBid(state: TBidsState, action: PayloadAction<IComment>) {
      state.bid =
        state.bid && action.payload
          ? {
              ...state.bid,
              nft: {
                ...state.bid.nft,
                comments:
                  findComment(state.bid.nft.comments, action.payload) ||
                  state.bid.nft.comments,
              },
            }
          : state.bid;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHotBids.pending, handlePending)
      .addCase(getHotBids.fulfilled, (state, action) => {
        state.bids = action.payload;
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
    builder
      .addCase(getBidById.pending, handlePending)
      .addCase(getBidById.fulfilled, (state, action) => {
        state.bid = action.payload;
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(getBidById.rejected, handleError);
  },
});

export const { setBid, likeBid } = bidsSlicer.actions;

export default bidsSlicer.reducer;
