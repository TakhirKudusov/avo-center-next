import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { handleError, handlePending } from '../../../common/helpers';
import { AttachmentsService } from '../../../swagger';
import { TAttachmentsState } from './types';

export const addAttachment = createAsyncThunk<
  any,
  File,
  { rejectValue: string }
>('attachments/addAttachment', async function (payload): Promise<any> {
  return await AttachmentsService.uploadAttachments(payload);
});

// export const seeUploadedFile = createAsyncThunk<
//   Blob,
//   string,
//   { rejectValue: string }
// >('attachments/seeUploadedFile', async function (payload): Promise<any> {
//   return await AttachmentsService.seeUploadedFile(payload);
// });

const initialState: TAttachmentsState = {
  file: null,
  fileUrl: '',
  loading: false,
};

const attachmentsSlicer = createSlice({
  name: 'attachments',
  initialState,
  reducers: {
    setFile(state: TAttachmentsState, action: PayloadAction<File | null>) {
      state.file = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //signin
      .addCase(addAttachment.pending, handlePending)
      .addCase(addAttachment.fulfilled, (state, action) => {
        console.log(action.payload);
        state.fileUrl = action.payload[0].fileName;
        state.loading = false;
        // openSuccessNotification('Вы успешно авторизованы!');
        console.log('fulfilled');
      })
      .addCase(addAttachment.rejected, handleError);
  },
});

export const {} = attachmentsSlicer.actions;

export default attachmentsSlicer.reducer;
