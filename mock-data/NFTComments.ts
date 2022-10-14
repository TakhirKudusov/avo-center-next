import { CommentsData } from '../components/nft/common/types';

export const comments: CommentsData = {
  currentOwner: {
    image: 'url("/images/creator7.jpg")',
    name: 'Mike Wazowski',
    message:
      'And you can buy the whole set at once, really like it! And you can buy the whole set at once, really like it!',
    likes: '34',
    time: '2022-10-14T12:08:00+03:00',
  },
  oldOwners: [
    {
      image: 'url("/images/creator10.jpg")',
      name: 'Leo Messi',
      message:
        'And you can buy the whole set at once, really like it! And you can buy the whole set at once, really like it!',
      likes: '54',
      time: '2022-10-06T12:00:00+03:00',
    },
    {
      image: 'url("/images/creator9.jpg")',
      name: 'Natasha Lilova',
      message:
        'And you can buy the whole set at once, really like it! And you can buy the whole set at once, really like it!',
      likes: '23',
      time: '2022-10-06T12:00:00+03:00',
    },
    {
      image: 'url("/images/creator8.jpg")',
      name: 'Spotify Premium',
      message:
        'And you can buy the whole set at once, really like it! And you can buy the whole set at once, really like it!',
      likes: '12',
      time: '2022-10-06T12:00:00+03:00',
    },
  ],
  commentsQuantity: '8',
};
