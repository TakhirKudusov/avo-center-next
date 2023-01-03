import styled from 'styled-components';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { ContentContainer, FlexContainer } from '../../common';
import BidItem from '../../common/components/BidItem';
import { ReactSlick } from '../../ui-kit';

import { hotBids } from './constants';

const HotBids = () => {
  const { screenSize, slidesPerRow } = useAdaptiveSlider(4);

  return (
    <HotBidsWrapper>
      <FlexContainer>
        <ContentContainer>
          <HotBidsHeader>
            <HotBidsTitle>Hot bid</HotBidsTitle>
          </HotBidsHeader>
          <ReactSlick screenSize={screenSize} slidesPerRow={slidesPerRow}>
            {hotBids.map((bid, index) => (
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

  @media (max-width: 1024px) {
    padding-left: 65px;
  }

  @media (max-width: 415px) {
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
