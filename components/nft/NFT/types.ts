import { Dispatch } from 'react';
import { NFT } from '../common/types';

export type NFTDescriptionData = Omit<NFT, 'image' | 'tags'>;

export type NFTContextValue = {
  setIsTransferTokenModalOpen: Dispatch<boolean>;
  setIsRemoveFromSaleModalOpen: Dispatch<boolean>;
  setIsBurnTokenModalOpen: Dispatch<boolean>;
  setIsReportModalOpen: Dispatch<boolean>;
  handleDownloadFile: (fileName: string) => void;
};

export type ConnectWalletContextValue = {
  openConnectWallet: boolean;
  setOpenConnectWallet: Dispatch<boolean>;
  handleSignIn: () => void;
};
