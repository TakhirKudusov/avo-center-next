import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { handleError, handlePending } from '../../../common/helpers';
import { CollectionsService, ICollection } from '../../../swagger';

import { TCollectionsResponse, TCollectionsState } from './types';

export const getCollections = createAsyncThunk<
  TCollectionsResponse,
  undefined,
  { rejectValue: string }
>('collections', async function (payload): Promise<any> {
  return await CollectionsService.getCollections(payload);
});

export const createCollection = createAsyncThunk<
  ICollection,
  ICollection,
  { rejectValue: string }
>('collections/create', async function (payload): Promise<any> {
  return await CollectionsService.createCollection({
    name: payload.name,
    description: payload.description,
    category: payload.category,
    total: payload.total,
    royalties: 0,
    available: payload.available,
    metaDataUrl: payload.metaDataUrl,
    nftList: [],
  });
});

export const getHotCollections = createAsyncThunk<
  ICollection[],
  undefined,
  { rejectValue: string }
>('collections/hot-collections', async function (payload): Promise<any> {
  return await CollectionsService.getHotCollections();
});

// export const editCollections = createAsyncThunk<
//   IBid,
//   { id: string; body: IBid },
//   { rejectValue: string }
// >('bids/edit', async function (payload): Promise<any> {
//   return await BidsService.updateBid(payload.id, {
//     date: payload.body.date,
//     nft: payload.body.nft.name,
//   });
// });

export const initialState: TCollectionsState = {
  hotCollections: [],
  collections: [],
  loading: false,
};

const collectionsSlicer = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    // setUser(state: TAuthState, action: PayloadAction<IUser | null>) {
    //   state.user = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHotCollections.pending, handlePending)
      .addCase(getHotCollections.fulfilled, (state, action) => {
        console.log(action.payload);
        state.hotCollections = action.payload;

        console.log('state.hotCollections =', state.hotCollections);
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(getHotCollections.rejected, handleError);
    builder
      .addCase(createCollection.pending, handlePending)
      .addCase(createCollection.fulfilled, (state, action) => {
        console.log(action.payload);
        state.collections = [...state.collections, action.payload];
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(createCollection.rejected, handleError);
  },
});

export const {} = collectionsSlicer.actions;

export default collectionsSlicer.reducer;
