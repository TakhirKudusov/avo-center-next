import styled from 'styled-components';
import { devices } from '../../../common/constants';
import Avatar from './Avatar';
import Description from './Description';

const UserCard = () => {
  return (
    <UserCard.Container>
      <Avatar />
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
`;

UserCard.Container = Container;

export default UserCard;
