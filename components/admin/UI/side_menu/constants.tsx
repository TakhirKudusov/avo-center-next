import { AdminRoute } from '../../utils/routes';
import { Image } from '@styled-icons/evaicons-solid/Image';
import { CircleQuestion } from '@styled-icons/fa-regular/CircleQuestion';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';
import { VerifiedUser } from '@styled-icons/material-outlined/VerifiedUser';
import { LocalActivity } from '@styled-icons/material-outlined/LocalActivity';
import { Anydesk } from '@styled-icons/simple-icons';

interface subPoints {
  id: string;
  name: string;
  link: string;
}

//create interface for menu points
interface menuPoints {
  header: string;
  Icon: () => JSX.Element;
  subPoints: subPoints[];
}

const NFT: menuPoints = {
  header: 'NFT',
  Icon: () => <Image />,
  subPoints: [
    {
      id: 'NFT_1',
      name: 'NFTs',
      link: AdminRoute.NFTs,
    },
    {
      id: 'NFT_2',
      name: 'Collections',
      link: AdminRoute.COLLECTIONS,
    },
    {
      id: 'NFT_3',
      name: 'Categories',
      link: AdminRoute.CATEGORIES,
    },
    {
      id: 'NFT_4',
      name: 'Bids',
      link: AdminRoute.BIDS,
    },
  ],
};

const faqs: menuPoints = {
  header: 'FAQs',
  Icon: () => <CircleQuestion />,
  subPoints: [
    {
      id: 'FAQs_1',
      name: 'FAQs',
      link: AdminRoute.FAQS,
    },
  ],
};

const users: menuPoints = {
  header: 'Users',
  Icon: () => <UserCircle />,
  subPoints: [
    {
      id: 'Users_1',
      name: 'Users',
      link: AdminRoute.USERS,
    },
  ],
};

const verifications: menuPoints = {
  header: 'Verifications',
  Icon: () => <VerifiedUser />,
  subPoints: [
    {
      id: 'Verifications_1',
      name: 'Verifications',
      link: AdminRoute.VERIFICATIONS,
    },
  ],
};

const userInteractions: menuPoints = {
  header: 'User interactions',
  Icon: () => <LocalActivity />,
  subPoints: [
    {
      id: 'UserInteractions_1',
      name: 'Sellers',
      link: AdminRoute.SELLERS,
    },
    {
      id: 'UserInteractions_2',
      name: 'Creators',
      link: AdminRoute.CREATORS,
    },
  ],
};

const other: menuPoints = {
  header: 'Other',
  Icon: () => <Anydesk />,
  subPoints: [
    {
      id: 'Other_1',
      name: 'Reports',
      link: AdminRoute.REPORTS,
    },
  ],
};

const sideMenuArr = [NFT, faqs, userInteractions, users, verifications, other];

export { sideMenuArr };
