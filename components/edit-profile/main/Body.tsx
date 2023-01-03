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
  align-items: flex-start;
  padding: 0;
  gap: 32px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 415px) {
    flex-direction: column;
  }
`;

Body.Container = Container;

export default Body;
