import { FilterType, TFilter, TFilterOption } from '../../catalog/types';
import { cloneDeep } from 'lodash';
import { pushQueryParams } from '../../../common/helpers/manageQueryParams.helper';
import { MultiRangeSliderValue } from '../../ui-kit/MultiRangeSlider/types';

const getFilters = ({
  typeOptions,
  categoryOptions,
  priceOptions,
  likeOptions,
  isVerifiedOptions,
  minPrice,
  maxPrice,
}: {
  typeOptions: TFilterOption[];
  categoryOptions: TFilterOption[];
  priceOptions: TFilterOption[];
  likeOptions: TFilterOption[];
  isVerifiedOptions: TFilterOption[];
  minPrice: number;
  maxPrice: number;
}): TFilter[] => {
  return [
    {
      title: 'Type',
      options: cloneDeep(typeOptions),
      type: FilterType.SINGLE_SELECTION,
      filterStyles: { maxWidth: 260 },
      onChange: (selectedOption: TFilterOption | undefined) => {
        const types = selectedOption?.url ? [selectedOption?.url] : [];

        pushQueryParams([
          { name: 'types', value: types },
          { name: 'minPrice', value: null },
          { name: 'maxPrice', value: null },
          { name: 'page', value: 1 },
        ]);
      },
    },
    {
      title: 'Category',
      options: cloneDeep(categoryOptions),
      type: FilterType.FLAT_LIST,
      filterStyles: { width: 'fit-content' },
      onChange: (selectedOption: TFilterOption | undefined) => {
        console.log(selectedOption);
        const categories = selectedOption?.url ? [selectedOption?.url] : [];

        pushQueryParams([
          { name: 'categories', value: categories },
          { name: 'minPrice', value: null },
          { name: 'maxPrice', value: null },
          { name: 'page', value: 1 },
        ]);
      },
    },
    {
      title: 'Price',
      options: cloneDeep(priceOptions),
      type: FilterType.SINGLE_SELECTION,
      filterStyles: { maxWidth: 260 },
      onChange: (selectedOption: TFilterOption | undefined) => {
        const prices = selectedOption?.url ? [selectedOption?.url] : [];

        pushQueryParams([
          { name: 'prices', value: prices },
          { name: 'minPrice', value: null },
          { name: 'maxPrice', value: null },
          { name: 'page', value: 1 },
        ]);
      },
    },
    {
      title: 'Likes',
      options: cloneDeep(likeOptions),
      type: FilterType.SINGLE_SELECTION,
      filterStyles: { maxWidth: 260 },
      onChange: (selectedOption: TFilterOption | undefined) => {
        const likes = selectedOption?.url ? [selectedOption?.url] : [];

        pushQueryParams([
          { name: 'likes', value: likes },
          { name: 'minPrice', value: null },
          { name: 'maxPrice', value: null },
          { name: 'page', value: 1 },
        ]);
      },
    },
    {
      title: 'Creator',
      options: cloneDeep(isVerifiedOptions),
      type: FilterType.SINGLE_SELECTION,
      filterStyles: { maxWidth: 260 },
      onChange: (selectedOption: TFilterOption | undefined) => {
        const isVerifieds = selectedOption?.url ? [selectedOption?.url] : [];

        pushQueryParams([
          { name: 'isVerifieds', value: isVerifieds },
          { name: 'minPrice', value: null },
          { name: 'maxPrice', value: null },
          { name: 'page', value: 1 },
        ]);
      },
    },
    {
      title: 'Price range',
      type: FilterType.RANGE,
      min: minPrice,
      max: maxPrice,
      filterStyles: { maxWidth: 260 },
      onChange: ({ min, max }: MultiRangeSliderValue) => {
        pushQueryParams([
          { name: 'minPrice', value: min },
          { name: 'maxPrice', value: max },
          { name: 'page', value: 1 },
        ]);
      },
    },
  ];
};

export { getFilters };
