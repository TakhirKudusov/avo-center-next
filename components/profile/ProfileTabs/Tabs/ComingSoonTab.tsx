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
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #23262f;
  font-weight: 600;
  line-height: 32px;
  margin-top: 32px;
`;
