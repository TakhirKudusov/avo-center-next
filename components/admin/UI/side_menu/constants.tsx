import { AdminRoute } from '../../utils/routes';
import { Image } from '@styled-icons/evaicons-solid/Image';
import { CircleQuestion } from '@styled-icons/fa-regular/CircleQuestion';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';
import { VerifiedUser } from '@styled-icons/material-outlined/VerifiedUser';
import { LocalActivity } from '@styled-icons/material-outlined/LocalActivity';
import { Anydesk } from '@styled-icons/simple-icons';

const NFT = {
  header: 'NFT',
  Icon: () => <Image />,
  subPoints: [
    {
      id: 1,
      name: 'NFTs',
      link: AdminRoute.NFTs,
    },
    {
      id: 2,
      name: 'Collections',
      link: AdminRoute.COLLECTIONS,
    },
    {
      id: 3,
      name: 'Bids',
      link: AdminRoute.BIDS,
    },
    {
      id: 4,
      name: 'Categories',
      link: AdminRoute.CATEGORIES,
    },
  ],
};

const faqs = {
  header: 'FAQs',
  Icon: () => <CircleQuestion />,
  subPoints: [
    {
      id: 1,
      name: 'FAQs',
      link: AdminRoute.FAQS,
    },
  ],
};

const users = {
  header: 'Users',
  Icon: () => <UserCircle />,
  subPoints: [
    {
      id: 1,
      name: 'Users',
      link: AdminRoute.USERS,
    },
  ],
};

const verifications = {
  header: 'Verifications',
  Icon: () => <VerifiedUser />,
  subPoints: [
    {
      id: 1,
      name: 'Verifications',
      link: AdminRoute.VERIFICATIONS,
    },
  ],
};

const userInteractions = {
  header: 'User interactions',
  Icon: () => <LocalActivity />,
  subPoints: [
    {
      id: 1,
      name: 'Sellers',
      link: AdminRoute.SELLERS,
    },
    {
      id: 2,
      name: 'Creators',
      link: AdminRoute.CREATORS,
    },
  ],
};

const other = {
  header: 'Other',
  Icon: () => <Anydesk />,
  subPoints: [
    {
      id: 1,
      name: 'Notifications',
      link: AdminRoute.NOTIFICATIONS,
    },
    {
      id: 2,
      name: 'Reports',
      link: AdminRoute.REPORTS,
    },
  ],
};

const sideMenuArr = [NFT, faqs, userInteractions, users, verifications, other];

export { sideMenuArr };
