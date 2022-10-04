import { Bid, Creator } from "./types";

const bids: Bid[] = [
  {
    image: 'bid1.jpg',
    name: 'AVO never die',
    price: 0.27,
    number: 12,
    creatorAvatar: 'creator1.jpg',
  },
  {
    image: 'bid2.jpg',
    name: 'Future coming soon',
    price: 0.27,
    number: 3,
    creatorAvatar: 'creator2.jpg',
  },
  {
    image: 'bid3.jpg',
    name: 'Elon Musk silver coin 3d print',
    price: 0.27,
    number: 4,
    creatorAvatar: 'creator3.jpg',
  }
];

const creators: Creator[] = [
  {
    name: 'Payton Harris',
    avatar: 'creator1.jpg',
    uploadNumber: 6,
    avoAmount: 2.456,
  },
  {
    name: 'Anita Bins',
    avatar: 'creator4.jpg',
    uploadNumber: 2,
    avoAmount: 2.456,
  },
  {
    name: 'Joana Wuckert',
    avatar: 'creator5.jpg',
    uploadNumber: 3,
    avoAmount: 2.456,
  },
  {
    name: 'Lorena Ledner',
    avatar: 'creator2.jpg',
    uploadNumber: 4,
    avoAmount: 2.456,
  }
];

export { bids, creators };