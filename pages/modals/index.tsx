import styled from 'styled-components';
import { ContentContainer, FlexContainer } from '../../components/common';
// import SearchWithBadRequest from '../../components/cosmmon/components/SearchWithBadRequest/SearchWithBadRequest';
import StoreLayout from '../../components/layouts/store';
import Filters from '../../components/modals/Filters';
import ModalsTest from '../../components/ModalsTest';

function Modals() {
  return (
    <StyledFlexContainer>
      <PageContainer>
        <ModalsTest />
        <Filters />
      </PageContainer>
      {/* <SearchWithBadRequest /> */}
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
