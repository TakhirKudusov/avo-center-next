import BidGrid from '../../../common/components/BidGrid';
import { BID_LIST } from '../../../home-page/Discover/constants';

const OnSaleTab = () => {
  return <BidGrid elemPerRow={3} items={BID_LIST} />;
};

export default OnSaleTab;
