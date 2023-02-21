import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  clearQueryParams,
  getQueryParams,
} from '../../../common/helpers/manageQueryParams.helper';
import { useAppDispatch } from '../../../redux/hooks';
import {
  clearBids,
  clearNFTs,
  resetPriceRange,
} from '../../../redux/slicers/discoverSlicer/discoverSlicer';
import {
  convertQueryParams,
  filterByTypeMapper,
  getFiltersConfig,
} from '../../catalog/helpers';
import { TFilterOption, TPriceRange } from '../../catalog/types';
import { getFilters } from './helpers';

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
      priceRange,
      isVerifieds,
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
        isVerifieds,
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
      <FiltersWrapper>
        <FiltersRow>
          {localFilters.slice(0, 2).map(filterByTypeMapper)}
          <ResetButtonWrapper>
            <ResetButton onClick={hanldeResetBtnClick}>Filter</ResetButton>
          </ResetButtonWrapper>
        </FiltersRow>
        <FiltersRow>
          {localFilters.slice(2, localFilters.length).map(filterByTypeMapper)}
        </FiltersRow>
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
  margin: 60px 0 30px;
`;

const FiltersWrapper = styled.div``;

const FiltersRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const ResetButtonWrapper = styled.div`
  width: 100%;
  max-width: 260px;
  text-align: right;
`;

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
