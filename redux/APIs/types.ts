type NftData = {
  available: string;
  creator: UserData;
  owner: UserData;
  description: string;
  isOnSale: boolean;
  likes: string[];
  name: string;
  total: number;
  type: string;
  __v: number;
  _id: string;
  royalties: string;
  salePrice: string;
  updatedAt: string;
  likesLength: string;
};

type Nft = Record<
  | keyof Omit<NftData, '__v' | '_id' | 'likes' | 'owner' | 'creator'>
  | 'id'
  | 'creatorId'
  | 'ownerId'
  | 'likesLength',
  string
>;

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

type BidData = {
  _id: string;
  date: string;
  __v: number;
  nft: NftData;
  creator: UserData;
};

type Bid = Record<
  | keyof Omit<BidData, '__v' | '_id' | 'nft' | 'creator'>
  | 'id'
  | 'nftId'
  | 'creatorId',
  string
>;

type FaqsData = {
  _id: string;
  title: string;
  description: number;
  createdAt: string;
  updatedAt: string;
};

type Faqs = Record<keyof Omit<FaqsData, '_id' | 'description'> | 'id', string> &
  Record<'description', number>;

type ReportData = {
  _id: string;
  message: string;
  creator: UserData;
  NFT: NftData;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type Report = Record<keyof Omit<ReportData, '_id'> | 'id', string>;

type NotificationData = {
  _id: string;
  title: string;
  message: string;
  image: string;
  user: UserData;
  createdAt: string;
  updatedAt: string;
};

type Notification = Record<
  keyof Omit<NotificationData, '_id' | 'isRead'> | 'id',
  string
>;

type CategoryData = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type Category = Record<keyof Omit<CategoryData, '_id'> | 'id', string>;

type SellersData = {
  _id: string;
  sum: number;
  owner: UserData;
};

type Sellers = Record<
  keyof Omit<SellersData, '_id' | 'owner'> | 'id' | 'ownerId',
  string
>;

type CreatorsData = {
  _id: string;
  sum: number;
  creator: UserData;
};

type Creators = Record<
  keyof Omit<CreatorsData, '_id' | 'creator'> | 'id' | 'creatorId',
  string
>;

type VerificationData = {
  _id: string;
  idPhoto: string;
  facePhoto: string;
  user: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type Verification = Record<keyof Omit<VerificationData, '_id'> | 'id', string>;

export type {
  Nft,
  NftData,
  User,
  UserData,
  CollectionData,
  Collection,
  BidData,
  Bid,
  FaqsData,
  Faqs,
  ReportData,
  Report,
  NotificationData,
  Notification,
  CategoryData,
  Category,
  SellersData,
  Sellers,
  CreatorsData,
  Creators,
  VerificationData,
  Verification,
};
