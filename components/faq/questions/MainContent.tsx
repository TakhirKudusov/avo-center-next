import styled from 'styled-components';
import CategoriesList from './CategoriesList';
import { useState } from 'react';
import { Tab } from '../common/types';
import Tabs from '../tabs/Tabs';
import CategoryListItem from './CategoryListItem';

const MainContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>('general');

  return (
    <Container>
      <CategoriesList>
        <CategoryListItem setCurrentTab={setCurrentTab} />
      </CategoriesList>
      <TabContainer>
        <Tabs tabType={currentTab} />
      </TabContainer>
    </Container>
  );
};

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 40px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  width: 100%;
  gap: 140px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 415px) {
    width: 100%;
    height: auto;
    gap: 40px;
    margin-top: 40px;
  }
`;

export default MainContent;
