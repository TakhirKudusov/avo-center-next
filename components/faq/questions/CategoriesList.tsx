import styled from 'styled-components';
import { categoriesList } from '../common/constants';
import CategoryListItem from './CategoryListItem';
import React, { Dispatch, useEffect, useState } from 'react';
import { ClassNames } from '../common/enums';
import { Tab } from '../common/types';

type Props = {
  setCurrentTab: Dispatch<React.SetStateAction<Tab>>;
};

const CategoriesList: React.FC<Props> = ({ setCurrentTab }) => {
  useEffect(() => {
    const firstElFromList = document.querySelector(
      `.${ClassNames.CATEGORY_LIST_ITEM}`,
    );
    firstElFromList?.classList.add(ClassNames.ACTIVE);
  }, []);

  return (
    <Container>
      {categoriesList?.map((el, i) => {
        return (
          <CategoryListItem
            key={el.name + i}
            name={el.name}
            Icon={el.Icon}
            setCurrentTab={setCurrentTab}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 40px;
`;

export default CategoriesList;
