import styled from 'styled-components';
import RoundSquareSVG from '../../../assets/svg/round-square.svg';
import Button from '../../ui-kit/Button/Button';
import Auction from './Auction';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';
import Link from 'next/link';
import { Counter, useTimer } from '../../ui-kit';
import { devices, screenSizes } from '../../../common/constants';
import { Paths } from '../../../common/enums/paths';
import { IBid } from '../../../swagger';
import { StepModal } from '../../common/components';
import { PLACE_BID_STEPS } from '../../ModalsTest/constants';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { usePlaceBid } from '../../../common/hooks/usePlaceBid';
import { useContext } from 'react';
import { ConnectWalletContext } from '../../nft/NFT/context';
import { getImageUrl } from '../../../common/helpers/getImageUrl.helper';

//TODO: remove index
type Props = {
  bid: IBid;
};

const CreatorNetwork = ({ bid }: Props) => {
  const { timeBeforeEnd } = useTimer(bid);

  const { screenSize } = useAdaptiveSlider();

  const { setOpenConnectWallet } = useContext(ConnectWalletContext);

  const { openPlaceBid, handlePlaceBidOpen, handlePlaceBidClose } =
    usePlaceBid(setOpenConnectWallet);

  return (
    <CreatorNetworkWrapper>
      <Player background={getImageUrl(bid.nft.file)} />
      <InfoBar>
        <Title>{bid.nft.name}</Title>
        <InfoItems>
          <InfoItem>
            <InfoItemImage background={getImageUrl(bid.creator.avatar)} />
            <InfoItemBody>
              <InfoItemLabel>Creator</InfoItemLabel>
              <InfoItemValue>{bid.creator.username as string}</InfoItemValue>
            </InfoItemBody>
          </InfoItem>
          <InfoItem>
            <InfoItemImage background="">
              <RoundSquareSVG />
            </InfoItemImage>
            <InfoItemBody>
              <InfoItemLabel>Instant price</InfoItemLabel>
              <InfoItemValue>{bid.nft.total} AVO</InfoItemValue>
            </InfoItemBody>
          </InfoItem>
        </InfoItems>
        <Auction bid={bid} timeBeforeEnd={timeBeforeEnd} />
        <Button
          btnType={ButtonType.Secondary}
          size={ButtonSize.Large}
          fullSize={true}
          onClick={handlePlaceBidOpen as any}
        >
          Place a bid
        </Button>

        <Link href={`${Paths.EDIT_NFT}/${bid._id}`}>
          <Button
            btnType={ButtonType.Primary}
            size={ButtonSize.Large}
            style={{ marginTop: '8px' }}
            fullSize={true}
          >
            View item
          </Button>
        </Link>
      </InfoBar>
      <StepModal
        steps={PLACE_BID_STEPS}
        isOpen={openPlaceBid}
        childrenStageTitle="Place a bid"
        startStepBtnName="Approve now"
        confirmBtnName="Place a bid"
        onClose={handlePlaceBidClose}
      >
        <>
          <PlaceBidInfo>You are about to purchase AvoNFT</PlaceBidInfo>
          <Counter
            label="BID PRICE"
            style={{
              width: screenSize >= screenSizes.tablet ? '384px' : '260px',
              marginTop: '10px',
            }}
          />
        </>
      </StepModal>
    </CreatorNetworkWrapper>
  );
};

const CreatorNetworkWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 90px;
  padding: 0 5px;

  @media (${devices.tablet}) {
    gap: 32px;
  }

  @media (${devices.mobile}) {
    flex-direction: column;
  }
`;

const Player = styled.div<{ background: string }>`
  background: #9757d7;
  border-radius: 16px;
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
  background-size: cover;
  min-width: 640px;
  height: 800px;

  @media (${devices.tablet}) {
    min-width: 520px;
  }

  @media (${devices.mobile}) {
    height: 478px;
    background-size: contain;
    min-width: auto;
  }
`;

const InfoBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
  letter-spacing: -1px;
  margin: 0;
`;

const InfoItems = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 65px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoItemImage = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #45b36b;
  background-position: center;
  background-size: cover;
  background-image: ${({ background }) => `url(${background})`};
`;

const InfoItemBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoItemLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

const InfoItemValue = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #23262f;
`;

const PlaceBidInfo = styled.div`
  color: #23262f;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
  font-family: 'Poppins';
`;

const Arrows = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: 50%;
  color: #777e91;
`;

export default CreatorNetwork;
