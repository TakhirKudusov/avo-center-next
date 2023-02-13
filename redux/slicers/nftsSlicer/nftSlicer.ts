import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { handleError, handlePending } from '../../../common/helpers';
import {
  IAddCommentDTO,
  IComment,
  ICreateNFTDTO,
  INFT,
  NftsService,
} from '../../../swagger';
import { findComment } from '../../helpers';
// import { handleError, handlePending } from '../../../common/helpers';
// import { AttachmentsService } from '../../../swagger';
import { TNftsState } from './types';

export const createNft = createAsyncThunk<
  INFT,
  ICreateNFTDTO,
  { rejectValue: string }
>('nfts/create', async function (payload): Promise<any> {
  return await NftsService.createNft(payload);
});

export const likeNft = createAsyncThunk<INFT, string, { rejectValue: string }>(
  'nfts/like',
  async function (payload): Promise<any> {
    return await NftsService.likeNft(payload);
  },
);

export const unlikeNft = createAsyncThunk<
  INFT,
  string,
  { rejectValue: string }
>('nfts/unlike', async function (payload): Promise<any> {
  return await NftsService.unlikeNft(payload);
});

export const commentNft = createAsyncThunk<
  INFT,
  { nftId: string; body: IAddCommentDTO },
  { rejectValue: string }
>('nfts/comment', async function (payload): Promise<any> {
  return await NftsService.addComment(payload.nftId, payload.body);
});

export const likeCommentNft = createAsyncThunk<
  IComment,
  string,
  { rejectValue: string }
>('nfts/like-comment', async function (payload): Promise<any> {
  return await NftsService.likeComment(payload);
});

export const unlikeCommentNft = createAsyncThunk<
  IComment,
  string,
  { rejectValue: string }
>('nfts/unlike-comment', async function (payload): Promise<any> {
  return await NftsService.unlikeComment(payload);
});

const initialState: TNftsState = {
  nfts: [],
  nft: null,
  loading: false,
};

const nftsSlicer = createSlice({
  name: 'nfts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNft.pending, handlePending)
      .addCase(createNft.fulfilled, (state, action) => {
        state.nfts = [...state.nfts, action.payload];
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(createNft.rejected, handleError);
    builder
      .addCase(likeNft.pending, handlePending)
      .addCase(likeNft.fulfilled, (state, action) => {
        state.nfts = [
          ...state.nfts.filter((nft) => nft._id === action.payload._id),
          action.payload,
        ];
        state.loading = false;
      })
      .addCase(likeNft.rejected, handleError);
    builder
      .addCase(unlikeNft.pending, handlePending)
      .addCase(unlikeNft.fulfilled, (state, action) => {
        state.nfts = [
          ...state.nfts.filter((nft) => nft._id === action.payload._id),
          action.payload,
        ];
        state.loading = false;
      })
      .addCase(unlikeNft.rejected, handleError);
    builder
      .addCase(commentNft.pending, handlePending)
      .addCase(commentNft.fulfilled, (state, action) => {
        state.nfts = [
          ...state.nfts.filter((item) => item._id === action.payload._id),
          action.payload,
        ];
        state.loading = false;
      })
      .addCase(commentNft.rejected, handleError);
    builder
      .addCase(likeCommentNft.pending, handlePending)
      .addCase(likeCommentNft.fulfilled, (state, action) => {
        console.log(action.payload);
        state.nft = state.nft
          ? {
              ...state.nft,
              comments: findComment(state.nft.comments, action.payload),
            }
          : null;
        state.loading = false;
      })
      .addCase(likeCommentNft.rejected, handleError);
    builder
      .addCase(unlikeCommentNft.pending, handlePending)
      .addCase(unlikeCommentNft.fulfilled, (state, action) => {
        console.log(action.payload);
        state.nft = state.nft
          ? {
              ...state.nft,
              comments: findComment(state.nft.comments, action.payload),
            }
          : null;
        state.loading = false;
      })
      .addCase(unlikeCommentNft.rejected, handleError);
  },
});

export const {} = nftsSlicer.actions;

export default nftsSlicer.reducer;
