import styled from 'styled-components';
import CategoriesList from './CategoriesList';
import { useState } from 'react';
import { Tab } from '../common/types';
import Tabs from '../tabs/Tabs';
import CategoryListItem from './CategoryListItem';
import { devices } from '../../../common/constants';

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

  @media (${devices.tablet}) {
    flex-direction: column;
  }

  @media (${devices.mobile}) {
    width: 100%;
    height: auto;
    gap: 40px;
    margin-top: 40px;
    flex-direction: column;
  }
`;

export default MainContent;
