import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  getQueryParams,
  pushQueryParams,
} from '../../../common/helpers/manageQueryParams.helper';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchCategories } from '../../../redux/slicers/discoverSlicer/discoverSlicer';
import { TDiscoverState } from '../../../redux/slicers/discoverSlicer/types';
import {
  CREATOR_ITEMS,
  LIKE_ITEMS,
  PRICE_ITEMS,
  TYPE_ITEMS,
} from '../../catalog/constants';
import { convertQueryParams, onLocationChange } from '../../catalog/helpers';
import { TFilterOption } from '../../catalog/types';
import { ContentContainer, FlexContainer } from '../../common';
import BidGrid from '../../common/components/BidGrid';
import { ListItem } from '../../ui-kit/FlatList/types';
import FilterBar from './FilterBar';

const Discover = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [queryParams, setQueryParams] = useState<string>();
  const { categories, bids, nfts, loading, priceRange } =
    useAppSelector<TDiscoverState>((state) => state.discover);

  const handleLocationChange = onLocationChange(dispatch);

  const onCategoryChange = () => {
    const queryParams = convertQueryParams(
      getQueryParams(window.location.search),
    );
    console.log('queryParams=', queryParams);
    setQueryParams(JSON.stringify(queryParams));
  };

  // const handlePageChange = (page: number) => {
  //   pushQueryParams([{ name: 'page', value: page }]);
  // };

  const categoryOptions: TFilterOption[] = categories.map((category) => ({
    id: category._id,
    name: category.name,
    url: category._id,
  }));

  useEffect(() => {
    localStorage.removeItem('location');
    window.addEventListener('locationChange', () => {
      handleLocationChange();
      onCategoryChange();
    });

    // setTimeout(() => {
    //   setPriceRange({
    //     minPrice: 0,
    //     maxPrice: 1000,
    //   });
    // });

    (async () => {
      if (!router.query.types) {
        pushQueryParams([{ name: 'types', value: ['nft'] }]);
      }

      await dispatch(fetchCategories());
      await handleLocationChange();
      onCategoryChange();
    })();

    return () => {
      window.removeEventListener('locationChange', handleLocationChange);
    };
  }, []);

  return (
    <DiscoverWrapper id="discover">
      <FlexContainer>
        <ContentContainer>
          <SectionTitle>Discover</SectionTitle>
          <FilterBar
            types={TYPE_ITEMS}
            categories={categoryOptions}
            likes={LIKE_ITEMS}
            prices={PRICE_ITEMS}
            isVerifieds={CREATOR_ITEMS}
            priceRange={priceRange}
          />
          {loading && '...loading'}
          {!loading && <BidGrid items={[...bids, ...nfts]} elemPerRow={4} />}
        </ContentContainer>
      </FlexContainer>
    </DiscoverWrapper>
  );
};

const DiscoverWrapper = styled.div`
  background: #fcfcfd;
  padding: 90px 0;
`;

const SectionTitle = styled.div`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #23262f;
`;

const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e6e8ec;
`;

const FilterBtnContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SortRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  padding-bottom: 32px;
`;

const SortItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SortItemLabel = styled.div`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #b1b5c4;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  justify-content: center;
`;

export default Discover;
