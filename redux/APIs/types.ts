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

type NftName =
  | 'id'
  | 'name'
  | 'description'
  | 'creatorId'
  | 'type'
  | 'total'
  | 'available'
  | 'isOnSale'
  | 'likes';

type Nft = Record<NftName, string>;

export type { Nft, NftData };
