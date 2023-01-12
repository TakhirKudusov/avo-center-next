import { createContext, Dispatch } from 'react';

type NFTContextValue = {
  setIsTransferTokenModalOpen: Dispatch<boolean>;
  setIsRemoveFromSaleModalOpen: Dispatch<boolean>;
  setIsBurnTokenModalOpen: Dispatch<boolean>;
  setIsReportModalOpen: Dispatch<boolean>;
};

export const NFTContext = createContext<NFTContextValue>({
  setIsTransferTokenModalOpen: () => false,
  setIsRemoveFromSaleModalOpen: () => false,
  setIsBurnTokenModalOpen: () => false,
  setIsReportModalOpen: () => false,
});
