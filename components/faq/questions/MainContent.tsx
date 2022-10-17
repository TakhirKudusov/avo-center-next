import styled from 'styled-components';
import CategoriesList from './CategoriesList';
import { useState } from 'react';
import { Tab } from '../common/types';
import Tabs from '../tabs/Tabs';

const MainContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>('general');

  return (
    <Container>
      <CategoriesList setCurrentTab={setCurrentTab} />
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
  width: 735px;
  gap: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1120px;
  margin-top: 80px;
`;

export default MainContent;
