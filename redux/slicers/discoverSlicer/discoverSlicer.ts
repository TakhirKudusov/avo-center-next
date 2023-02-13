import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { handleError, handlePending } from '../../../common/helpers';
import {
  BidsService,
  CategoriesService,
  IBid,
  ICategory,
  INFT,
  IPaginationResponse,
  NftsService,
} from '../../../swagger';

import { TDiscoverState } from './types';

export const fetchCategories = createAsyncThunk<
  IPaginationResponse,
  undefined,
  { rejectValue: string }
>('discover/get-categories', async function (): Promise<any> {
  return await CategoriesService.getCategories();
});

export const fetchNFTs = createAsyncThunk<
  IPaginationResponse,
  { category: string; name: string },
  { rejectValue: string }
>('discover/get-NFTs', async function ({ name, category }): Promise<any> {
  return await NftsService.getNfTs(
    '0',
    '100',
    '_id',
    undefined,
    name,
    undefined,
    undefined,
    category !== 'undefined' ? category : undefined,
  );
});

export const fetchBids = createAsyncThunk<
  IPaginationResponse,
  { category: string },
  { rejectValue: string }
>('discover/get-bids', async function (payload): Promise<any> {
  return await BidsService.getBids(
    '0',
    '100',
    '_id',
    undefined,
    undefined,
    // payload.category !== 'undefined' ? payload.category : undefined,
  );
});

export const initialState: TDiscoverState = {
  categories: [],
  bids: [],
  nfts: [],
  loading: false,
};

const discoverSlicer = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    clearCategories(state: TDiscoverState) {
      state.categories = initialState.categories;
    },
    clearNFTs(state: TDiscoverState) {
      state.nfts = initialState.nfts;
    },
    clearBids(state: TDiscoverState) {
      state.bids = initialState.bids;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.data as unknown[] as ICategory[];
        state.loading = false;

        console.log('fulfilled');
      })
      .addCase(fetchCategories.rejected, handleError)
      .addCase(fetchNFTs.pending, handlePending)
      .addCase(fetchNFTs.fulfilled, (state, action) => {
        state.nfts = action.payload.data as unknown[] as INFT[];
        state.loading = false;

        console.log('fulfilled');
      })
      .addCase(fetchNFTs.rejected, handleError)
      .addCase(fetchBids.pending, handlePending)
      .addCase(fetchBids.fulfilled, (state, action) => {
        state.bids = action.payload.data as unknown[] as IBid[];
        state.loading = false;

        console.log('fulfilled');
      })
      .addCase(fetchBids.rejected, handleError);
  },
});

export const { clearCategories, clearBids, clearNFTs } = discoverSlicer.actions;

export default discoverSlicer.reducer;
