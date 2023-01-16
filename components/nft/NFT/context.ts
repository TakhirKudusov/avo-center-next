import { createContext } from 'react';
import { ConnectWalletContextValue, NFTContextValue } from './types';

export const NFTContext = createContext<NFTContextValue>({
  setIsTransferTokenModalOpen: () => false,
  setIsRemoveFromSaleModalOpen: () => false,
  setIsBurnTokenModalOpen: () => false,
  setIsReportModalOpen: () => false,
  handleDownloadFile: () => false,
});

export const ConnectWalletContext = createContext<ConnectWalletContextValue>({
  openConnectWallet: false,
  setOpenConnectWallet: () => false,
  handleSignIn: () => false,
});
