import { DateTypes } from '../../nft/common/enums';
import { calculateTime } from '../../nft/common/helpers';
import { TimeBeforeEnd } from '../../nft/common/types';

export const calculateTimeLeft = (
  endTime: string,
): TimeBeforeEnd | undefined => {
  const difference = +new Date(endTime) - +new Date();
  let timeLeft: TimeBeforeEnd;

  if (difference > 0) {
    timeLeft = {
      days: calculateTime(difference, DateTypes.days),
      hours: calculateTime(difference, DateTypes.hours),
      mins: calculateTime(difference, DateTypes.mins),
      secs: calculateTime(difference, DateTypes.secs),
    };
    return timeLeft;
  }
};

export const getTimeItemData = (timeBeforeEnd?: TimeBeforeEnd) => {
  if (timeBeforeEnd) {
    const timeEntries = Object.entries(timeBeforeEnd);

    return timeEntries.map((item) => ({
      digit: item[0],
      value: item[1],
    }));
  }

  return null;
};
