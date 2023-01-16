import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Modal, Timer, useTimer } from '../../ui-kit';

import SecondaryHeaderContainer from '../header/SecondaryHeaderContainer';
import OwnerBox from '../../../assets/svg/owner-box.svg';
import { devices } from '../../../common/constants';
import { NFT_OWNER } from '../../../common/enums/nftOwner.enum';

import NFTActions from './NFTActions';
import NFTListingsBlock from './NFTListingsBlock';
import TabButtonsGroup from './TabButtonsGroup';
import { ownersMock } from './Mock';
import { NFTDescriptionData } from './types';
import { OwnerRoles } from './constants';
import { useAppSelector } from '../../../redux/hooks';
import { TAuthState } from '../../../redux/types';

type Props = {
  data: NFTDescriptionData;
  screenSize: 'large' | 'small';
};

const NFTDescription: React.FC<Props> = ({ data, screenSize }) => {
  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const { timeBeforeEnd } = useTimer(data);
  // TODO: replace Mock with server data
  const isNFTOnSale = false;
  const [isOwnersModalOpen, setIsOwnersModalOpen] = useState(false);
  const [nftOwner, setNftOwner] = useState<NFT_OWNER>(NFT_OWNER.USER);

  const handleIsOwnersModalClose = () => {
    setIsOwnersModalOpen(false);
  };

  useEffect(() => {
    if (!user && nftOwner === NFT_OWNER.USER) {
      setNftOwner(NFT_OWNER.AUTHOR);
    }
  }, [nftOwner, user]);

  return (
    <div>
      <SecondaryHeaderContainer data={data} />
      <Description>{data.desc}</Description>
      <LicenseWrapper>
        <License>{data.license}</License>&nbsp;
        <span>{data.exclusiveFullLicense}</span>
      </LicenseWrapper>
      <NFTMenuContainer>
        {data?.bid?.isOnBid &&
          timeBeforeEnd &&
          (nftOwner as NFT_OWNER) === NFT_OWNER.AUTHOR && (
            <Timer timeBeforeEnd={timeBeforeEnd} />
          )}
        <TabButtonsGroup
          screenSize={screenSize}
          setIsOwnersModalOpen={setIsOwnersModalOpen}
        />
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
      {isOwnersModalOpen && (
        <Modal
          title="Owners"
          confirmBtnName="Ok"
          open={isOwnersModalOpen}
          onClose={handleIsOwnersModalClose}
          onConfirm={handleIsOwnersModalClose}
        >
          <div>
            {ownersMock.map(({ id, role, firstName, secondName, imageUrl }) => (
              <OwnerContainer key={id}>
                <OwnerAvatar imageUrl={imageUrl} />
                {role === OwnerRoles.OWNER && <StyledOwnerBox />}
                <div>
                  <OwnerRole>{role}</OwnerRole>
                  <OwnerFullName>{`${secondName} ${firstName}`}</OwnerFullName>
                </div>
              </OwnerContainer>
            ))}
          </div>
        </Modal>
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
  padding-bottom: 16px;
  margin: 0;

  @media (${devices.tablet}) {
    width: auto;
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
  margin-bottom: 32px;
`;

const License = styled.span`
  color: #777e90;
`;

const OwnerContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e6e8ec;
  padding: 16px 0;
  width: 384px;
  position: relative;
`;

const OwnerAvatar = styled.div<{ imageUrl: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
`;

const OwnerRole = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
  text-transform: capitalize;
`;

const OwnerFullName = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #23262f;
`;

const StyledOwnerBox = styled(OwnerBox)`
  position: absolute;
  left: 28px;
  bottom: 11px;
`;

export default memo(NFTDescription);
