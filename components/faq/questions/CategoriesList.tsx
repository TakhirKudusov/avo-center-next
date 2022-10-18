import styled from 'styled-components';
import React, { ReactNode, useEffect } from 'react';
import { ClassNames } from '../common/enums';

type Props = {
  children: ReactNode;
};

const CategoriesList: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const firstElFromList = document.querySelector(
      `.${ClassNames.CATEGORY_LIST_ITEM}`,
    );
    firstElFromList?.classList.add(ClassNames.ACTIVE);
  }, []);

  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 40px;
`;

export default CategoriesList;
