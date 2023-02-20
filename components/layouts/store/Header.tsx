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
      <FlexContainer style={{ justifyContent: 'space-between' }}>
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
                    btnType={ButtonType.Primary}
                  >
                    Upload
                  </Button>
                  <Button
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
                    btnType={ButtonType.Primary}
                  >
                    Create NFT
                  </Button>
                  <Link href={Paths.PROFILE}>
                    <Button
                      style={{ marginLeft: '12px' }}
                      size={ButtonSize.Medium}
                      btnType={ButtonType.Secondary}
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
                      style={{ marginLeft: '4px' }}
                      size={ButtonSize.Medium}
                      btnType={ButtonType.Secondary}
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
                <CircleCloseSVG color="#777E91" />
              ) : (
                <BurgerSVG />
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
            <SearchBar
              type={SearchBarType.WITH_ICON}
              fullSize
              onKeyEnterDown={handleMenuClose}
            />
            <Link href={Paths.MODALS}>
              <Button
                size={ButtonSize.Medium}
                btnType={ButtonType.Primary}
                fullSize
                onClick={handleMenuClose}
              >
                Modals
              </Button>
            </Link>
            {!user && (
              <>
                <Button
                  onClick={handleMenuUploadClick}
                  size={ButtonSize.Medium}
                  btnType={ButtonType.Primary}
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
              </>
            )}
            {user && (
              <AuthorizedActionButtons>
                <Button
                  onClick={handleMenuUploadClick}
                  size={ButtonSize.Medium}
                  btnType={ButtonType.Primary}
                >
                  Create NFT
                </Button>
                <Link href={Paths.PROFILE}>
                  <Button
                    style={{ marginLeft: '12px' }}
                    size={ButtonSize.Medium}
                    btnType={ButtonType.Secondary}
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
                    style={{ marginLeft: '4px' }}
                    size={ButtonSize.Medium}
                    btnType={ButtonType.Secondary}
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
              // onChange={handleMenuClose}
            />
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
  background: #fff;
  z-index: 100;
`;

const ActionsBar = styled.div`
  display: flex;
  gap: 12px;
`;

const AnonymousActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AuthorizedActionButtons = styled.div`
  display: flex;
  align-items: center;
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
  background: #656565;
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
