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
          {!loading && !![...bids, ...nfts].length ? (
            <BidGrid items={[...bids, ...nfts]} elemPerRow={4} />
          ) : (
            <NoData>No data found</NoData>
          )}
        </ContentContainer>
      </FlexContainer>
    </DiscoverWrapper>
  );
};

const DiscoverWrapper = styled.div`
  padding: 90px 0;
`;

const SectionTitle = styled.div`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const NoData = styled.div`
  font-family: 'Nasalization';
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  line-height: 32px;
  margin-top: 32px;
`;

export default Discover;
