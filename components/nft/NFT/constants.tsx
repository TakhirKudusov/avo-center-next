import InsertSVG from '../../../assets/svg/insert.svg';
import PencilSVG from '../../../assets/svg/pencil.svg';
import CheckSVG from '../../../assets/svg/check.svg';
import FacebookSVG from '../../../assets/svg/facebook.svg';
import TwitterSVG from '../../../assets/svg/twitter.svg';
import InstagramSVG from '../../../assets/svg/instagram.svg';
import MailSVG from '../../../assets/svg/mail.svg';

export const PURCHASE_STEPS = [
  {
    id: 1,
    title: 'Purchasing',
    subTitle: 'Sending transaction with your wallet',
    renderIcon: (hasError: boolean) => (
      <InsertSVG color={hasError ? '#EF466F' : '#777E91'} />
    ),
  },
];

export const PLACE_BID_STEPS = [
  {
    id: 1,
    title: 'Approve',
    subTitle: 'Checking balance and approving',
    renderIcon: (hasError: boolean) => (
      <InsertSVG color={hasError ? '#EF466F' : '#777E91'} />
    ),
  },
  {
    id: 2,
    title: 'Place a bid',
    subTitle: 'Create a signature to place a bit',
    renderIcon: (hasError: boolean) => (
      <PencilSVG color={hasError ? '#EF466F' : '#777E91'} />
    ),
  },
];

export const PUT_ON_SALE_STEPS = [
  {
    id: 1,
    title: 'Approve',
    subTitle: 'Approve perfoming transactions with your wallet',
    renderIcon: (hasError: boolean) => (
      <CheckSVG color={hasError ? '#EF466F' : '#777E91'} />
    ),
  },
  {
    id: 2,
    title: 'Sign sell order',
    subTitle: 'Sign sell order using your wallet',
    renderIcon: (hasError: boolean) => (
      <PencilSVG color={hasError ? '#EF466F' : '#777E91'} />
    ),
  },
];

export const ACCEPT_BID_STEPS = [
  {
    id: 1,
    title: 'Accept bid',
    subTitle: 'Send transaction with your wallet',
    renderIcon: (hasError: boolean) => (
      <InsertSVG color={hasError ? '#EF466F' : '#777E91'} />
    ),
  },
];

export const successShareLinks = [
  {
    id: 1,
    icon: <FacebookSVG />,
    href: 'https://facebook.com',
  },
  {
    id: 2,
    icon: <TwitterSVG />,
    href: 'https://twitter.com',
  },
  {
    id: 3,
    icon: <InstagramSVG />,
    href: 'https://instagram.com',
  },
  {
    id: 4,
    icon: <MailSVG />,
    href: 'https://mail.ru',
  },
];

export enum OwnerRoles {
  OWNER = 'owner',
  CREATOR = 'creator',
}
