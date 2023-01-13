import { Nft, NftData } from './types';

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

export { handleTransformNftData };
