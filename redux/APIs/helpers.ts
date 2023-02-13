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

const handleTransformBidsData = (data: BidData[]): Bid[] => {
  return data.reduce((previousValue: Bid[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      date: currentValue.date,
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
      creator: currentValue.creator,
      NFT: currentValue.NFT,
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
      user: currentValue.user,
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
      sum: currentValue.sum,
      owner: {
        id: currentValue.owner._id,
        nonce: currentValue.owner.nonce,
        publicAddress: currentValue.owner.publicAddress,
        avatar: currentValue.owner.avatar,
        username: currentValue.owner.username,
        bio: currentValue.owner.bio,
        webSite: currentValue.owner.webSite,
        twitter: currentValue.owner.twitter,
        socialAccount: currentValue.owner.socialAccount,
        wallet: currentValue.owner.wallet,
        balace: currentValue.owner.balace,
        role: currentValue.owner.role,
        isVerified: currentValue.owner.isVerified ? 'Yes' : 'No',
        followers: currentValue.owner.followers,
        createdAt: currentValue.owner.createdAt,
        updatedAt: currentValue.owner.updatedAt,
      },
    });

    return previousValue;
  }, []);
};

const handleTransformCreatorsData = (data: CreatorsData[]): Creators[] => {
  return data.reduce((previousValue: Creators[], currentValue) => {
    previousValue.push({
      id: currentValue._id,
      sum: currentValue.sum,
      creator: {
        id: currentValue.creator._id,
        nonce: currentValue.creator.nonce,
        publicAddress: currentValue.creator.publicAddress,
        avatar: currentValue.creator.avatar,
        username: currentValue.creator.username,
        bio: currentValue.creator.bio,
        webSite: currentValue.creator.webSite,
        twitter: currentValue.creator.twitter,
        socialAccount: currentValue.creator.socialAccount,
        wallet: currentValue.creator.wallet,
        balace: currentValue.creator.balace,
        role: currentValue.creator.role,
        isVerified: currentValue.creator.isVerified ? 'Yes' : 'No',
        followers: currentValue.creator.followers,
        createdAt: currentValue.creator.createdAt,
        updatedAt: currentValue.creator.updatedAt,
      },
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
      user: {
        id: currentValue.user._id,
        nonce: currentValue.user.nonce,
        publicAddress: currentValue.user.publicAddress,
        avatar: currentValue.user.avatar,
        username: currentValue.user.username,
        bio: currentValue.user.bio,
        webSite: currentValue.user.webSite,
        twitter: currentValue.user.twitter,
        socialAccount: currentValue.user.socialAccount,
        wallet: currentValue.user.wallet,
        balace: currentValue.user.balace,
        role: currentValue.user.role,
        isVerified: currentValue.user.isVerified ? 'Yes' : 'No',
        followers: currentValue.user.followers,
        createdAt: currentValue.user.createdAt,
        updatedAt: currentValue.user.updatedAt,
      },
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
