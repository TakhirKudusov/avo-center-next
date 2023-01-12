import SecondaryHeaderContainer from '../header/SecondaryHeaderContainer';
import React, { memo } from 'react';
import styled from 'styled-components';
import NFTActions from './NFTActions';
import NFTListingsBlock from './NFTListingsBlock';
import TabButtonsGroup from './TabButtonsGroup';
import { NFTDescriptionData } from './types';
import { Timer, useTimer } from '../../ui-kit';
import { devices } from '../../../common/constants';
import { NFT_OWNER } from '../../../common/enums/nftOwner.enum';

type Props = {
  data: NFTDescriptionData;
  screenSize: 'large' | 'small';
};

const NFTDescription: React.FC<Props> = ({ data, screenSize }) => {
  const { timeBeforeEnd } = useTimer(data);
  // TODO: replace Mock with server data
  const nftOwner = NFT_OWNER.USER;
  const isNFTOnSale = false;

  return (
    <div>
      <SecondaryHeaderContainer data={data} />
      <Description>{data.desc}</Description>
      {screenSize === 'small' && (
        <LicenseWrapper>
          <License>{data.license}</License>&nbsp;
          <span>{data.exclusiveFullLicense}</span>
        </LicenseWrapper>
      )}
      <NFTMenuContainer>
        {data?.bid?.isOnBid &&
          timeBeforeEnd &&
          (nftOwner as NFT_OWNER) === NFT_OWNER.AUTHOR && (
            <Timer timeBeforeEnd={timeBeforeEnd} />
          )}
        <TabButtonsGroup screenSize={screenSize} />
        <NFTActions
          isNFTOnSale={isNFTOnSale}
          nftOwner={nftOwner}
          price={data.price}
          convertedPrice={data.convertedPrice}
        />
      </NFTMenuContainer>
      {screenSize === 'large' && (
        <NFTListingsBlock listingsData={data.listingsData} />
      )}
    </div>
  );
};

const Description = styled.p`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #777e91;
  width: 564px;
  padding-bottom: 40px;
  margin: 0;

  @media (${devices.tablet}) {
    width: auto;
    padding-bottom: 16px;
  }

  @media (${devices.mobile}) {
    width: auto;
  }
`;

const NFTMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const LicenseWrapper = styled.div`
  @media (${devices.tablet}) {
    margin-bottom: 32px;
  }

  @media (${devices.mobile}) {
    margin-bottom: 32px;
  }
`;

const License = styled.span`
  color: #777e90;
`;

export default memo(NFTDescription);
