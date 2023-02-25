import { FC } from 'react';
import styled from 'styled-components';
import { devices, screenSizes } from '../../../../common/constants';
import { INotification } from '../../../../swagger';
import { Button, ButtonSize, ButtonType } from '../../../ui-kit';
import NotificationItem from './NotificationItem';

type Props = {
  screenSize: number;
  notifications: INotification[];
  loading: boolean;
};

const NotificationCard: FC<Props> = ({
  screenSize,
  notifications,
  loading,
}) => (
  <NotificationCardWrapper>
    <NotificationCardHeader>
      <NotificationCardTitle>Notifications</NotificationCardTitle>
      {/* {screenSize >= screenSizes.tablet && (
        <Button btnType={ButtonType.Secondary} size={ButtonSize.Medium}>
          See all
        </Button>
      )} */}
    </NotificationCardHeader>
    {notifications.length ? (
      <NotificationCardBody>
        {notifications.map((notification, index) => (
          <NotificationItem {...notification} key={`notification-${index}`} />
        ))}
      </NotificationCardBody>
    ) : (
      <NoNotifications>No notifications</NoNotifications>
    )}
    {/* {screenSize < screenSizes.tablet && (
      <Button btnType={ButtonType.Secondary} size={ButtonSize.Medium} fullSize>
        See all
      </Button>
    )} */}
  </NotificationCardWrapper>
);

const NotificationCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;

  @media (${devices.mobile}) {
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
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const NotificationCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoNotifications = styled.span`
  color: #777e91;
  padding-left: 16px;
  margin-top: 32px;
  text-align: center;
  font-size: 18px;
`;

export default NotificationCard;
