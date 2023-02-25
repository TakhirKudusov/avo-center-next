import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  clearQueryParams,
  getQueryParams,
} from '../../common/helpers/manageQueryParams.helper';
import { useAppDispatch } from '../../redux/hooks';
import CircleCloseFilledSVG from '../../assets/svg/circle-close-filled.svg';
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
        <ResetButton onClick={hanldeResetBtnClick}>
          <span>Reset filter</span>
          <CircleCloseFilledSVG />
        </ResetButton>
      </FiltersWrapper>
    </FilterBarContent>
  );
};

const FilterBarContent = styled.div<any>`
  min-width: 272px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  border-radius: 12px;
  padding: 16px 12px;
  height: max-content;
`;

const FilterBarTitle = styled.div`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: 'Nasalization';
`;

const FiltersWrapper = styled.div``;

const ResetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Nasalization';
  background: none;
  font-size: 14px;
  font-weight: 400;
  margin-right: 7px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.7);

    & > svg > path {
      fill: rgba(255, 255, 255, 0.7);
    }
  }
`;

export default FilterBar;
