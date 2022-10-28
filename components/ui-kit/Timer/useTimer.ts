import { useEffect, useState } from 'react';

import { TimeBeforeEnd } from '../../nft/common/types';
import { NFTDescriptionData } from '../../nft/NFT/types';

import { calculateTimeLeft } from './utils';

export const useTimer = (data: NFTDescriptionData) => {
  const [timeBeforeEnd, setTimeBeforeEnd] = useState<TimeBeforeEnd>();

  useEffect(() => {
    if (data?.bid?.isOnBid) {
      const intervalId = setInterval(() => {
        setTimeBeforeEnd(calculateTimeLeft(data.bid?.endTime!));
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, []);

  return { timeBeforeEnd };
};
