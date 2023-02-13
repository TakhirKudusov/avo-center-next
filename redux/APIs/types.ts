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

type BidData = {
  _id: string;
  date: string;
  __v: number;
};

type Bid = Record<keyof Omit<BidData, '__v' | '_id'> | 'id', string>;

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
  creator: string;
  NFT: string;
  createdAt: string;
  updatedAt: string;
};

type Report = Record<keyof Omit<ReportData, '_id'> | 'id', string>;

type NotificationData = {
  _id: string;
  title: string;
  message: string;
  image: string;
  user: string;
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
  owner: {
    _id: string;
    nonce: number;
    publicAddress: string;
    avatar: string;
    username: string;
    bio: string;
    webSite: string;
    twitter: string;
    socialAccount: string;
    wallet: string;
    balace: number;
    role: string;
    isVerified: boolean;
    followers: string[];
    createdAt: string;
    updatedAt: string;
  };
};

type SellersOwner = Record<
  | keyof Omit<SellersData['owner'], '_id' | 'nonce' | 'balace' | 'followers'>
  | 'id',
  string
> &
  Record<'nonce' | 'balace', number> &
  Record<'followers', string[]>;

type Sellers = Record<
  keyof Omit<SellersData, '_id' | 'owner' | 'sum'> | 'id',
  string
> &
  Record<'owner', SellersOwner> &
  Record<'sum', number>;

type CreatorsData = {
  _id: string;
  sum: number;
  creator: {
    _id: string;
    nonce: number;
    publicAddress: string;
    avatar: string;
    username: string;
    bio: string;
    webSite: string;
    twitter: string;
    socialAccount: string;
    wallet: string;
    balace: number;
    role: string;
    isVerified: boolean;
    followers: string[];
    createdAt: string;
    updatedAt: string;
  };
};

type CreatorsCreator = Record<
  | keyof Omit<
      CreatorsData['creator'],
      '_id' | 'nonce' | 'balace' | 'followers'
    >
  | 'id',
  string
> &
  Record<'nonce' | 'balace', number> &
  Record<'followers', string[]>;

type Creators = Record<
  keyof Omit<CreatorsData, '_id' | 'creator' | 'sum'> | 'id',
  string
> &
  Record<'creator', CreatorsCreator> &
  Record<'sum', number>;

type VerificationData = {
  _id: string;
  idPhoto: string;
  facePhoto: string;
  user: {
    _id: string;
    nonce: number;
    publicAddress: string;
    avatar: string;
    username: string;
    bio: string;
    webSite: string;
    twitter: string;
    socialAccount: string;
    wallet: string;
    balace: number;
    role: string;
    isVerified: boolean;
    followers: string[];
    createdAt: string;
    updatedAt: string;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
};

type VerificationUser = Record<
  | keyof Omit<
      VerificationData['user'],
      '_id' | 'nonce' | 'balace' | 'followers'
    >
  | 'id',
  string
> &
  Record<'nonce' | 'balace', number> &
  Record<'followers', string[]>;

type Verification = Record<
  keyof Omit<VerificationData, '_id' | 'user'> | 'id',
  string
> &
  Record<'user', VerificationUser>;

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
