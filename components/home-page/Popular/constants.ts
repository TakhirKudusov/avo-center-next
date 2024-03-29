import { SelectItem } from '../../ui-kit/Select/types';
import { Participant } from './types';

const sellers: Participant[] = [
  {
    name: 'Edd Harris',
    avoAmount: 2.456,
    avatar: 'creator6.jpg',
  },
  {
    name: 'Odell Hane',
    avoAmount: 2.456,
    avatar: 'creator7.jpg',
  },
  {
    name: 'Marlee Kuphal',
    avoAmount: 2.456,
    avatar: 'creator8.jpg',
  },
  {
    name: 'Payton Kunde',
    avoAmount: 2.456,
    avatar: 'creator9.jpg',
  },
  {
    name: 'Payton Buckridge',
    avoAmount: 2.456,
    avatar: 'creator10.jpg',
  },
  {
    name: 'Suzan Mane',
    avoAmount: 3.109,
    avatar: 'creator7.jpg',
  },
];

const dates: SelectItem[] = [
  {
    label: 'Today',
    value: '1',
  },
  {
    label: 'Last week',
    value: '2',
  },
  {
    label: 'Last month',
    value: '3',
  },
];

const POPULAR_TYPES = [
  {
    label: 'Creators',
    value: 'creators',
  },
  {
    label: 'Sellers',
    value: 'sellers',
  },
];

export enum PopularTypes {
  CREATORS = 'creators',
  SELLERS = 'sellers',
}

export { sellers, dates, POPULAR_TYPES };
