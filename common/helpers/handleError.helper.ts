// import { openErrorNotification } from "./openErrorNotification"
import { PayloadAction } from '@reduxjs/toolkit';

const handleError = (state: any, action: PayloadAction<any, any, any, any>) => {
  state.loading = false;
  // openErrorNotification(action.payload)
  console.log('rejected')
}

const handleChangeError = (state: any, action: PayloadAction<any, any, any, any>) => {
  state.saveLoading = false;
  // openErrorNotification(action.payload)
  console.log('rejected')
}

export { handleError, handleChangeError }