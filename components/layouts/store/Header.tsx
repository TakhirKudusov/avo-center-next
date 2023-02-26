import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import WalletSVG from '../../../assets/svg/wallet.svg';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { FlexContainer } from '../../common';
import Logo from '../../common/components/Logo';
import UploadItem from '../../modals/UploadItem';
import { Modal, Tooltip } from '../../ui-kit';
import Button from '../../ui-kit/Button/Button';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';
import Select from '../../ui-kit/Select';
import { SelectItemSize } from '../../ui-kit/Select/enums';
import { TooltipPosition } from '../../ui-kit/Tooltip/types';
import BurgerSVG from '../../../assets/svg/burger-icon.svg';
import CircleCloseSVG from '../../../assets/svg/circle-close.svg';

import { handleWalletConnectClick } from './helpers';
import NotificationCard from './NotificationCard';
import Notifications from './Notifications';
import UserInfoCard from './UserInfoCard';
import { SmallScreenMenu } from './SmallScreenMenu';
import { screenSizes } from '../../../common/constants';
import { Paths } from '../../../common/enums/paths';
import { languages } from './constants';
import { IUser } from '../../../common/interfaces';
import SearchBar, { SearchBarType } from '../../ui-kit/SearchBar';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { TNotificationsState } from '../../../redux/slicers/notificationsSlicer/types';
import {
  getNotifications,
  readNotification,
  setIsRead,
} from '../../../redux/slicers/notificationsSlicer/notificationsSlicer';

type Props = {
  user: IUser | null;
  isSmallScreenMenuVisible: boolean;
  isUploadItemVisible: boolean;
  setIsConnectWalletVisible: Dispatch<SetStateAction<boolean>>;
  setIsSmallScreenMenuVisible: Dispatch<SetStateAction<boolean>>;
  handleConnectWalletClose: () => void;
  handleMenuWalletConnect: () => void;
  handleUploadItemClose: () => void;
  handleUploadClick: () => () => void;
};

