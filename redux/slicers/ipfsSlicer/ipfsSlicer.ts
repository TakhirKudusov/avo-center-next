import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { handleError, handlePending } from '../../../common/helpers';
import { AttachmentsService, INFTMetaDTO, IpfsService } from '../../../swagger';
import { TIpfsState } from './types';

export const addAttachment = createAsyncThunk<
  any,
  Blob,
  { rejectValue: string }
>('ipfs/addAttachment', async function (payload): Promise<any> {
  return await IpfsService.uploadAttachments(payload);
});

export const uploadNFTMetadata = createAsyncThunk<
  any,
  INFTMetaDTO,
  { rejectValue: string }
>('ipfs/upload-json', async function (payload): Promise<any> {
  return await IpfsService.uploadJson(payload);
});

const initialState: TIpfsState = {
  file: null,
  fileUrl: '',
  metaDataUrl: '',
  loading: false,
};

const ipfsSlicer = createSlice({
  name: 'ipfs',
  initialState,
  reducers: {
    setFile(state: TIpfsState, action: PayloadAction<File | null>) {
      state.file = action.payload;
    },
    clearFileUrl(state: TIpfsState) {
      state.fileUrl = initialState.fileUrl;
    },
    clearMetaDataUrl(state: TIpfsState) {
      state.metaDataUrl = initialState.metaDataUrl;
    },
  },
  extraReducers: (builder) => {
    builder
      //signin
      .addCase(addAttachment.pending, handlePending)
      .addCase(addAttachment.fulfilled, (state, action) => {
        state.fileUrl = action.payload.path;
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(addAttachment.rejected, handleError)
      .addCase(uploadNFTMetadata.pending, handlePending)
      .addCase(uploadNFTMetadata.fulfilled, (state, action) => {
        console.log(action.payload);
        state.metaDataUrl = action.payload.path;
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(uploadNFTMetadata.rejected, handleError);
  },
});

export const { setFile, clearMetaDataUrl, clearFileUrl } = ipfsSlicer.actions;

export default ipfsSlicer.reducer;
