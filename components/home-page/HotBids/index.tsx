import styled from 'styled-components';
import ArrowLeftSVG from '../../../assets/svg/arrow-left.svg';
import ArrowRightSVG from '../../../assets/svg/arrow-right.svg';
import { ContentContainer, FlexContainer } from '../../common';
import BidItem from '../../common/components/BidItem';
import { hotBids } from './constants';

const HotBids = () => {
  return (
    <HotBidsWrapper>
      <FlexContainer>
        <ContentContainer>
          <HotBidsHeader>
            <HotBidsTitle>Hot bid</HotBidsTitle>
            <Arrows>
              <Arrow>
                <ArrowLeftSVG />
              </Arrow>
              <Arrow>
                <ArrowRightSVG />
              </Arrow>
            </Arrows>
          </HotBidsHeader>
          <BidsWrapper>
            {hotBids.map((bid, index) => (
              <BidItem key={`bid-item-${index}`} bid={bid} />
            ))}
          </BidsWrapper>
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

const Arrows = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: 50%;
  cursor: pointer;
`;

const BidsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 64px;
`;

export default HotBids;
