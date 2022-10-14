import SecondaryHeaderContainer from '../header/SecondaryHeaderContainer';
import React, { memo, useEffect, useState } from 'react';
import { NFT, TimeBeforeEnd } from '../common/types';
import styled from 'styled-components';
import { calculateTimeLeft } from '../common/helpers';
import NFTActions from './NFTActions';
import NFTListingsBlock from './NFTListingsBlock';
import Timer from '../Timer/Timer';
import TabButtonsGroup from './TabButtonsGroup';

type Props = {
  data: Omit<NFT, 'image' | 'tags'>;
};

const NFTDescription: React.FC<Props> = ({ data }) => {
  const [timeBeforeEnd, setTimeBeforeEnd] = useState<
    TimeBeforeEnd | undefined
  >();

  useEffect(() => {
    if (data?.bid?.isOnBid) {
      const intervalId = setInterval(() => {
        setTimeBeforeEnd(calculateTimeLeft(data.bid?.endTime!));
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, []);

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
