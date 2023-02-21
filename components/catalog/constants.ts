import { TFilterOption } from './types';

const LIKE_ITEMS: TFilterOption[] = [
  {
    id: '1',
    name: 'More liked',
    url: '-1',
  },
  {
    id: '2',
    name: 'Less liked',
    url: '1',
  },
];

const PRICE_ITEMS: TFilterOption[] = [
  {
    id: '1',
    name: 'Highest price',
    url: '-1',
  },
  {
    id: '2',
    name: 'Lowest price',
    url: '1',
  },
];

const TYPE_ITEMS: TFilterOption[] = [
  {
    id: '1',
    name: 'NFT',
    url: 'nft',
  },
  {
    id: '2',
    name: 'Bid',
    url: 'bid',
  },
];

const CREATOR_ITEMS: TFilterOption[] = [
  {
    id: '1',
    name: 'Verified only',
    url: 'true',
  },
  {
    id: '1',
    name: 'Not verified only',
    url: 'false',
  },
];

export { LIKE_ITEMS, PRICE_ITEMS, TYPE_ITEMS, CREATOR_ITEMS };
