import styled from 'styled-components';
import BidPrice from '../../common/components/BidPrice';

const MainBid = () => {
  return (
    <MainBidWrapper>
      <BidPhoto style={{ backgroundImage: 'url(/images/main-bid.jpg)' }} />
      <BidBody>
        <BidDetails>
          <BidCreator
            style={{
              backgroundImage: `url(/images/creator.jpg)`,
            }}
          />
          <BidInfo>
            <BidName>The future of AVO®</BidName>
            <BidCount>18 in stock</BidCount>
          </BidInfo>
        </BidDetails>
        <BidPriceWrapper>
          <BidPriceTitle>Highest bid</BidPriceTitle>
          <BidPrice value={1.125}></BidPrice>
        </BidPriceWrapper>
      </BidBody>
    </MainBidWrapper>
  );
};

const MainBidWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BidPhoto = styled.div`
  width: 448px;
  height: 432px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
`;

const BidBody = styled.div`
  margin-top: 24px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BidDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BidCreator = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
`;

const BidInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const BidName = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #23262f;
`;

const BidCount = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #353945;
`;

const BidPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BidPriceTitle = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
  text-align: right;
`;

export default MainBid;
