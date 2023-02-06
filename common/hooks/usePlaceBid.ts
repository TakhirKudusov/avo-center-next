import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { TAuthState } from '../../redux/types';

export const usePlaceBid = (setOpenConnectWallet: (value: boolean) => void) => {
  const [openPlaceBid, setOpenPlaceBid] = useState(false);
  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const handlePlaceBidOpen = () => {
    if (!!user) {
      setOpenPlaceBid(true);
    } else {
      setOpenConnectWallet(true);
    }
  };
  const handlePlaceBidClose = () => {
    setOpenPlaceBid(false);
  };

  return {
    openPlaceBid,
    handlePlaceBidOpen,
    handlePlaceBidClose,
  };
};
