import { memo } from 'react';
import styled from 'styled-components';
import { TNotification } from './types';

type Props = TNotification;
const NotificationItem: React.FC<Props> = ({
  label,
  message,
  date,
  image,
  viewed,
}) => {
  return (
    <NotificationItemWrapper>
      <NotificationImage image={image} />
      <NotificationInfo>
        <NotificationLabel>{label}</NotificationLabel>
        <NotificationMessage>{message}</NotificationMessage>
        <NotificationDate>{date}</NotificationDate>
      </NotificationInfo>
      {!viewed && <NotificationViewed />}
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
    background: #f4f5f6;
  }
`;

const NotificationImage = styled.div<{ image: string }>`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background-color: #45b36b;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => `url(/images/${props.image})`};
`;

const NotificationInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotificationLabel = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #141416;
`;

const NotificationMessage = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #353945;
`;

const NotificationDate = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

const NotificationViewed = styled.div`
  position: absolute;
  right: 16px;
  width: 12px;
  height: 12px;
  background: #45b36b;
  border-radius: 16px;
`;

export default memo(NotificationItem);
