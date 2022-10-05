import { SelectItem } from "../../ui-kit/Select";
import { ListItem } from "../../ui-kit/types";
import { Bid } from "../HotBids/types";
import { SortConfig } from "./types";

const PERIODS: SelectItem[] = [
  {
    label: 'Recently added',
    value: '1',
  },
];

const GENRES: ListItem[] = [
  {
    id: 1,
    label: 'All items',
  },
  {
    id: 2,
    label: 'Art',
  },
  {
    id: 3,
    label: 'Game',
  },
  {
    id: 4,
    label: 'Photography',
  },
  {
    id: 5,
    label: 'Music',
  },
  {
    id: 6,
    label: 'Video',
  },
];

const SORT_CONFIG_LIST: SortConfig[] = [
  {
    label: 'price',
    items: [
      {
        label: 'Highest price',
        value: '1',
      }
    ],
  },
  {
    label: 'likes',
    items: [
      {
        label: 'Most liked',
        value: '1',
      }
    ],
  },
  {
    label: 'creator',
    items: [
      {
        label: 'Verified only',
        value: '1',
      }
    ],
  },
  {
    label: 'price range',
    items: [
      {
        label: 'Test',
        value: '1',
      }
    ],
  },
];

const BID_LIST: Bid[] = [
  {
    image: 'hotbid1.jpg',
    name: 'Amazing digital',
    avoAmonut: 2.45,
    total: 20,
    available: 10,
    highestBid: 0.001
  },
  {
    image: 'bid1.jpg',
    name: 'Amazing digital',
    avoAmonut: 2.45,
    total: 20,
    available: 10,
    highestBid: 0.001
  },
  {
    image: 'hotbid2.jpg',
    name: 'Amazing digital',
    avoAmonut: 2.45,
    total: 20,
    available: 10,
    highestBid: 0.001
  },
  {
    image: 'hotbid3.jpg',
    name: 'Amazing digital',
    avoAmonut: 2.45,
    total: 20,
    available: 10,
    highestBid: 0.001
  },
  {
    image: 'hotbid1.jpg',
    name: 'Amazing digital',
    avoAmonut: 2.45,
    total: 20,
    available: 10,
    highestBid: 0.001
  },
  {
    image: 'bid1.jpg',
    name: 'Amazing digital',
    avoAmonut: 2.45,
    total: 20,
    available: 10,
    highestBid: 0.001
  },
  {
    image: 'hotbid2.jpg',
    name: 'Amazing digital',
    avoAmonut: 2.45,
    total: 20,
    available: 10,
    highestBid: 0.001
  },
  {
    image: 'hotbid3.jpg',
    name: 'Amazing digital',
    avoAmonut: 2.45,
    total: 20,
    available: 10,
    highestBid: 0.001
  }
];

export { PERIODS, GENRES, SORT_CONFIG_LIST, BID_LIST };
