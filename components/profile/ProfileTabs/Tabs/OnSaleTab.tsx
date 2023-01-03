import styled from 'styled-components';

import BidGrid from '../../../common/components/BidGrid';
import { BID_LIST } from '../../../home-page/Discover/constants';

const OnSaleTab = () => {
  return (
    <SaleTabWrapper>
      <BidGrid elemPerRow={3} items={BID_LIST} />
    </SaleTabWrapper>
  );
};

const SaleTabWrapper = styled.div`
  max-width: 1150px;

  @media (max-width: 1024px) {
    max-width: 600px;
  }

  @media (max-width: 415px) {
    max-width: 375px;
  }
`;

export default OnSaleTab;
