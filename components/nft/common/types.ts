import { NFTTag } from '../../ui-kit/Tag/types';

export type NFT = {
  image: string;
  title: string;
  price: string;
  convertedPrice: string;
  total: string;
  available: string;
  desc: string;
  listingsData: ListingData[];
  tags: NFTTag[];
  bid?: {
    isOnBid: true;
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

export type CommentsData = {
  currentOwner: OwnerMessage;
  oldOwners?: OwnerMessage[];
  commentsQuantity: string;
};

export type Buttons = {
  name: string;
  type?: string;
};

export type TableHeadTitles = ['From', 'Expiration', 'Price'];
