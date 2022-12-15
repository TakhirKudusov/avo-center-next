import styled from 'styled-components';
import { ContentContainer, FlexContainer } from '../../components/common';
import StoreLayout from '../../components/layouts/store';
import ModalsTest from '../../components/ModalsTest';
import Filters from './Filters';

function Modals() {
  return (
    <StyledFlexContainer>
      <PageContainer>
        <ModalsTest />
        <Filters />
      </PageContainer>
    </StyledFlexContainer>
  );
}

const StyledFlexContainer = styled(FlexContainer)`
  max-width: 1310px;
`;

const PageContainer = styled(ContentContainer)`
  position: relative;
`;

Modals.PageLayout = StoreLayout;

export default Modals;
