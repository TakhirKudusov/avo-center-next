import { TimeBeforeEnd, Buttons } from './types';
import { DateTypes } from './enums';
import { ButtonType } from '../../ui-kit';

const dateItemFormat = (item: string): string => {
  if (item.length < 2) {
    return item.padStart(2, '0');
  }
  return item;
};

const calculateTime = (value: number, type: DateTypes | string): string => {
  switch (type) {
    case 'days':
      return dateItemFormat(String(Math.floor(value / 1000 / 60 / 60 / 24)));
    case 'hours':
      return dateItemFormat(String(Math.floor((value / 1000 / 60 / 60) % 24)));
    case 'mins':
      return dateItemFormat(String(Math.floor((value / 1000 / 60) % 60)));
    case 'secs':
      return dateItemFormat(String(Math.floor((value / 1000) % 60)));
    default:
      return '00';
  }
};

const pastTimeFormat = (time: string, type: string): string => {
  let newTime = time;
  if (time[0] === '0') {
    newTime = time.substring(1);
  }
  return `${newTime}${type[0]}.`;
};

const getPastTime = (timeOfEvent: string): string | undefined => {
  const difference = +new Date() - +new Date(timeOfEvent);
  const dateTypesKeys: string[] = Object.keys(DateTypes);
  for (let i = 0; i < dateTypesKeys.length; i++) {
    const timeValue = calculateTime(difference, dateTypesKeys[i]);
    if (timeValue !== '00') {
      return pastTimeFormat(timeValue, dateTypesKeys[i]);
    }
  }
};

const fromNameFormatter = (name: string): string => {
  if (name.length > 10) {
    return name.substring(0, 10).padEnd(13, '.');
  }
  return name;
};

const getAuthorNFTButtons = (
  handlePurchaseOpen: () => void,
  handlePlaceBidOpen: () => void,
): Buttons[] => [
  {
    name: 'Purchase',
    type: ButtonType.Secondary,
    onClick: handlePurchaseOpen,
  },
  {
    name: 'Place a bid',
    type: ButtonType.Primary,
    onClick: handlePlaceBidOpen,
  },
];

const getUserNFTButtons = (
  isNFTOnSale: boolean,
  handlePutOnSaleOpen: () => void,
  handleAcceptBidOpen: () => void,
): Buttons[] => {
  if (!isNFTOnSale) {
    return [
      {
        name: 'Put on sale',
        type: ButtonType.Primary,
        onClick: handlePutOnSaleOpen,
      },
    ];
  }

  return [
    {
      name: 'Accept',
      type: ButtonType.Secondary,
      onClick: handleAcceptBidOpen,
    },
    {
      name: 'View all',
      type: ButtonType.Primary,
    },
  ];
};

export {
  getUserNFTButtons,
  getAuthorNFTButtons,
  calculateTime,
  fromNameFormatter,
  getPastTime,
};
