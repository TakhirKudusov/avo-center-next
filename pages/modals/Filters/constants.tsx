import FilterOption from './components/ColorsOption';
import NetworksOption from './components/NetworksOption';
import BinanceIcon from '../../../assets/svg/binance-icon.svg';
import PolygonIcon from '../../../assets/svg/polygon-icon.svg';

export const colors = [
  {
    id: 'all-colors',
    value: 'allColors',
    label: <FilterOption colorName="All colors" color="#3772FF" />,
  },
  {
    id: 'black',
    value: 'black',
    label: <FilterOption colorName="Black" color="#141416" />,
  },
  {
    id: 'green',
    value: 'green',
    label: <FilterOption colorName="Green" color="#45B36B" />,
  },
  {
    id: 'pink',
    value: 'pink',
    label: <FilterOption colorName="Pink" color="#EF466F" />,
  },
  {
    id: 'purple',
    value: 'purple',
    label: <FilterOption colorName="Purple" color="#9757D7" />,
  },
];

export const networks = [
  {
    id: 'binance',
    value: 'binance',
    label: <NetworksOption icon={<BinanceIcon />} optionName="Binance" />,
  },
  {
    id: 'binance',
    value: 'binance',
    label: <NetworksOption icon={<PolygonIcon />} optionName="Polygon" />,
  },
];
