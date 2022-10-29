import styled from 'styled-components';
import UserCard from '../user-card';
import FormBody from '../form';

const Body = () => {
  return (
    <Body.Container>
      <UserCard />
      <FormBody />
    </Body.Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 32px;
  width: 1150px;
`;

Body.Container = Container;

export default Body;
