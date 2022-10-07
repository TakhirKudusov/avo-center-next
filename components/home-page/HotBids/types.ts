type Network = {
  name: string;
  image: string;
}

export type Bid = {
  image: string;
  name: string;
  avoAmonut: number;
  total: number;
  available: number;
  highestBid?: number;
  network?: Network;
}