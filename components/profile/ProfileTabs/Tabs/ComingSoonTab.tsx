import styled from 'styled-components';

export const ComingSoonTab = () => {
  return (
    <TabWrapper>
      <ComingSoon>Coming soon!</ComingSoon>
    </TabWrapper>
  );
};

export default ComingSoonTab;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ComingSoon = styled.div`
  font-family: 'Nasalization';
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  line-height: 32px;
  margin-top: 32px;
`;
