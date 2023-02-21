import { cloneDeep } from 'lodash';
import {
  getQueryParams,
  pushQueryParams,
} from '../../common/helpers/manageQueryParams.helper';
import { sortStringifier } from '../../common/helpers/sortStringifier.helper';
import {
  clearBids,
  clearNFTs,
  fetchBids,
  fetchNFTs,
} from '../../redux/slicers/discoverSlicer/discoverSlicer';
import { AppDispatch } from '../../redux/store';
import { MultiRangeSliderValue } from '../ui-kit/MultiRangeSlider/types';
import FlatListFilter from './filters/FlatListFilter';
import RangeSelectionFilter from './filters/RangeSelectionFilter';
import SingleSelectionFilter from './filters/SingleSelectionFilter';
import { FilterType, TFilter, TFilterOption, TFiltersConfig } from './types';

const PAGE_ITEMS_LIMIT = 12;

const convertQueryParams = (query: {
  [k: string]: string | string[] | undefined;
}) => {
  const {
    prices,
    likes,
    types,
    categories,
    isVerifieds,
    minPrice,
    maxPrice,
    name,
  } = query;
  const typesArray = types
    ? Array.isArray(types)
      ? types
      : [types]
    : undefined;
  const categoriesArray = categories
    ? Array.isArray(categories)
      ? categories
      : [categories]
    : undefined;
  const pricesArray = prices
    ? Array.isArray(prices)
      ? prices
      : [prices]
    : undefined;
  const likesArray = likes
    ? Array.isArray(likes)
      ? likes
      : [likes]
    : undefined;
  const isVerifiedArray = isVerifieds
    ? Array.isArray(isVerifieds)
      ? isVerifieds
      : [isVerifieds]
    : undefined;
  const nameVal = name ? (Array.isArray(name) ? name[0] : name) : undefined;

  return {
    types: typesArray,
    prices: pricesArray,
    likes: likesArray,
    categories: categoriesArray,
    isVerifieds: isVerifiedArray,
    name: nameVal,
    minPrice,
    maxPrice,
  } as any;
};

const getFiltersConfig = ({
  types,
  prices,
  categories,
  likes,
  isVerifieds,
  priceRange,
  filters,
}: TFiltersConfig) => {
  return {
    priceOptions: prices.map(({ id, name, url }) => ({
      id,
      name,
      url,
      checked: !!filters.prices?.find((priceUrl) => priceUrl === url),
    })) as TFilterOption[],
    likeOptions: likes.map(({ id, name, url }) => ({
      id,
      name,
      url,
      checked: !!filters.likes?.find((likeUrl) => likeUrl === url),
    })) as TFilterOption[],
    typeOptions: types.map(({ id, name, url }) => ({
      id,
      name,
      url,
      checked: !!filters.types?.find((typeUrl) => typeUrl === url),
    })) as TFilterOption[],
    categoryOptions: categories.map(({ id, name, url }) => ({
      id,
      name,
      url,
      checked: !!filters.categories?.find((categoryUrl) => categoryUrl === url),
    })) as TFilterOption[],
    isVerifiedOptions: isVerifieds.map(({ id, name, url }) => ({
      id,
      name,
      url,
      checked: !!filters.isVerifieds?.find(
        (isVerifiedUrl) => isVerifiedUrl === url,
      ),
    })) as TFilterOption[],
    minPrice: priceRange.minPrice!,
    maxPrice: priceRange.maxPrice!,
  };
};

const onLocationChange = (dispatch: AppDispatch) => async () => {
  const queryParams = getQueryParams(window.location.search);
  const { minPrice, maxPrice, name, page } = queryParams;
  const { prices, likes, types, categories, isVerifieds } =
    convertQueryParams(queryParams);
  const type = types ? types[0] : undefined;
  const isVerified =
    isVerifieds && isVerifieds[0] === 'true'
      ? true
      : isVerifieds && isVerifieds[0] === 'false'
      ? false
      : undefined;
  const payload = {
    name,
    category: categories ? categories[0] : undefined,
    isVerified,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
    sortBy: sortStringifier({ _id: 1 }),
    limit: PAGE_ITEMS_LIMIT,
    // offset: PAGE_ITEMS_LIMIT * (Number(page ?? 1) - 1),
  };
  const sortBy = {} as { [key: string]: number };

  if (prices) {
    sortBy.salePrice = +prices[0];
  }

  if (likes) {
    sortBy.likesLength = +likes[0];
  }

  if (Object.keys(sortBy).length) {
    payload.sortBy = sortStringifier(sortBy);
  }

  // dispatch(setPage(Number(page ?? 1)));

  if (type === 'nft') {
    dispatch(clearBids());
    dispatch(fetchNFTs(payload));
  }

  if (type === 'bid') {
    dispatch(clearNFTs());
    dispatch(fetchBids(payload));
  }

  const curLocation = localStorage.getItem('location')!;
  localStorage.setItem('location', window.location.search);

  const rawPrevQueryParams = getQueryParams(curLocation);
  const prevQueryParams = convertQueryParams(rawPrevQueryParams);

  if (prevQueryParams.maxPrice !== undefined && maxPrice === undefined) {
    // TODO relaoad priceRange
  }
};

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
      type: FilterType.SINGLE_SELECTION,
      onChange: (selectedOption: TFilterOption | undefined) => {
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

const filterByTypeMapper = (filter: TFilter, key: number) =>
  (filter.type === FilterType.SINGLE_SELECTION && !!filter.options?.length && (
    <SingleSelectionFilter
      key={`filter-${key}`}
      title={filter.title}
      options={filter.options}
      filterStyles={filter.filterStyles}
      onChange={filter.onChange as (selectedOptions: TFilterOption) => void}
    />
  )) ||
  (filter.type === FilterType.FLAT_LIST && !!filter.options?.length && (
    <FlatListFilter
      key={`filter-${key}`}
      options={filter.options}
      filterStyles={filter.filterStyles}
      onChange={filter.onChange as (selectedOptions: TFilterOption) => void}
    />
  )) ||
  (filter.type === FilterType.RANGE &&
    (!!filter.min || filter.min === 0) &&
    !!filter.max && (
      <RangeSelectionFilter
        key={`filter-${key}`}
        title={filter.title}
        max={filter.max}
        min={filter.min}
        filterStyles={filter.filterStyles}
        onChange={filter.onChange}
      />
    ));

export {
  convertQueryParams,
  getFiltersConfig,
  onLocationChange,
  getFilters,
  filterByTypeMapper,
};
