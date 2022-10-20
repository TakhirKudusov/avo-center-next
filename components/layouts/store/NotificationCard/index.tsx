import styled from 'styled-components';
import { Button, ButtonSize, ButtonType } from '../../../ui-kit';
import { NOTIFICATION_LIST } from './constants';
import NotificationItem from './NotificationItem';

const NotificationCard = () => {
  return (
    <NotificationCardWrapper>
      <NotificationCardHeader>
        <NotificationCardTitle>Notifications</NotificationCardTitle>
        <Button type={ButtonType.Secondary} size={ButtonSize.Medium}>
          See all
        </Button>
      </NotificationCardHeader>
      <NotificationCardBody>
        {NOTIFICATION_LIST.map((notification, index) => (
          <NotificationItem {...notification} key={`notification-${index}`} />
        ))}
      </NotificationCardBody>
    </NotificationCardWrapper>
  );
};

const NotificationCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
`;

const NotificationCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const NotificationCardTitle = styled.div`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.01em;
  color: #23262f;
`;

const NotificationCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export default NotificationCard;
