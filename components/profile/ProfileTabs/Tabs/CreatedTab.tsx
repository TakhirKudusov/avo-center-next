import styled from 'styled-components';
import { Button, ButtonSize, ButtonType } from '../../../ui-kit';

const CreatedTab = () => {
  return (
    <TabWrapper>
      <TabTitle>
        You have not passed <br /> the verification of the author
      </TabTitle>
      <TabSubTitle>Fill in the required data here</TabSubTitle>
      <Button
        style={{ width: 137 }}
        size={ButtonSize.Medium}
        btnType={ButtonType.Secondary}
      >
        Fill
      </Button>
    </TabWrapper>
  );
};

export default CreatedTab;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 120px;
  margin-bottom: 220px;
`;

const TabTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  color: #001240;
  margin-bottom: 0;
`;

const TabSubTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #001240;
  margin-top: 12px;
  opacity: 0.6;
  text-align: center;
`;
