import styled from 'styled-components';
import { devices } from '../../../../common/constants';

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

  @media (${devices.tablet}) {
    max-width: 600px;
  }

  @media (${devices.mobile}) {
    max-width: 375px;
  }
`;

export default OnSaleTab;
