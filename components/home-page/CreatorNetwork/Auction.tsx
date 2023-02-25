import styled from 'styled-components';
import { Timer } from './Timer';

import { TimeBeforeEnd } from '../../nft/common/types';
import { IBid } from '../../../swagger';
import { formatNumber } from '../../../common/helpers/formatNumber';

type Props = {
  bid: IBid;
  timeBeforeEnd?: TimeBeforeEnd;
};

const Auction = ({ bid, timeBeforeEnd }: Props) => {
  return (
    <AuctionWrapper>
      <BidTitle>Current Bid</BidTitle>
      <BidValue>{bid.nft.available} AVO</BidValue>
      <BidPrice>${formatNumber(bid.nft.salePrice || '0') as any}</BidPrice>
      <AuctionTitle>Auction ending in</AuctionTitle>
      <Timer timeBeforeEnd={timeBeforeEnd} />
    </AuctionWrapper>
  );
};

const AuctionWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
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
  color: #fff;
  font-family: 'Montserrat';
`;

const BidValue = styled.h3`
  font-family: 'Nasalization';
  margin: 0;
  font-weight: 400;
  font-size: 48px;
  line-height: 57px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const BidPrice = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
`;

const AuctionTitle = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin-top: 24px;
`;

export default Auction;
