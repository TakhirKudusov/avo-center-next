import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { handleError, handlePending } from '../../../common/helpers';
import { ICollection, INFT, NftsService } from '../../../swagger';

import { TSearchState } from './types';

export const searchItems = createAsyncThunk<
  Array<INFT | ICollection>,
  string,
  { rejectValue: string }
>('serach/get-items', async function (searchPhrase): Promise<any> {
  const response = await NftsService.getNfTs(
    '0',
    '100',
    '_id',
    undefined,
    searchPhrase,
  );

  return response.data;
});

export const initialState: TSearchState = {
  items: [],
  loading: false,
};

const discoverSlicer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearItems(state: TSearchState) {
      state.items = initialState.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchItems.pending, handlePending)
      .addCase(searchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;

        console.log('fulfilled');
      })
      .addCase(searchItems.rejected, handleError);
  },
});

export const { clearItems } = discoverSlicer.actions;

export default discoverSlicer.reducer;
