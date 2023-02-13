import { FC } from 'react';
import { ChildrenProp } from '../../../../common/types/ChildrenProp';
import styled from 'styled-components';

const ContentContainer: FC<ChildrenProp> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
`;

export default ContentContainer;
