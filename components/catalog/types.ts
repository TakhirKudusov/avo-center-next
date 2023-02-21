import { CSSProperties } from 'styled-components';
import { MultiRangeSliderValue } from '../ui-kit/MultiRangeSlider/types';

type TFilterItem = {
  label: string;
  value: string;
};

type TPriceRange = {
  minPrice?: number;
  maxPrice?: number;
};

enum FilterType {
  MULTIPLE_SELECTION,
  FLAT_LIST,
  SINGLE_SELECTION,
  RANGE,
  COLOR,
}

type TFilterOption = {
  id: string;
  name: string;
  url: string;
  checked?: boolean;
  color?: string;
};

type TFilters = {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  desc?: string;
  available?: boolean;
  prices?: string[];
  likes?: string[];
  types?: string[];
  categories?: string[];
  isVerifieds?: string[];
};

type TFilter = {
  title: string;
  type: FilterType;
  options?: TFilterOption[];
  filterStyles?: CSSProperties;
  min?: number;
  max?: number;
  onChange: (
    selectedOptions: (TFilterOption[] | undefined) &
      TFilterOption &
      MultiRangeSliderValue,
  ) => void;
};

type TFiltersConfig = {
  prices: TFilterOption[];
  likes: TFilterOption[];
  types: TFilterOption[];
  categories: TFilterOption[];
  isVerifieds: TFilterOption[];
  priceRange: TPriceRange;
  filters: TFilters;
};

export {
  type TFilterItem,
  type TPriceRange,
  type TFilter,
  type TFiltersConfig,
  type TFilterOption,
  FilterType,
};
