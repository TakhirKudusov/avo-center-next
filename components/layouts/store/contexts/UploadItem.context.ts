import { createContext } from 'react';
import { UploadItemContextValue } from './types';

export const UploadItemContext = createContext<UploadItemContextValue>({
  isUploadItemVisible: false,
  handleUploadClick: () => () => false,
  handleUploadItemClose: () => false,
});
