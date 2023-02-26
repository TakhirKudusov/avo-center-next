import { FC } from 'react';
import styled from 'styled-components';

import BellSVG from '../../../assets/svg/bell.svg';
import { devices } from '../../../common/constants';

type Props = {
  hasUnreadNotifications: boolean;
  onClick: () => void;
};

const Notifications: FC<Props> = ({ hasUnreadNotifications, onClick }) => {
  return (
    <NotificationsWrapper onClick={onClick}>
      <BellSVG color="rgba(255, 255, 255, 0.7)" />
      {hasUnreadNotifications && <NotificationRound />}
    </NotificationsWrapper>
  );
};

const NotificationsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  height: 40px;
  cursor: pointer;

  @media (${devices.mobile}) {
    margin: 0;
  }
`;

const NotificationRound = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  right: -7px;
  background: rgba(69, 178, 107, 1);
  border-radius: 50%;
`;

export default Notifications;
