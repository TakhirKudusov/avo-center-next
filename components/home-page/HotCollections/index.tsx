import styled from 'styled-components';
import { devices, screenSizes } from '../../../common/constants';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { ContentContainer, FlexContainer } from '../../common';
import CollectionItem from '../../common/components/CollectionItem';
import { ReactSlick } from '../../ui-kit';
import { hotCollections } from './constants';

const HotCollections = () => {
  const { screenSize, slidesPerRow } = useAdaptiveSlider(3);

  return (
    <HotCollectionsWrapper>
      <FlexContainer>
        <ContentContainer>
          <HotCollectionsTitle>Hot collections</HotCollectionsTitle>
          {screenSize >= screenSizes.tablet ? (
            <HotColectionsBody>
              {hotCollections.slice(0, 3).map((collection, index) => (
                <CollectionItem
                  key={`collection-item-${index}`}
                  collection={collection}
                />
              ))}
            </HotColectionsBody>
          ) : (
            <ReactSlick screenSize={screenSize} slidesPerRow={slidesPerRow}>
              {hotCollections.slice(0, 3).map((collection, index) => (
                <CollectionItem
                  key={`collection-item-${index}`}
                  collection={collection}
                />
              ))}
            </ReactSlick>
          )}
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

  @media (${devices.mobile}) {
    padding-top: 64px;
  }
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
