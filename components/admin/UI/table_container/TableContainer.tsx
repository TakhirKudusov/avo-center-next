import { ChildrenProp } from '../../../../common/types/ChildrenProp';
import { FC } from 'react';
import styled from 'styled-components';

const TableContainer: FC<ChildrenProp> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default TableContainer;
