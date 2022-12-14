import styled from 'styled-components';
import BellSVG from '../../../assets/svg/bell.svg';

const Notifications = () => {
  return (
    <NotificationsWrapper>
      <BellSVG />
      <NotificationRound />
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
