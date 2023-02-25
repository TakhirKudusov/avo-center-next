import { useEffect } from 'react';
import styled from 'styled-components';
import { devices, screenSizes } from '../../../common/constants';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getHotCollections } from '../../../redux/slicers/collectionsSlicer/collectionsSlicer';
import { TCollectionsState } from '../../../redux/slicers/collectionsSlicer/types';
import { ContentContainer, FlexContainer } from '../../common';
import CollectionItem from '../../common/components/CollectionItem';
import { ReactSlick } from '../../ui-kit';
// import { hotCollections } from './constants';

const HotCollections = () => {
  const { screenSize, slidesPerRow } = useAdaptiveSlider(3);

  const dispatch = useAppDispatch();
  const { hotCollections } = useAppSelector<TCollectionsState>(
    (state) => state.collections,
  );

  useEffect(() => {
    dispatch(getHotCollections());
  }, [dispatch]);

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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  padding: 128px 0 128px;

  @media (${devices.mobile}) {
    padding-top: 64px;
  }
`;

const HotCollectionsTitle = styled.div`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const HotColectionsBody = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export default HotCollections;
