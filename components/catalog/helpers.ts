// import {
//   fetchPriceRange,
//   fetchProducts,
//   setPage,
// } from 'redux/slicers/store/catalogSlicer';
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
import { FilterType, TFilter, TFilterOption, TFiltersConfig } from './types';

const PAGE_ITEMS_LIMIT = 12;

const convertQueryParams = (query: {
  [k: string]: string | string[] | undefined;
}) => {
  const { prices, likes, types, categories, minPrice, maxPrice, name } = query;
  console.log('name', name);
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
  const nameVal = name ? (Array.isArray(name) ? name[0] : name) : undefined;

  return {
    types: typesArray,
    prices: pricesArray,
    likes: likesArray,
    categories: categoriesArray,
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
    minPrice: priceRange.minPrice!,
    maxPrice: priceRange.maxPrice!,
  };
};

const setPriceRange = (dispatch: AppDispatch) => {
  const queryParams = getQueryParams(window.location.search);
  const { prices, likes, types, categories } = convertQueryParams(queryParams);
  const payload = {
    prices: prices ? prices[0] : undefined,
    likes: likes ? likes[0] : undefined,
    types: types ? likes[0] : undefined,
    categories: categories ? categories[0] : undefined,
  };

  // dispatch(fetchPriceRange(payload));
};

const onLocationChange = (dispatch: AppDispatch) => async () => {
  const queryParams = getQueryParams(window.location.search);
  const { minPrice, maxPrice, name, page } = queryParams;
  const { prices, likes, types, categories } = convertQueryParams(queryParams);

  const type = types ? types[0] : undefined;
  const category: string = categories ? categories[0] : undefined;
  const payload = {
    name,
    category,
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

  // dispatch(fetchProducts(payload));
  const curLocation = localStorage.getItem('location')!;
  localStorage.setItem('location', window.location.search);

  const rawPrevQueryParams = getQueryParams(curLocation);
  const prevQueryParams = convertQueryParams(rawPrevQueryParams);

  if (prevQueryParams.maxPrice !== undefined && maxPrice === undefined) {
    // setPriceRange({
    //   minPrice: undefined,
    //   maxPrice: undefined,
    // });
    // setTimeout(() => {
    //   setPriceRange({
    //     minPrice: 0,
    //     maxPrice: 1000,
    //   });
    // });
  }

  // if (
  //   JSON.stringify(prevQueryParams.categories) !== JSON.stringify(categories)
  // ) {
  //   const category = categories ? categories[0] : '';

  //   if (category) {
  //     await dispatch(fetchSubCategories(category));
  //     await dispatch(fetchBrands({ parent: category }));
  //     await dispatch(fetchColors({ parent: category }));
  //   } else {
  //     await dispatch(clearSubCategories());
  //     await dispatch(clearBrands());
  //     await dispatch(clearColors());
  //   }
  //   setPriceRange(dispatch);
  // }

  // if (
  //   JSON.stringify(prevQueryParams.subCategories) !==
  //   JSON.stringify(subCategories)
  // ) {
  //   if (subCategories) {
  //     await dispatch(fetchBrands({ category: subCategories[0] }));
  //     await dispatch(fetchColors({ category: subCategories[0] }));
  //   }
  // }
};

const getFilters = ({
  typeOptions,
  categoryOptions,
  priceOptions,
  likeOptions,
  minPrice,
  maxPrice,
}: {
  typeOptions: TFilterOption[];
  categoryOptions: TFilterOption[];
  priceOptions: TFilterOption[];
  likeOptions: TFilterOption[];
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

export {
  convertQueryParams,
  getFiltersConfig,
  setPriceRange,
  onLocationChange,
  getFilters,
};
