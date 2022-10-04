export type Bid = {
  image: string;
  name: string;
  price: number;
  number: number;
  creatorAvatar: string;
  black?: boolean;
}

export type Creator = {
  name: string;
  avatar: string;
  uploadNumber: number;
  avoAmount: number;
}
