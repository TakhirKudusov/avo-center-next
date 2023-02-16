import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  clearQueryParams,
  getQueryParams,
} from '../../common/helpers/manageQueryParams.helper';
import { useAppDispatch } from '../../redux/hooks';
import {
  clearBids,
  clearNFTs,
  resetPriceRange,
} from '../../redux/slicers/discoverSlicer/discoverSlicer';
import RangeSelectionFilter from './filters/RangeSelectionFilter';
import SingleSelectionFilter from './filters/SingleSelectionFilter';
import { convertQueryParams, getFilters, getFiltersConfig } from './helpers';
import { TFilterOption, TPriceRange, FilterType } from './types';

type Props = {
  types: TFilterOption[];
  categories: TFilterOption[];
  prices: TFilterOption[];
  likes: TFilterOption[];
  priceRange: TPriceRange;
};

const FilterBar: React.FC<Props> = ({
  types,
  categories,
  prices,
  likes,
  priceRange,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const filters = convertQueryParams(router.query);
  const [filtersConfig, setFiltersConfig] = useState(
    getFiltersConfig({
      types,
      categories,
      prices,
      likes,
      priceRange,
      filters,
    }),
  );
  const [localFilters, setLocalFilters] = useState(getFilters(filtersConfig));

  const handleResetFilters = () => {
    clearQueryParams();
    dispatch(resetPriceRange());
    dispatch(clearBids());
    dispatch(clearNFTs());
  };

  const hanldeResetBtnClick = () => {
    handleResetFilters();
  };

  useEffect(() => {
    const filters = convertQueryParams(getQueryParams(window.location.search));
    console.log('filters=', filters);

    setFiltersConfig(
      getFiltersConfig({
        prices,
        likes,
        types,
        categories,
        priceRange,
        filters,
      }),
    );
  }, [types, categories, prices, likes, priceRange]);

  useEffect(() => {
    setLocalFilters(getFilters(filtersConfig));
  }, [filtersConfig]);

  return (
    <FilterBarContent>
      <FilterBarTitle>Filters</FilterBarTitle>
      <FiltersWrapper>
        {localFilters.map(
          (filter, key) =>
            (filter.type === FilterType.SINGLE_SELECTION &&
              !!filter.options?.length && (
                <SingleSelectionFilter
                  key={`filter-${key}`}
                  title={filter.title}
                  options={filter.options}
                  onChange={
                    filter.onChange as (selectedOptions: TFilterOption) => void
                  }
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
                  onChange={filter.onChange}
                />
              )),
          // <RangeFilter
          //   key={`filter-${key}`}
          //   title={filter.title}
          //   min={filter.min!}
          //   max={filter.max!}
          //   onChange={
          //     filter.onChange as (values: [number, number]) => void
          //   }
          // />
        )}
        <ResetButton onClick={hanldeResetBtnClick}>Reset filter</ResetButton>
      </FiltersWrapper>
    </FilterBarContent>
  );
};

const FilterBarContent = styled.div<any>`
  min-width: 272px;
  background: #a2c7661f;
  border-radius: 12px;
  padding: 16px 12px;
  height: max-content;
`;

const FilterBarTitle = styled.div`
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
`;

const FiltersWrapper = styled.div``;

const ResetButton = styled.button`
  background: none;
  font-size: 14px;
  font-weight: 700;
  margin-right: 7px;
  color: #000;
  border: none;
  cursor: pointer;
`;

export default FilterBar;
