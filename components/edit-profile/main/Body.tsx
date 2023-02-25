import styled from 'styled-components';
import UserCard from '../user-card';
import FormBody from '../form';
import { devices } from '../../../common/constants';

const Body = () => {
  return (
    <Body.Container>
      <FormBody />
    </Body.Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0;
  gap: 32px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  padding: 32px 24px;
  border-radius: 16px;

  @media (${devices.tablet}) {
    flex-direction: column;
  }

  @media (${devices.mobile}) {
    flex-direction: column;
  }
`;

Body.Container = Container;

export default Body;
