import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  clearQueryParams,
  getQueryParams,
} from '../../../common/helpers/manageQueryParams.helper';
import CloseIcon from '../../../assets/svg/close-icon.svg';
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
import { Divider } from '../../ui-kit';
import { devices } from '../../../common/constants';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';

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

  const { screenSize } = useAdaptiveSlider();
  const [localFilters, setLocalFilters] = useState(
    getFilters(filtersConfig, screenSize),
  );

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
    setLocalFilters(getFilters(filtersConfig, screenSize));
  }, [filtersConfig]);

  return (
    <FilterBarContent>
      <FiltersWrapper>
        <FiltersRow>
          {localFilters.slice(0, 2).map(filterByTypeMapper)}
          <ResetButtonWrapper>
            <ResetButton onClick={hanldeResetBtnClick}>
              <span>Filter</span>
              <CloseIcon />
            </ResetButton>
          </ResetButtonWrapper>
        </FiltersRow>
        <Divider style={{ margin: '16px 0 24px' }} />
        <FiltersRow>
          {localFilters.slice(2, localFilters.length).map(filterByTypeMapper)}
        </FiltersRow>
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
  margin: 60px 0 30px;
`;

const FiltersWrapper = styled.div``;

const FiltersRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (${devices.mobile}) {
    flex-direction: column;
  }
`;

const ResetButtonWrapper = styled.div`
  width: 100%;
  max-width: 260px;
  display: flex;
  justify-content: flex-end;

  @media (${devices.mobile}) {
    max-width: 100%;
    justify-content: flex-start;
  }
`;

const ResetButton = styled.button`
  font-family: 'Nasalization';
  background: #ffffff;
  width: 102px;
  height: 40px;
  border-radius: 12px;
  font-size: 14px;
  margin-right: 7px;
  color: #000;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

export default FilterBar;
