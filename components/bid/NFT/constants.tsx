import InsertSVG from '../../../assets/svg/insert.svg';
import PencilSVG from '../../../assets/svg/pencil.svg';
import CheckSVG from '../../../assets/svg/check.svg';

export const PURCHASE_STEPS = [
  {
    id: 1,
    title: 'Purchasing',
    subTitle: 'Sending transaction with your wallet',
    renderIcon: (hasError: boolean) => (
      <InsertSVG color={hasError ? '#EB5757' : 'rgba(255, 255, 255, 0.7)'} />
    ),
  },
];

export const PLACE_BID_STEPS = [
  {
    id: 1,
    title: 'Approve',
    subTitle: 'Checking balance and approving',
    renderIcon: (hasError: boolean) => (
      <InsertSVG color={hasError ? '#EB5757' : 'rgba(255, 255, 255, 0.7)'} />
    ),
  },
  {
    id: 2,
    title: 'Place a bid',
    subTitle: 'Create a signature to place a bit',
    renderIcon: (hasError: boolean) => (
      <PencilSVG color={hasError ? '#EB5757' : 'rgba(255, 255, 255, 0.7)'} />
    ),
  },
];

export const PUT_ON_SALE_STEPS = [
  {
    id: 1,
    title: 'Approve',
    subTitle: 'Approve perfoming transactions with your wallet',
    renderIcon: (hasError: boolean) => (
      <CheckSVG color={hasError ? '#EB5757' : 'rgba(255, 255, 255, 0.7)'} />
    ),
  },
  {
    id: 2,
    title: 'Sign sell order',
    subTitle: 'Sign sell order using your wallet',
    renderIcon: (hasError: boolean) => (
      <PencilSVG color={hasError ? '#EB5757' : 'rgba(255, 255, 255, 0.7)'} />
    ),
  },
];

export const ACCEPT_BID_STEPS = [
  {
    id: 1,
    title: 'Accept bid',
    subTitle: 'Send transaction with your wallet',
    renderIcon: (hasError: boolean) => (
      <InsertSVG color={hasError ? '#EB5757' : 'rgba(255, 255, 255, 0.7)'} />
    ),
  },
];

export const CHANGE_PRICE_STEPS = [
  {
    id: 1,
    title: 'Approve',
    subTitle: 'Approve perfoming transactions with your wallet',
    renderIcon: (hasError: boolean) => (
      <CheckSVG color={hasError ? '#EB5757' : 'rgba(255, 255, 255, 0.7)'} />
    ),
  },
  {
    id: 2,
    title: 'Sign sell order',
    subTitle: 'Sign sell order using your wallet',
    renderIcon: (hasError: boolean) => (
      <PencilSVG color={hasError ? '#EB5757' : 'rgba(255, 255, 255, 0.7)'} />
    ),
  },
];

export enum OwnerRoles {
  OWNER = 'owner',
  CREATOR = 'creator',
}

export enum NftInfoTabs {
  INFO = 'info',
  OWNERS = 'owners',
  BIDS = 'bids',
}
