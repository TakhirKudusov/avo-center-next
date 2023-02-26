import styled from 'styled-components';
import { devices } from '../../../common/constants';
import Avatar from './Avatar';
import Description from './Description';

type Props = {
  avatarUrl: string;
};

const UserCard = ({ avatarUrl }: Props) => {
  return (
    <UserCard.Container>
      <Avatar avatarUrl={avatarUrl} />
      <Description />
    </UserCard.Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  width: 344px;
  height: 128px;

  @media (${devices.tablet}) {
    margin-bottom: 32px;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

UserCard.Container = Container;

export default UserCard;
