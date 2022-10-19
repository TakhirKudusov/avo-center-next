import General from './general/General';
import { Tab } from '../common/types';
import React, { memo } from 'react';
import Hosting from './hosting/Hosting';
import Product from './product/Product';
import Support from './support/Support';

type Props = {
  tabType: Tab;
};

const Tabs: React.FC<Props> = ({ tabType }) => {
  switch (tabType) {
    case 'general':
      return <General />;
    case 'hosting':
      return <Hosting />;
    case 'product':
      return <Product />;
    case 'support':
      return <Support />;
    default:
      return <div></div>;
  }
};

export default memo(Tabs);
