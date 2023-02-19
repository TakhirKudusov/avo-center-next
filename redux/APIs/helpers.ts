import {
  Bid,
  BidData,
  Category,
  CategoryData,
  Collection,
  CollectionData,
  Creators,
  CreatorsData,
  Faqs,
  FaqsData,
  Nft,
  NftData,
  Notification,
  NotificationData,
  Report,
  ReportData,
  Sellers,
  SellersData,
  User,
  UserData,
  Verification,
  VerificationData,
} from './types';

const handleTransformNftData = (data: NftData[]): Nft[] => {
  return data.reduce((previousValue: Nft[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      name: currentValue.name,
      description: currentValue.description,
      creatorId: String(currentValue.creator._id),
      type: currentValue.type,
      total: String(currentValue.total),
      available: currentValue.available ? 'Yes' : 'No',
      isOnSale: currentValue.isOnSale ? 'Yes' : 'No',
      likesLength: String(currentValue.likesLength),
      royalties: String(currentValue.royalties),
      salePrice: String(currentValue.salePrice),
      ownerId: currentValue.owner._id,
      updatedAt: currentValue.updatedAt,
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

const handleTransformBidsData = (data: BidData[]): Bid[] => {
  return data.reduce((previousValue: Bid[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      date: currentValue.date,
      nftId: currentValue.nft._id,
      creatorId: currentValue.creator._id,
    });
    return previousValue;
  }, []);
};

const handleTransformFaqsData = (data: FaqsData[]): Faqs[] => {
  return data.reduce((previousValue: Faqs[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      title: currentValue.title,
      description: currentValue.description,
      createdAt: currentValue.createdAt,
      updatedAt: currentValue.updatedAt,
    });

    return previousValue;
  }, []);
};

const handleTransformReportsData = (data: ReportData[]): Report[] => {
  return data.reduce((previousValue: Report[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      message: currentValue.message,
      creator: currentValue.creator._id,
      NFT: currentValue.NFT._id,
      status: currentValue.status,
      createdAt: currentValue.createdAt,
      updatedAt: currentValue.updatedAt,
    });

    return previousValue;
  }, []);
};

const handleTransformNotificationsData = (
  data: NotificationData[],
): Notification[] => {
  return data.reduce((previousValue: Notification[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      title: currentValue.title,
      message: currentValue.message,
      image: currentValue.image,
      user: currentValue.user._id,
      createdAt: currentValue.createdAt,
      updatedAt: currentValue.updatedAt,
    });

    return previousValue;
  }, []);
};

const handleTransformCategoriesData = (data: CategoryData[]): Category[] => {
  return data.reduce((previousValue: Category[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      name: currentValue.name,
      createdAt: currentValue.createdAt,
      updatedAt: currentValue.updatedAt,
    });

    return previousValue;
  }, []);
};

const handleTransformSellersData = (data: SellersData[]): Sellers[] => {
  return data.reduce((previousValue: Sellers[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      sum: String(currentValue.sum),
      ownerId: currentValue.owner._id,
    });

    return previousValue;
  }, []);
};

const handleTransformCreatorsData = (data: CreatorsData[]): Creators[] => {
  return data.reduce((previousValue: Creators[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      sum: String(currentValue.sum),
      creatorId: currentValue.creator._id,
    });

    return previousValue;
  }, []);
};

const handleTransformVerificationsData = (
  data: VerificationData[],
): Verification[] => {
  return data.reduce((previousValue: Verification[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      idPhoto: currentValue.idPhoto,
      facePhoto: currentValue.facePhoto,
      user: currentValue.user,
      status: currentValue.status,
      createdAt: currentValue.createdAt,
      updatedAt: currentValue.updatedAt,
    });

    return previousValue;
  }, []);
};

export {
  handleTransformNftData,
  handleTransformUsersData,
  handleTransformCollectionsData,
  handleTransformBidsData,
  handleTransformFaqsData,
  handleTransformReportsData,
  handleTransformNotificationsData,
  handleTransformCategoriesData,
  handleTransformSellersData,
  handleTransformCreatorsData,
  handleTransformVerificationsData,
};
