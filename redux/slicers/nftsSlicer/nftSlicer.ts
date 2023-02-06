import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { handleError, handlePending } from '../../../common/helpers';
import { INFT, NftsService } from '../../../swagger';
// import { handleError, handlePending } from '../../../common/helpers';
// import { AttachmentsService } from '../../../swagger';
import { TNftsState } from './types';

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

const initialState: TNftsState = {
  nfts: [],
  loading: false,
};

const nftsSlicer = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    // setFile(state: TAttachmentsState, action: PayloadAction<File | null>) {
    //   state.file = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(likeNft.pending, handlePending)
      .addCase(likeNft.fulfilled, (state, action) => {
        console.log(action.payload);
        state.nfts = [
          ...state.nfts.filter((nft) => nft._id === action.payload._id),
          action.payload,
        ];
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(likeNft.rejected, handleError);
    builder
      .addCase(unlikeNft.pending, handlePending)
      .addCase(unlikeNft.fulfilled, (state, action) => {
        console.log(action.payload);
        state.nfts = [
          ...state.nfts.filter((nft) => nft._id === action.payload._id),
          action.payload,
        ];
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(unlikeNft.rejected, handleError);
  },
});

export const {} = nftsSlicer.actions;

export default nftsSlicer.reducer;
