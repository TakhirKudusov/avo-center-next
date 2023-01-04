import { ListingData } from '../common/types';
import styled from 'styled-components';
import React, { memo } from 'react';
import TableHeadBlock from '../table/TableHeadBlock';
import { tableHeadTitles } from '../common/constants';
import ListingHeader from './ListingHeader';
import ListingsData from '../table/ListingsData';
import { devices } from '../../../common/constants';

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

  @media (${devices.tablet}) {
    width: auto;
    padding-right: 80px;
  }

  @media (${devices.mobile}) {
    width: auto;
    padding-right: 32px;
  }
`;

export default memo(NFTListingsBlock);
