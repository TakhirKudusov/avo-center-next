import SecondaryHeaderContainer from '../header/SecondaryHeaderContainer';
import React, { memo, useEffect, useState } from 'react';
import { NFT, TimeBeforeEnd } from '../common/types';
import styled from 'styled-components';
import NFTActions from './NFTActions';
import NFTListingsBlock from './NFTListingsBlock';
import TabButtonsGroup from './TabButtonsGroup';
import { NFTDescriptionData } from './types';
import { Timer, useTimer } from '../../ui-kit';

type Props = {
  data: NFTDescriptionData;
};

const NFTDescription: React.FC<Props> = ({ data }) => {
  const { timeBeforeEnd } = useTimer(data);

  return (
    <div>
      <SecondaryHeaderContainer data={data} />
      <Description>{data.desc}</Description>
      <NFTMenuContainer>
        {data?.bid?.isOnBid && timeBeforeEnd && (
          <Timer timeBeforeEnd={timeBeforeEnd} />
        )}
        <TabButtonsGroup />
        <NFTActions price={data.price} convertedPrice={data.convertedPrice} />
      </NFTMenuContainer>
      <NFTListingsBlock listingsData={data.listingsData} />
    </div>
  );
};

const Description = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #777e91;
  width: 564px;
  padding-bottom: 40px;
  margin: 0;
`;

const NFTMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export default memo(NFTDescription);
