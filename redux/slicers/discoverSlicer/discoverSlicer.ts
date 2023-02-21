import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { handleError, handlePending } from '../../../common/helpers';
import {
  BidsService,
  CategoriesService,
  IBid,
  ICategory,
  INFT,
  IPaginationProductResponse,
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
  IPaginationProductResponse,
  {
    category: string;
    name: string;
    isVerified?: boolean;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
  },
  { rejectValue: string }
>(
  'discover/get-NFTs',
  async function ({
    name,
    category,
    isVerified,
    minPrice,
    maxPrice,
    sortBy,
  }): Promise<any> {
    return await NftsService.getNfTs(
      0,
      100,
      sortBy,
      undefined,
      undefined,
      isVerified,
      name,
      undefined,
      minPrice,
      maxPrice,
      true,
      category !== 'undefined' ? category : undefined,
      true,
    );
  },
);

export const fetchBids = createAsyncThunk<
  IPaginationProductResponse,
  {
    category: string;
    name: string;
    isVerified?: boolean;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
  },
  { rejectValue: string }
>(
  'discover/get-bids',
  async function ({
    name,
    category,
    isVerified,
    minPrice,
    maxPrice,
    sortBy,
  }): Promise<any> {
    return await BidsService.getBids(
      0,
      100,
      sortBy,
      undefined,
      undefined,
      isVerified,
      name,
      undefined,
      undefined,
      minPrice,
      maxPrice,
      category !== 'undefined' ? category : undefined,
    );
  },
);

export const initialState: TDiscoverState = {
  categories: [],
  bids: [],
  priceRange: { minPrice: undefined, maxPrice: undefined },
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
    resetPriceRange(state: TDiscoverState) {
      state.priceRange = initialState.priceRange;
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
        const [minPrice, maxPrice] = action.payload.priceRange;
        state.priceRange = { minPrice, maxPrice };
        state.loading = false;

        console.log('fulfilled');
      })
      .addCase(fetchNFTs.rejected, handleError)
      .addCase(fetchBids.pending, handlePending)
      .addCase(fetchBids.fulfilled, (state, action) => {
        state.bids = action.payload.data as unknown[] as IBid[];
        const [minPrice, maxPrice] = action.payload.priceRange;
        state.priceRange = { minPrice, maxPrice };
        state.loading = false;

        console.log('fulfilled');
      })
      .addCase(fetchBids.rejected, handleError);
  },
});

export const { clearCategories, clearBids, clearNFTs, resetPriceRange } =
  discoverSlicer.actions;

export default discoverSlicer.reducer;
