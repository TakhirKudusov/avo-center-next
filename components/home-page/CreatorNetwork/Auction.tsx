import styled from 'styled-components';
import { Timer } from './Timer';

import { TimeBeforeEnd } from '../../nft/common/types';

type Props = {
  timeBeforeEnd?: TimeBeforeEnd;
};

const Auction = ({ timeBeforeEnd }: Props) => {
  return (
    <AuctionWrapper>
      <BidTitle>Current Bid</BidTitle>
      <BidValue>1.00 AVO</BidValue>
      <BidPrice>$3,618.36</BidPrice>
      <AuctionTitle>Auction ending in</AuctionTitle>
      <Timer timeBeforeEnd={timeBeforeEnd} />
    </AuctionWrapper>
  );
};

const AuctionWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  background: #fcfcfd;
  border: 2px solid #e6e8ec;
  box-shadow: 0 64px 64px -48px rgba(31, 47, 70, 0.12);
  border-radius: 24px;
  padding: 32px 0;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const BidTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #23262f;
`;

const BidValue = styled.h3`
  font-family: 'DM Sans', sans-serif;
  margin: 0;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #141416;
`;

const BidPrice = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #777e91;
`;

const AuctionTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #23262f;
  margin-top: 24px;
`;

export default Auction;
