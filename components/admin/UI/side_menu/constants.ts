import { AdminRoute } from '../../utils/routes';

const NFT = [
  {
    id: 1,
    name: 'NFTs',
    link: AdminRoute.NFT,
  },
  {
    id: 2,
    name: 'NFT Likes',
    link: AdminRoute.NFT,
  },
];

const users = [
  {
    id: 1,
    name: 'Users',
    link: AdminRoute.USERS,
  },
];

const authors = [
  {
    id: 1,
    name: 'Authors',
    link: AdminRoute.AUTHORS,
  },
];

const wallets = [
  {
    id: 1,
    name: 'Wallets',
    link: AdminRoute.WALLETS,
  },
];

const categories = [
  {
    id: 1,
    name: 'Categories',
    link: AdminRoute.CATEGORIES,
  },
  {
    id: 2,
    name: 'Author categories',
    link: AdminRoute.CATEGORIES,
  },
];

const billing = [
  {
    id: 1,
    name: 'Web3 Payments',
    link: AdminRoute.BILLING,
  },
];

const token = [
  {
    id: 1,
    name: 'Token Course',
    link: AdminRoute.TOKEN,
  },
];

export { NFT, users, authors, wallets, categories, billing, token };
