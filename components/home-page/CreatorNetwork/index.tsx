import styled from 'styled-components';
import RoundSquareSVG from '../../../assets/svg/round-square.svg';
import Button from '../../ui-kit/Button/Button';
import Auction from './Auction';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';
import Link from 'next/link';
import { useTimer, Input, Modal } from '../../ui-kit';
import { devices } from '../../../common/constants';
import { Paths } from '../../../common/enums/paths';
import WalletSVG from '../../../assets/svg/wallet.svg';
import { IBid } from '../../../swagger';
import { StepModal } from '../../common/components';
import { PLACE_BID_STEPS } from '../../ModalsTest/constants';
import { usePlaceBid } from '../../../common/hooks/usePlaceBid';
import { getImageUrl } from '../../../common/helpers/getImageUrl.helper';
import { useRouter } from 'next/router';
import { signin } from '../../../redux/slicers/authSlicer';
import { useAppDispatch } from '../../../redux/hooks';
import { useState } from 'react';
import { ConnectWalletModal } from '../../common/components/ConnectWaleltModal';

//TODO: remove index
type Props = {
  bid: IBid;
};

const CreatorNetwork = ({ bid }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [bidPrice, setBidPrice] = useState(0);
  const [openConnectWallet, setOpenConnectWallet] = useState(false);

  const { timeBeforeEnd } = useTimer(bid);

  // const { screenSize } = useAdaptiveSlider();

  const { openPlaceBid, handlePlaceBidOpen, handlePlaceBidClose } =
    usePlaceBid(setOpenConnectWallet);

  const handleSignIn = async () => {
    const result = await dispatch(signin());

    if (!!result) setOpenConnectWallet(false);
  };

  const handleCreatorClick = () => {
    router.push(`profile/${bid.creator._id}`);
  };

  return (
    <CreatorNetworkWrapper>
      <Player background={getImageUrl(bid.nft.file)} />
      <InfoBar>
        <Title>{bid.nft.name}</Title>
        <InfoItems>
          <StyledInfoItem onClick={handleCreatorClick}>
            <InfoItemImage background={getImageUrl(bid.creator.avatar)} />
            <InfoItemBody>
              <InfoItemLabel>Creator</InfoItemLabel>
              <InfoItemValue>{bid.creator.username as string}</InfoItemValue>
            </InfoItemBody>
          </StyledInfoItem>
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
          <PlaceBidInfo>You are about to place a bid to AvoNFT</PlaceBidInfo>
          <Input
            value={bidPrice}
            onChange={(value) => setBidPrice(value as number)}
            type="number"
            placeholder="0.00 AVO"
          />
        </>
      </StepModal>
      <ConnectWalletModal
        open={openConnectWallet}
        setOpen={setOpenConnectWallet}
        onSignIn={handleSignIn}
      />
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
  font-family: 'Nasalization';
  font-weight: bold;
  font-size: 56px;
  line-height: 67px;
  letter-spacing: -1px;
  margin: 0;
  color: #fff;
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

const StyledInfoItem = styled(InfoItem)`
  cursor: pointer;
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
  align-items: flex-start;
`;

const InfoItemLabel = styled.div`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

const InfoItemValue = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

const PlaceBidInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 32px;
  font-family: 'Montserrat';
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

const ConnectWalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
`;

const ConnectWalletInfo = styled.div`
  font-family: 'Montserrat';
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 28px;
`;

export default CreatorNetwork;
