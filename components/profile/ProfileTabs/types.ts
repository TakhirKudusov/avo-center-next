export type Frame = {
  id: number;
  src: string;
};

export type Follower = {
  id: number;
  name: string;
  avatar: string;
  followerNumber: number;
  frameList: Frame[];
};
