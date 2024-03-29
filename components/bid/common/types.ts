import { ButtonType } from '../../ui-kit';
import { NFTTag } from '../../ui-kit/Tag/types';

export type NFT = {
  image: string;
  title: string;
  price: string;
  convertedPrice: string;
  total: string;
  available: string;
  desc: string;
  license: string;
  exclusiveFullLicense: string;
  listingsData: ListingData[];
  tags: NFTTag[];
  bid?: {
    isOnSale: true;
    endTime: string;
  };
};

export type TimeBeforeEnd = {
  days: string;
  hours: string;
  mins: string;
  secs: string;
};

export type MenuButtonType = {
  type: 'primary' | 'default';
};

export type ListingData = {
  from: string;
  expiration: string;
  price: string;
};

export type OwnerMessage = {
  image: string;
  name: string;
  message: string;
  likes: string;
  time: string;
};

export type CommentsData = any;

export type Buttons = {
  name: string;
  type?: ButtonType;
  onClick?: () => void;
};

export type TableHeadTitles = string[];
