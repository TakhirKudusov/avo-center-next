import { NFT } from '../components/nft/common/types';

const NFTData: NFT = {
  image: 'url("/images/player.jpg")',
  title: 'Black Future Collection: Long Neckie Adira by Nyla Hayes',
  price: '2.5',
  convertedPrice: '2,764.89',
  total: '20',
  available: '10',
  desc: 'This NFT Card will give you Access to Special Airdrops. To learn more about please visit',
  license: 'License:',
  exclusiveFullLicense: 'Exclusive full license',
  listingsData: [
    {
      from: 'MegaMiner1131231',
      expiration: 'in 1 day',
      price: '2.56',
    },
    {
      from: 'MegaMiner1131231',
      expiration: 'in 3 day',
      price: '2.34',
    },
    {
      from: 'MegaMiner1131231',
      expiration: 'in 7 day',
      price: '1.05',
    },
    {
      from: 'MegaMiner1131231',
      expiration: 'in 17 day',
      price: '0.45',
    },
  ],
  tags: [
    {
      tagType: 'primary',
      tagText: 'art',
    },
    {
      tagType: 'default',
      tagText: 'unlockable',
    },
  ],
  bid: {
    isOnBid: true,
    endTime: '2023-01-28T12:00:00+03:00',
  },
};

export { NFTData };
