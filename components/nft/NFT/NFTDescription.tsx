import SecondaryHeaderContainer from '../header/SecondaryHeaderContainer';
import React, { memo, useEffect, useState } from 'react';
import { NFT, TimeBeforeEnd } from '../common/types';
import styled from 'styled-components';
import { calculateTimeLeft, handleSetActiveClick } from '../common/helpers';
import NFTActions from './NFTActions';
import NFTListingsBlock from './NFTListingsBlock';

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
          <TimeContainer>
            <EndsParagraph>End in</EndsParagraph>
            <TimeGroup>
              {Object.entries(timeBeforeEnd).map((item, index) => {
                return (
                  <TimeItem key={index}>
                    <span>{item[1]}</span>
                    <span>{item[0]}</span>
                  </TimeItem>
                );
              })}
            </TimeGroup>
          </TimeContainer>
        )}
        <TabButtonsContainer>
          <TabButton
            className={'tab-btn active'}
            onClick={(e) => handleSetActiveClick(e, 'tab-btn')}
          >
            <p>Info</p>
          </TabButton>
          <TabButton
            className={'tab-btn'}
            onClick={(e) => handleSetActiveClick(e, 'tab-btn')}
          >
            <p>Owners</p>
          </TabButton>
          <TabButton
            className={'tab-btn'}
            onClick={(e) => handleSetActiveClick(e, 'tab-btn')}
          >
            <p>History</p>
          </TabButton>
        </TabButtonsContainer>
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

const TimeContainer = styled.div`
  width: 346px;
  height: 50px;
`;

const EndsParagraph = styled.p`
  width: 278px;
  height: 16px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #23262f;
  margin: 0;
`;

const TimeGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -10px;
  width: 346px;
  height: 24px;
  gap: 26px;
`;

const TimeItem = styled.p`
  display: flex;
  flex-direction: row;
  width: 71px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #23262f;
  text-transform: uppercase;
  & :last-child {
    font-size: 12px;
    color: #777e90;
    position: relative;
    bottom: -3px;
  }
  & :first-child {
    width: 30px;
  }
`;

const TabButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px;
  gap: 10px;
  width: 564px;
  height: 40px;
`;

const TabButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;
  border-radius: 100px;
  border: 2px solid #e6e8ec;
  background-color: #fafafb;
  color: #777e91;
  cursor: pointer;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  &:hover {
    background-color: #e6e8ec;
  }
  p {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }
  &.active {
    background: #353945;
    border: 2px solid #353945;
    color: #fafafb;
    &:hover {
      background-color: #515261;
      border-color: #515261;
    }
  }
`;

export default memo(NFTDescription);
