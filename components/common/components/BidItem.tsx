import styled from 'styled-components';
import BidPrice from './BidPrice';
import CandlesticksSVG from '../../../assets/svg/candlesticks.svg';
import { Bid } from '../../home-page/HotBids/types';

type Props = {
  bid: Bid;
};
const BidItem: React.FC<Props> = ({ bid }) => {
  const { image, name, avoAmonut, total, available, highestBid } = bid;

  return (
    <BidWrapper>
      <BidImage style={{ backgroundImage: `url(/images/${image})` }}></BidImage>
      <BidBody>
        <BidInfo>
          <BidInfoRow>
            <BidName>{name}</BidName>
            <BidPrice value={avoAmonut} />
          </BidInfoRow>
          <BidInfoRow>
            <BidFeature>
              <BidFeatureCaption>Total:</BidFeatureCaption>
              <BidFeatureValue>{total}</BidFeatureValue>
            </BidFeature>
            <BidFeature>
              <BidFeatureCaption>Available:</BidFeatureCaption>
              <BidFeatureValue>{available}</BidFeatureValue>
            </BidFeature>
          </BidInfoRow>
        </BidInfo>
        <BidFooter>
          <HighestBid>
            <CandlesticksSVG />
            <HighestBidTitle>Highest bid</HighestBidTitle>
            <HighestBidValue>{highestBid} AVO</HighestBidValue>
          </HighestBid>
          <HotBid>Hot bit 🔥</HotBid>
        </BidFooter>
      </BidBody>
    </BidWrapper>
  );
};

const BidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 40px -2px rgba(31, 47, 70, 0.12);
  overflow: hidden;
`;

const BidImage = styled.div`
  width: 256px;
  height: 236px;
  background: #ccc;
  background-size: cover;
  background-position: center;
`;

const BidBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 12px 32px;
`;

const BidInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  border-bottom: 1px solid #e6e8ec;
`;

const BidInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BidName = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #23262f;
`;

const BidFeature = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const BidFeatureCaption = styled.div`
  color: rgba(119, 126, 144, 0.6);
`;

const BidFeatureValue = styled.div`
  color: #777e90;
`;

const BidFooter = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HighestBid = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  gap: 4px;
`;

const HighestBidTitle = styled.div`
  color: #777e91;
`;

const HighestBidValue = styled.div`
  color: #353945;
  font-weight: 600;
`;

const HotBid = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

export default BidItem;
