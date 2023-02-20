import { IUser } from '../../../swagger';

export type Frame = {
  id: string;
  src: string;
};

export type Follower = {
  _id: string;
  name: string;
  avatar: string;
  followerNumber: number;
  frameList: Frame[];
  followers: IUser[];
};
