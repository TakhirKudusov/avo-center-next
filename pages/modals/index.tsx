import { useState } from 'react';
import styled from 'styled-components';
import { ContentContainer, FlexContainer } from '../../components/common';
import StoreLayout from '../../components/layouts/store';
import ModalsTest from '../../components/ModalsTest';

function Modals() {
  return (
    <StyledFlexContainer>
      <PageContainer>
        <ModalsTest />
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

const ProfileWrapper = styled.div`
  padding-left: 160px;
  margin-top: 80px;
`;

Modals.PageLayout = StoreLayout;

export default Modals;
