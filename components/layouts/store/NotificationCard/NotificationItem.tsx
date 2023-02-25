import moment from 'moment';
import { memo } from 'react';
import styled from 'styled-components';
import { INotification } from '../../../../swagger';

type Props = INotification;

const NotificationItem: React.FC<Props> = ({
  title,
  message,
  createdAt,
  image,
  isRead,
}) => {
  return (
    <NotificationItemWrapper>
      <NotificationImage image={image} />
      <NotificationInfo>
        <NotificationLabel>{title}</NotificationLabel>
        <NotificationMessage>{message}</NotificationMessage>
        <NotificationDate>
          {moment(createdAt).format('YYYY-MM-DD hh:mm')}
        </NotificationDate>
      </NotificationInfo>
      {!isRead && <NotificationUnread />}
    </NotificationItemWrapper>
  );
};

const NotificationItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 18px 16px;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(12, 51, 60, 0.2) 0%,
        rgba(12, 55, 83, 0.0447917) 77.08%,
        rgba(255, 255, 255, 0) 100%
      );
  }
`;

const NotificationImage = styled.div<{ image: string }>`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background-color: #cccccc;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => `url(/images/${props.image})`};
`;

const NotificationInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotificationLabel = styled.div`
  font-family: 'Nasalization';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

const NotificationMessage = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

const NotificationDate = styled.div`
  margin-top: 8px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.7); ;
`;

const NotificationUnread = styled.div`
  position: absolute;
  right: 16px;
  width: 12px;
  height: 12px;
  background: #45b36b;
  border-radius: 16px;
`;

export default memo(NotificationItem);
