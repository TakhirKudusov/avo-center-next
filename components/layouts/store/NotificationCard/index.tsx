import { FC } from 'react';
import styled from 'styled-components';
import { Button, ButtonSize, ButtonType } from '../../../ui-kit';
import { NOTIFICATION_LIST } from './constants';
import NotificationItem from './NotificationItem';

type Props = { screenSize: number };

const NotificationCard: FC<Props> = ({ screenSize }) => (
  <NotificationCardWrapper>
    <NotificationCardHeader>
      <NotificationCardTitle>Notifications</NotificationCardTitle>
      {screenSize >= 1024 && (
        <Button btnType={ButtonType.Secondary} size={ButtonSize.Medium}>
          See all
        </Button>
      )}
    </NotificationCardHeader>
    <NotificationCardBody>
      {NOTIFICATION_LIST.map((notification, index) => (
        <NotificationItem {...notification} key={`notification-${index}`} />
      ))}
    </NotificationCardBody>
    {screenSize < 1024 && (
      <Button btnType={ButtonType.Secondary} size={ButtonSize.Medium} fullSize>
        See all
      </Button>
    )}
  </NotificationCardWrapper>
);

const NotificationCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;

  @media (max-width: 415px) {
    width: 300px;
  }
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
