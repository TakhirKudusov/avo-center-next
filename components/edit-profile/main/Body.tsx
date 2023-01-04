import styled from 'styled-components';
import UserCard from '../user-card';
import FormBody from '../form';
import { devices } from '../../../common/constants';

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

  @media (${devices.tablet}) {
    flex-direction: column;
  }

  @media (${devices.mobile}) {
    flex-direction: column;
  }
`;

Body.Container = Container;

export default Body;
