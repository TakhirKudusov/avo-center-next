import styled from 'styled-components';
import { categoriesList } from '../common/constants';
import CategoryListItem from './CategoryListItem';
import { useEffect } from 'react';
import { ClassNames } from '../common/enums';

const CategoriesList: React.FC = () => {
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
          <CategoryListItem key={el.name + i} name={el.name} Icon={el.Icon} />
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
