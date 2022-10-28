import styled from 'styled-components';

const Body = () => {
  return <Body.Container></Body.Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 744px;
  height: 280px;
`;

Body.Container = Container;

export default Body;
