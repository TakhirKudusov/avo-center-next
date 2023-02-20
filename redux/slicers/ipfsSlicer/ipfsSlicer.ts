import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { handleError, handlePending } from '../../../common/helpers';
import { AttachmentsService, IpfsService } from '../../../swagger';
import { TIpfsState } from './types';

export const addAttachment = createAsyncThunk<
  any,
  Blob,
  { rejectValue: string }
>('ipfs/addAttachment', async function (payload): Promise<any> {
  return await IpfsService.uploadAttachments(payload);
});

// export const seeUploadedFile = createAsyncThunk<
//   Blob,
//   string,
//   { rejectValue: string }
// >('attachments/seeUploadedFile', async function (payload): Promise<any> {
//   return await AttachmentsService.seeUploadedFile(payload);
// });

const initialState: TIpfsState = {
  file: null,
  fileUrl: '',
  loading: false,
};

const ipfsSlicer = createSlice({
  name: 'ipfs',
  initialState,
  reducers: {
    setFile(state: TIpfsState, action: PayloadAction<File | null>) {
      state.file = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //signin
      .addCase(addAttachment.pending, handlePending)
      .addCase(addAttachment.fulfilled, (state, action) => {
        console.log(action.payload);
        state.fileUrl = action.payload.path;
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(addAttachment.rejected, handleError);
  },
});

export const {} = ipfsSlicer.actions;

export default ipfsSlicer.reducer;
