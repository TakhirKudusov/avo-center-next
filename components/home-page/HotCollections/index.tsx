import styled from 'styled-components';
import { ContentContainer, FlexContainer } from '../../common';
import CollectionItem from '../../common/components/CollectionItem';
import { hotCollections } from './constants';

const HotCollections = () => {
  return (
    <HotCollectionsWrapper>
      <FlexContainer>
        <ContentContainer>
          <HotCollectionsTitle>Hot collections</HotCollectionsTitle>
          <HotColectionsBody>
            {hotCollections.slice(0, 3).map((collection) => (
              <CollectionItem collection={collection} />
            ))}
          </HotColectionsBody>
        </ContentContainer>
      </FlexContainer>
    </HotCollectionsWrapper>
  );
};

const HotCollectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f4f5f6;
  padding: 128px 0 128px;
`;

const HotCollectionsTitle = styled.div`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #23262f;
`;

const HotColectionsBody = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export default HotCollections;
