import {
  Bid,
  BidsData,
  Collection,
  CollectionData,
  Nft,
  NftData,
  User,
  UserData,
} from './types';

const handleTransformNftData = (data: NftData[]): Nft[] => {
  return data.reduce((previousValue: Nft[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      name: currentValue.name,
      description: currentValue.description,
      creatorId: String(currentValue.creatorId),
      type: currentValue.type,
      total: String(currentValue.total),
      available: currentValue.available ? 'Yes' : 'No',
      isOnSale: currentValue.isOnSale ? 'Yes' : 'No',
      likes: String(currentValue.likes.length),
    });

    return previousValue;
  }, []);
};

const handleTransformUsersData = (data: UserData[]): User[] => {
  return data.reduce((previousValue: User[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      followers: String(currentValue.followers.length),
      publicAddress: currentValue.publicAddress,
      username: currentValue.username,
      role: currentValue.role,
      nonce: String(currentValue.nonce),
    });

    return previousValue;
  }, []);
};

const handleTransformCollectionsData = (
  data: CollectionData[],
): Collection[] => {
  return data.reduce((previousValue: Collection[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      name: currentValue.name,
      creatorId: String(currentValue.creatorId),
      metaDataUrl: currentValue.metaDataUrl,
      likes: String(currentValue.likes.length),
      nftList: currentValue.nftList,
    });

    return previousValue;
  }, []);
};

const handleTransformBidsData = (data: BidsData[]): Bid[] => {
  return data.reduce((previousValue: Bid[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      date: currentValue.date,
    });

    return previousValue;
  }, []);
};

export {
  handleTransformNftData,
  handleTransformUsersData,
  handleTransformCollectionsData,
  handleTransformBidsData,
};
