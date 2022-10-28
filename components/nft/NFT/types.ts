import { NFT } from '../common/types';

export type NFTDescriptionData = Omit<NFT, 'image' | 'tags'>;
