import styled from 'styled-components';
import BidPrice from './BidPrice';
import CandlesticksSVG from '../../../assets/svg/candlesticks.svg';
import { Button, ButtonSize, ButtonType, Counter } from '../../ui-kit';
import LikeButton from '../../ui-kit/LikeButton';
import { usePlaceBid } from '../../../common/hooks/usePlaceBid';
import { useState } from 'react';
import StepModal from './StepModal';
import { PLACE_BID_STEPS } from '../../ModalsTest/constants';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { screenSizes } from '../../../common/constants';
import {
  likeNft,
  unlikeNft,
} from '../../../redux/slicers/nftsSlicer/nftSlicer';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { IBid, INFT } from '../../../swagger';
import { TAuthState } from '../../../redux/types';
import { useRouter } from 'next/router';
import { getImageUrl } from '../../../common/helpers/getImageUrl.helper';
import { ConnectWalletModal } from '../../common/components/ConnectWaleltModal';
import { signin } from '../../../redux/slicers/authSlicer';

type Props = {
  item: IBid;
};

const BidItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const nftItem = item.nft;
  const userLike = nftItem?.likes?.find((userId) => userId === user?.id);

  const [openConnectWallet, setOpenConnectWallet] = useState(false);

  const { screenSize } = useAdaptiveSlider();
  const { openPlaceBid, handlePlaceBidOpen, handlePlaceBidClose } =
    usePlaceBid(setOpenConnectWallet);

  const handleSignIn = async () => {
    const result = await dispatch(signin());

    if (!!result) setOpenConnectWallet(false);
  };

  const handleLikeNft = async (handleLike: () => void) => {
    if (!!user) {
      const result = await dispatch(likeNft(nftItem._id));

      if (result) handleLike();
    }
  };

  const handleUnlikeNft = async (handleUnlike: () => void) => {
    if (!!user) {
      const result = await dispatch(unlikeNft(nftItem._id));

      if (result) handleUnlike();
    }
  };

  const handleBidClick = () => {
    if (item) {
      router.push(`/bids/${item._id}`);
    } else {
      router.push(`/nfts/${nftItem._id}`);
    }
  };

  return (
    <BidWrapper>
      <BidImage
        background={getImageUrl(item.nft.file)}
        onClick={handleBidClick}
      >
        <LikeButtonWrapper>
          <LikeButton
            isNftLiked={!!userLike}
            onLikeNft={handleLikeNft}
            onUnlikeNft={handleUnlikeNft}
          />
        </LikeButtonWrapper>
        <StyledButton
          style={{ color: '#fff', borderRadius: 10 }}
          size={ButtonSize.Large}
          btnType={ButtonType.Secondary}
          onClick={handlePlaceBidOpen as any}
        >
          Place a bid
          {/* <ArrowRightSVG style={{ marginLeft: '15px' }} /> */}
        </StyledButton>
      </BidImage>
      <BidBody>
        <BidInfo>
          <BidInfoRow>
            <BidName>{nftItem?.name}</BidName>
            {/* <BidPrice value={avoAmonut} /> */}
            <BidPrice value={nftItem.salePrice} />
          </BidInfoRow>
          <BidInfoRow>
            <BidFeature>
              <BidFeatureCaption>Total:</BidFeatureCaption>
              <BidFeatureValue>{nftItem?.total}</BidFeatureValue>
            </BidFeature>
            <BidFeature>
              <BidFeatureCaption>Available:</BidFeatureCaption>
              <BidFeatureValue>{nftItem?.available}</BidFeatureValue>
            </BidFeature>
          </BidInfoRow>
        </BidInfo>
        <BidFooter>
          <HighestBid>
            <CandlesticksSVG color="#fff" />
            <HighestBidTitle>Highest bid</HighestBidTitle>
            <HighestBidValue>{1000} AVO</HighestBidValue>
          </HighestBid>
          <HotBid>Hot bit 🔥</HotBid>
        </BidFooter>
      </BidBody>
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
      <ConnectWalletModal
        open={openConnectWallet}
        setOpen={setOpenConnectWallet}
        onSignIn={handleSignIn}
      />
    </BidWrapper>
  );
};

const BidWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  border: 2px solid #e6e8ec;
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  border-radius: 20px;
  overflow: hidden;
  width: 256px;
  display: inline-block;
  cursor: pointer;

  &:nth-of-type(n) {
    margin-right: 32px;
  }
  &:last-of-type {
    margin-right: 0;
  }

  &:hover > div > div {
    opacity: 1;
  }

  &:hover > div > button {
    opacity: 1;
  }
`;

const BidImage = styled.div<{ background: string }>`
  height: 236px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 16px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
`;

const LikeButtonWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  opacity: 0;
  transition: all 0.3s;
`;

const StyledButton = styled(Button)`
  opacity: 0;
  transition: all 0.3s;
`;

const BidBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 12px 32px;
`;

const BidInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  border-bottom: 1px solid #e6e8ec;
`;

const BidInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BidName = styled.div`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

const BidFeature = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Montserrat';
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
`;

const BidFeatureCaption = styled.div`
  color: rgba(255, 255, 255, 0.7);
`;

const BidFeatureValue = styled.div`
  color: #ffffff;
`;

const BidFooter = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HighestBid = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  gap: 4px;
`;

const HighestBidTitle = styled.div`
  color: rgba(255, 255, 255, 0.7);
`;

const HighestBidValue = styled.div`
  color: #ffffff;
  font-weight: 600;
`;

const HotBid = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

const PlaceBidInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 32px;
  font-family: 'Montserrat';
`;

export default BidItem;
