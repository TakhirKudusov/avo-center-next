import { ListingData } from '../common/types';
import UpSideCorner from '../../../assets/svg/up-side-corner.svg';
import styled from 'styled-components';
import { fromNameFormatter, handleSetActiveClick } from '../common/helpers';
import React, { memo } from 'react';
import TableHeadBlock from '../table/TableHeadBlock';
import { tableHeadTitles } from '../common/constants';
import ListingHeader from './ListingHeader';
import ListingsData from '../table/ListingsData';

type Props = {
  listingsData: ListingData[];
};

const NFTListingsBlock: React.FC<Props> = ({ listingsData }) => {
  return (
    <ListingWrapper>
      <ListingHeader />
      <TableHeadBlock tableHeadTitles={tableHeadTitles} />
      <ListingsData listingsData={listingsData} />
    </ListingWrapper>
  );
};

const ListingWrapper = styled.div`
  width: 564px;
  height: 366px;
  margin-top: 56px;
`;

export default memo(NFTListingsBlock);
