import { useEffect, useState } from 'react';
import { IBid } from '../../../swagger';

import { TimeBeforeEnd } from '../../nft/common/types';

import { calculateTimeLeft } from './utils';

export const useTimer = (bid: IBid) => {
  const [timeBeforeEnd, setTimeBeforeEnd] = useState<TimeBeforeEnd>();

  useEffect(() => {
    if (bid?.nft?.isOnSale) {
      const intervalId = setInterval(() => {
        setTimeBeforeEnd(calculateTimeLeft(bid?.date!));
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [bid?.date, bid?.nft?.isOnSale]);

  return { timeBeforeEnd };
};
