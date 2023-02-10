import { useEffect } from 'react';
import styled from 'styled-components';
import { devices } from '../../../common/constants';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getHotBids } from '../../../redux/slicers/bidsSlicer/bidsSlicer';
import { TBidsState } from '../../../redux/slicers/bidsSlicer/types';
import { ContentContainer, FlexContainer } from '../../common';
import BidItem from '../../common/components/BidItem';
import { ReactSlick } from '../../ui-kit';

import { hotBids } from './constants';

const HotBids = () => {
  const { screenSize, slidesPerRow } = useAdaptiveSlider(4);

  const dispatch = useAppDispatch();
  const { bids } = useAppSelector<TBidsState>(
    (state) => state.bids,
  );

  // console.log('hotBids =', bids);

  useEffect(() => {
    dispatch(getHotBids());
  }, [dispatch]);

  return (
    <HotBidsWrapper>
      <FlexContainer>
        <ContentContainer>
          <HotBidsHeader>
            <HotBidsTitle>Hot bid</HotBidsTitle>
          </HotBidsHeader>
          <ReactSlick screenSize={screenSize} slidesPerRow={slidesPerRow}>
            {bids.map((bid, index) => (
              <BidItem key={`bid-item-${index}`} bid={bid} />
            ))}
          </ReactSlick>
        </ContentContainer>
      </FlexContainer>
    </HotBidsWrapper>
  );
};

const HotBidsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fcfcfd;
  padding: 136px 0 128px;

  @media (${devices.tablet}) {
    padding-left: 65px;
  }

  @media (${devices.mobile}) {
    padding: 64px 0 80px;
  }
`;

const HotBidsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HotBidsTitle = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #23262f;
`;

export default HotBids;
