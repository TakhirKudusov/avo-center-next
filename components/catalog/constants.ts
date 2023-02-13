import { TFilterOption } from './types';

const LIKE_ITEMS: TFilterOption[] = [
  {
    id: '1',
    name: 'More liked',
    url: 'more-liked',
  },
  {
    id: '2',
    name: 'Less liked',
    url: 'less-liked',
  },
];
const PRICE_ITEMS: TFilterOption[] = [
  {
    id: '1',
    name: 'Highest price',
    url: 'highest-price',
  },
  {
    id: '2',
    name: 'Lowest price',
    url: 'lowest-price',
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

export { LIKE_ITEMS, PRICE_ITEMS, TYPE_ITEMS };
