type NftData = {
  available: number;
  creatorId: number;
  description: string;
  isOnSale: boolean;
  likes: string[];
  name: string;
  total: number;
  type: string;
  __v: number;
  _id: string;
};

type Nft = Record<keyof Omit<NftData, '__v' | '_id'> | 'id', string>;

type UserData = {
  followers: string[];
  _id: string;
  publicAddress: string;
  username: string;
  role: string;
  nonce: number;
  __v: number;
};

type User = Record<keyof Omit<UserData, '__v' | '_id'> | 'id', string>;

type CollectionData = {
  _id: string;
  name: string;
  creatorId: number;
  metaDataUrl: string;
  __v: number;
  likes: string[];
  nftList: string[];
};

type Collection = Record<
  keyof Omit<CollectionData, '__v' | '_id'> | 'id',
  string | Array<string>
>;

type BidsData = {
  _id: string;
  date: string;
  __v: number;
};

type Bid = Record<keyof Omit<BidsData, '__v' | '_id'> | 'id', string>;

export type {
  Nft,
  NftData,
  User,
  UserData,
  CollectionData,
  Collection,
  BidsData,
  Bid,
};
