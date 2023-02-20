import { NextRouter } from 'next/router';
import UserSVG from '../../../../assets/svg/user.svg';
import ImageSVG from '../../../../assets/svg/image.svg';
import LampSVG from '../../../../assets/svg/lamp.svg';
import LogoutSVG from '../../../../assets/svg/logout.svg';
import { TMenuItem } from './types';
import { Switch } from '../../../ui-kit';
import { AppDispatch } from '../../../../redux/store';
import { signout } from '../../../../redux/slicers/authSlicer';

const getNavItems = (
  router: NextRouter,
  dispatch: AppDispatch,
  userId: string,
): TMenuItem[] => [
  {
    icon: <UserSVG />,
    label: 'My profile',
    clickHandler: () => {
      router.push(`/profile/${userId}`);
    },
  },
  {
    icon: <ImageSVG />,
    label: 'My items',
    clickHandler: () => {
      router.push('/items');
    },
  },
  {
    icon: <LampSVG />,
    label: 'Dark theme',
    controller: <Switch />,
  },
  {
    icon: <LogoutSVG />,
    label: 'Disconnect',
    clickHandler: () => {
      console.log('logout');
      dispatch(signout());
    },
  },
];

export { getNavItems };
