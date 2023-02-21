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
import {
  convertQueryParams,
  filterByTypeMapper,
  getFilters,
  getFiltersConfig,
} from './helpers';
import { TFilterOption, TPriceRange } from './types';

type Props = {
  types: TFilterOption[];
  categories: TFilterOption[];
  prices: TFilterOption[];
  likes: TFilterOption[];
  isVerifieds: TFilterOption[];
  priceRange: TPriceRange;
};

const FilterBar: React.FC<Props> = ({
  types,
  categories,
  prices,
  likes,
  isVerifieds,
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
      isVerifieds,
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
        isVerifieds,
        filters,
      }),
    );
  }, [types, categories, prices, likes, priceRange, isVerifieds]);

  useEffect(() => {
    setLocalFilters(getFilters(filtersConfig));
  }, [filtersConfig]);

  return (
    <FilterBarContent>
      <FilterBarTitle>Filters</FilterBarTitle>
      <FiltersWrapper>
        {localFilters.map(filterByTypeMapper)}
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
