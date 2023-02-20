import styled from 'styled-components';
import { devices } from '../../../../common/constants';
import { useAppSelector } from '../../../../redux/hooks';
import { TNftsState } from '../../../../redux/slicers/nftsSlicer/types';

import BidGrid from '../../../common/components/BidGrid';

const OnSaleTab = () => {
  const { userNfts } = useAppSelector<TNftsState>((state) => state.nfts);

  const bids = userNfts.filter((nft) => nft.isOnSale);

  return (
    <SaleTabWrapper>
      {!!bids.length ? (
        <BidGrid elemPerRow={3} items={bids} />
      ) : (
        <NoData>No data found</NoData>
      )}
    </SaleTabWrapper>
  );
};

const SaleTabWrapper = styled.div`
  max-width: 1150px;

  @media (${devices.tablet}) {
    max-width: 600px;
  }

  @media (${devices.mobile}) {
    max-width: 375px;
  }
`;

const NoData = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #23262f;
  font-weight: 600;
  line-height: 32px;
  margin-top: 32px;
`;

export default OnSaleTab;