const Header = ({
  user,
  isSmallScreenMenuVisible,
  isUploadItemVisible,
  setIsConnectWalletVisible,
  setIsSmallScreenMenuVisible,
  handleConnectWalletClose,
  handleMenuWalletConnect,
  handleUploadItemClose,
  handleUploadClick,
}: Props) => {
  const dispatch = useAppDispatch();

  const { screenSize } = useAdaptiveSlider();
  const { notifications, loading } = useAppSelector<TNotificationsState>(
    (state) => state.notifications,
  );

  const hasUnreadNotifications =
    !!notifications.length && !!notifications.find((notif) => !notif.isRead);

  const handleSmallScreenClick = () => {
    setIsSmallScreenMenuVisible((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsSmallScreenMenuVisible(false);
  };

  const handleMenuUploadClick = () => {
    handleUploadClick()();
    handleMenuClose();
  };

  const handleNotificationClick = () => {
    const unreadNotifications = notifications.filter((notif) => !notif.isRead);

    console.log('click!');
    unreadNotifications.forEach((notif) => {
      dispatch(readNotification(notif._id));
    });
  };

  const handleReadNotifications = () => {
    dispatch(setIsRead());
  };

  useEffect(() => {
    if (user) {
      dispatch(getNotifications());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      handleConnectWalletClose();
    }
  }, [handleConnectWalletClose, user]);

  return (
    <HeaderWrapper>
      <FlexContainer
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        {screenSize >= screenSizes.tablet ? (
          <>
            <Link href={Paths.EMPTY}>
              <Logo />
            </Link>
            <ActionsBar>
              {/* <Link href={Paths.MODALS}>
                <Button size={ButtonSize.Medium} btnType={ButtonType.Primary}>
                  Modals
                </Button>
              </Link> */}
              <SearchBar type={SearchBarType.WITH_ICON} />
              {!!user && (
                <Tooltip
                  content={
                    <NotificationCard
                      screenSize={screenSize}
                      notifications={notifications}
                      loading={loading}
                    />
                  }
                  position={TooltipPosition.Center}
                  onClickOutside={handleReadNotifications}
                >
                  <Notifications
                    hasUnreadNotifications={hasUnreadNotifications}
                    onClick={handleNotificationClick}
                  />
                </Tooltip>
              )}
              {!user && (
                <AnonymousActionButtons>
                  <Button
                    onClick={handleUploadClick()}
                    size={ButtonSize.Medium}
                    btnType={ButtonType.Outlined}
                  >
                    Upload
                  </Button>
                  <Button
                    style={{ width: '145px' }}
                    size={ButtonSize.Medium}
                    btnType={ButtonType.Secondary}
                    onClick={handleWalletConnectClick(
                      setIsConnectWalletVisible,
                    )}
                  >
                    Connect Wallet
                  </Button>
                </AnonymousActionButtons>
              )}
              {user && (
                <AuthorizedActionButtons>
                  <Button
                    onClick={handleUploadClick()}
                    size={ButtonSize.Medium}
                    btnType={ButtonType.Outlined}
                  >
                    Upload
                  </Button>
                  <Link href={`${Paths.PROFILE}/${user.id}`}>
                    <Button
                      style={{
                        marginLeft: '12px',
                        background:
                          'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(12, 51, 60, 0.2) 0%, rgba(12, 55, 83, 0.0447917) 77.08%, rgba(255, 255, 255, 0) 100%)',
                      }}
                      size={ButtonSize.Medium}
                      btnType={ButtonType.Primary}
                    >
                      <WalletIcon>
                        <WalletSVG />
                      </WalletIcon>
                      <WalletNumber>0X3a5...4m243</WalletNumber>
                    </Button>
                  </Link>
                  <Tooltip
                    content={<UserInfoCard />}
                    position={TooltipPosition.Center}
                  >
                    <Button
                      style={{
                        marginLeft: '4px',
                        background:
                          'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(12, 51, 60, 0.2) 0%, rgba(12, 55, 83, 0.0447917) 77.08%, rgba(255, 255, 255, 0) 100%)',
                      }}
                      size={ButtonSize.Medium}
                      btnType={ButtonType.Primary}
                    >
                      7.00698
                      <WalletCurrency>AVO</WalletCurrency>
                    </Button>
                  </Tooltip>
                </AuthorizedActionButtons>
              )}
              <Select
                items={languages}
                size={SelectItemSize.Small}
                value={languages[0]}
              />
            </ActionsBar>
          </>
        ) : (
          <>
            <Link href={Paths.EMPTY}>
              <Logo />
            </Link>
            {user && (
              <Tooltip
                content={
                  <NotificationCard
                    screenSize={screenSize}
                    notifications={notifications}
                    loading={loading}
                  />
                }
                position={TooltipPosition.Center}
                onClickOutside={handleReadNotifications}
              >
                <Notifications
                  onClick={handleNotificationClick}
                  hasUnreadNotifications={hasUnreadNotifications}
                />
              </Tooltip>
            )}
            <RoundButton onClick={handleSmallScreenClick} type="button">
              {isSmallScreenMenuVisible ? (
                <CircleCloseSVG color="rgba(255, 255, 255, 0.7)" />
              ) : (
                <BurgerSVG color="rgba(255, 255, 255, 0.7)" />
              )}
            </RoundButton>
          </>
        )}
      </FlexContainer>
      <Modal
        title="Upload item"
        hasFooter={false}
        open={isUploadItemVisible}
        onClose={handleUploadItemClose}
      >
        <UploadItem onItemClick={handleUploadItemClose} />
      </Modal>
      {isSmallScreenMenuVisible && (
        <SmallScreenMenu>
          <>
            <SearchBarWrapper>
              <SearchBar
                type={SearchBarType.WITH_ICON}
                fullSize
                onKeyEnterDown={handleMenuClose}
              />
              {!!user && (
                <Notifications
                  hasUnreadNotifications={hasUnreadNotifications}
                  onClick={handleNotificationClick}
                />
              )}
            </SearchBarWrapper>
            {!user && (
              <UnauthorizedActionWrapper>
                <Button
                  style={{ maxWidth: '85px' }}
                  onClick={handleMenuUploadClick}
                  size={ButtonSize.Medium}
                  btnType={ButtonType.Outlined}
                  fullSize
                >
                  Upload
                </Button>
                <Button
                  size={ButtonSize.Medium}
                  btnType={ButtonType.Secondary}
                  fullSize
                  onClick={handleMenuWalletConnect}
                >
                  Connect Wallet
                </Button>
                <Select
                  items={languages}
                  size={SelectItemSize.Small}
                  value={languages[0]}
                  // onChange={handleMenuClose}
                />
              </UnauthorizedActionWrapper>
            )}
            {user && (
              <SmallScreenAuthorizedButtons>
                <AuthorizeFirstRow>
                  <Button
                    // style={{ maxWidth: '85px' }}
                    onClick={handleMenuUploadClick}
                    size={ButtonSize.Medium}
                    btnType={ButtonType.Outlined}
                    fullSize
                  >
                    Upload
                  </Button>
                  <Select
                    items={languages}
                    size={SelectItemSize.Small}
                    value={languages[0]}
                    // onChange={handleMenuClose}
                  />
                </AuthorizeFirstRow>
                <UserInfoCardWrapper>
                  <UserInfoCard />
                </UserInfoCardWrapper>
              </SmallScreenAuthorizedButtons>
            )}
          </>
        </SmallScreenMenu>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #e6e8ec;
  background: linear-gradient(90deg, #2b624c, #042e1c),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.043) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  /* backdrop-filter: blur(3px); */
  border-radius: 0px 0px 8px 8px;
  z-index: 100;
`;

const ActionsBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AnonymousActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 24 px;
`;

const UnauthorizedActionWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const AuthorizedActionButtons = styled.div`
  display: flex;
  align-items: center;
`;

const SmallScreenAuthorizedButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AuthorizeFirstRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const UserInfoCardWrapper = styled.div`
  margin-top: 32px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    radial-gradient(
      138.38% 179.45% at 23.51% 26.4%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  width: 342px;
  padding: 24px 16px;
  border-radius: 12px;

  & > div {
    width: 100%;
  }
`;

const WalletCurrency = styled.span`
  color: rgba(252, 252, 253, 0.6);
  margin-left: 4px;
`;

const WalletIcon = styled.div`
  margin-top: -4px;
  margin-left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const WalletNumber = styled.div`
  margin-top: -4px;
  margin-left: 12px;
`;

const RoundButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  background: none;
  cursor: pointer;
`;

export default Header;
