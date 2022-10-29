import styled from 'styled-components';
import Avatar from './Avatar';
import CameraSVG from '../../../assets/svg/camera.svg';
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
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
  width: 344px;
  height: 128px;
`;

UserCard.Container = Container;

export default UserCard;
