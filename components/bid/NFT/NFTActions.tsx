import { memo, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  Button,
  ButtonSize,
  ButtonType,
  Counter,
  DatePicker,
  Divider,
  Input,
  Modal,
  Switch,
} from '../../ui-kit';
import { devices, screenSizes } from '../../../common/constants';
import { StepModal } from '../../common/components';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { NFT_OWNER } from '../../../common/enums/nftOwner.enum';
import CoinSVG from '../../../assets/svg/coin.svg';
import { useAppSelector } from '../../../redux/hooks';
import { TAuthState } from '../../../redux/types';
import WalletSVG from '../../../assets/svg/wallet.svg';
import CheckCircle from '../../../assets/svg/check-circle.svg';
import { getAuthorNFTButtons, getUserNFTButtons } from '../common/helpers';

import { ConnectWalletContext } from './context';
import {
  ACCEPT_BID_STEPS,
  PLACE_BID_STEPS,
  PURCHASE_STEPS,
  PUT_ON_SALE_STEPS,
} from './constants';
import ButtonsGroup from './ButtonsGroup';
import { usePlaceBid } from '../../../common/hooks/usePlaceBid';
import { TBidsState } from '../../../redux/slicers/bidsSlicer/types';
import { getImageUrl } from '../../../common/helpers/getImageUrl.helper';
import { SuccessModalContent } from '../../ui-kit/SuccessModalContent';

type Props = {
  price: string;
  convertedPrice: string;
  nftOwner: NFT_OWNER;
  isNFTOnSale: boolean;
};

const NFTActions: React.FC<Props> = ({
  nftOwner,
  price,
  convertedPrice,
  isNFTOnSale,
}) => {
  const { user } = useAppSelector<TAuthState>((state) => state.auth);
  const { bid } = useAppSelector<TBidsState>((state) => state.bids);

  const [openPurchase, setOpenPurchase] = useState(false);

  const { screenSize } = useAdaptiveSlider();

  const { openConnectWallet, setOpenConnectWallet, handleSignIn } =
    useContext(ConnectWalletContext);

  const purchaseData = {
    totalEmission: 8,
    availableEmission: 0,
    totalPayable: 0.007,
    criptoCurrency: 'AVO',
  };

  const handlePurchaseOpen = () => {
    if (!!user) {
      setOpenPurchase(true);
    } else {
      setOpenConnectWallet(true);
    }
  };
  const handlePurchaseClose = () => {
    setOpenPurchase(false);
  };

  useEffect(() => {
    if (user && openConnectWallet) {
      setOpenConnectWallet(false);
    }
  }, [openConnectWallet, setOpenConnectWallet, user]);
  ///////////////////////////////////////////////////
  const { openPlaceBid, handlePlaceBidOpen, handlePlaceBidClose } =
    usePlaceBid(setOpenConnectWallet);

  /////////////////////////////////////////////////////////////////////////
  const [openPutOnSale, setOpenPutOnSale] = useState(false);
  const [hasInstantSalePrice, setHasInstantSalePrice] = useState(false);
  const [putOnSaleData, setPutOnSaleData] = useState<{
    price: number;
    totalBidAmount: number;
  }>({
    price: 0,
    totalBidAmount: 0,
  });

  const handlePutOnSaleOpen = () => {
    setOpenPutOnSale(true);
  };
  const handlePutOnSaleClose = () => {
    setHasInstantSalePrice(false);
    setOpenPutOnSale(false);
    setPutOnSaleData({
      price: 0,
      totalBidAmount: 0,
    });
  };
  const handleServiceFeeChange = (value: string | number) => {
    if (typeof value === 'number')
      setPutOnSaleData({
        price: value,
        totalBidAmount: +(value * 0.015).toFixed(2),
      });
  };
  /////////////////////////////////////////////////////////////////
  const [openAcceptBid, setOpenAcceptBid] = useState(false);

  const acceptBidData = {
    serviceFee: 0,
    totalBidAmount: 1.46,
    criptoCurrency: 'AVO',
  };

  const handleAcceptBidOpen = () => {
    setOpenAcceptBid(true);
  };
  const handleAcceptBidClose = () => {
    setOpenAcceptBid(false);
  };

  /////////////////////////////////////////////////////////////////

  const getButtonParameters = () =>
    nftOwner === NFT_OWNER.AUTHOR
      ? getAuthorNFTButtons(handlePurchaseOpen, handlePlaceBidOpen as any)
      : getUserNFTButtons(
          isNFTOnSale,
          handlePutOnSaleOpen,
          handleAcceptBidOpen,
        );

  return (
    <Container>
      <PriceWrapper>
        <PriceInCrypto hasPrice={!!price}>
          {!!price ? `AVO ${price}` : 'Not on sale'}
        </PriceInCrypto>
        {!!price && !!convertedPrice && (
          <ConvertedPrice>${convertedPrice}</ConvertedPrice>
        )}
      </PriceWrapper>
      <ButtonsGroup buttonsParameters={getButtonParameters()} />
      <ServiceFeeWrapper>
        <FeeTextWrapper>
          <span>Service fee</span>
          <span>0.0%</span>
        </FeeTextWrapper>
      </ServiceFeeWrapper>
      <StepModal
        steps={PURCHASE_STEPS}
        isOpen={openPurchase}
        childrenStageTitle="Checkout"
        confirmBtnName="Purchase!"
        cancelBtnName="Cancel"
        onClose={handlePurchaseClose}
        successWindow={<SuccessModalContent />}
      >
        <>
          <PurchaseInfo>You are about to purchase AvoNFT</PurchaseInfo>
          <Counter
            label="Amount"
            style={{
              width: screenSize >= screenSizes.tablet ? '384px' : '260px',
              marginBottom: 32,
            }}
          />
          <PurchaseAmountWrapper>
            <PurchaseAmount>
              <PurchaseAmountLabel>Total emission</PurchaseAmountLabel>
              <PurchaseAmountValue>
                {purchaseData.totalEmission}
              </PurchaseAmountValue>
            </PurchaseAmount>
            <PurchaseAmount>
              <PurchaseAmountLabel>Available emission</PurchaseAmountLabel>
              <PurchaseAmountValue>
                {purchaseData.availableEmission}
              </PurchaseAmountValue>
            </PurchaseAmount>
            <Divider style={{ margin: 0 }} />
            <PurchaseAmount>
              <PurchaseAmountLabel>Total payable</PurchaseAmountLabel>
              <PurchaseAmountValue>{`${purchaseData.totalPayable} ${purchaseData.criptoCurrency}`}</PurchaseAmountValue>
            </PurchaseAmount>
          </PurchaseAmountWrapper>
        </>
      </StepModal>
      <StepModal
        steps={PLACE_BID_STEPS}
        isOpen={openPlaceBid}
        childrenStageTitle="Place a bid"
        startStepBtnName="Start now"
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
      <StepModal
        steps={PUT_ON_SALE_STEPS}
        isOpen={openPutOnSale}
        childrenStageTitle="Put on sale"
        confirmBtnName="Continue"
        cancelBtnName="Cancel"
        onClose={handlePutOnSaleClose}
      >
        <>
          <PriceLabel>Timer</PriceLabel>
          <DatePicker />
          <PutOnSaleWrapper screenSize={screenSize}>
            <PutOnSaleCircle>
              <CoinSVG color="#FCFCFD" />
            </PutOnSaleCircle>
            <PutOnSaleOptionWrapper>
              <PutOnSaleOption>
                <PutOnSaleOptionLabel>Instant sale price</PutOnSaleOptionLabel>
                <PutOnSaleOptionInfo>
                  Enter the price for which the item will be instanly sold
                </PutOnSaleOptionInfo>
              </PutOnSaleOption>
              <Switch
                theme="blue"
                value={hasInstantSalePrice}
                onChange={() => setHasInstantSalePrice((prev) => !prev)}
              />
            </PutOnSaleOptionWrapper>
          </PutOnSaleWrapper>
          {hasInstantSalePrice && (
            <PutOnSaleAmountWrapper>
              <PriceLabel>Start price</PriceLabel>
              <Input
                value={putOnSaleData.price}
                type="number"
                onChange={handleServiceFeeChange}
                placeholder="Enter your price"
              />
              <Divider style={{ margin: '24px 0 0' }} />
              <PutOnSaleAmount>
                <PutOnSaleAmountLabel>Service fee</PutOnSaleAmountLabel>
                <PutOnSaleAmountValue>{`0.0%`}</PutOnSaleAmountValue>
              </PutOnSaleAmount>
              <PutOnSaleAmount>
                <PutOnSaleAmountLabel>Total bid amount</PutOnSaleAmountLabel>
                <PutOnSaleAmountValue>{`${putOnSaleData.totalBidAmount} AVO`}</PutOnSaleAmountValue>
              </PutOnSaleAmount>
            </PutOnSaleAmountWrapper>
          )}
        </>
      </StepModal>
      <StepModal
        steps={ACCEPT_BID_STEPS}
        isOpen={openAcceptBid}
        childrenStageTitle="Accept Bid"
        confirmBtnName="Accept bid"
        cancelBtnName="Cancel"
        onClose={handleAcceptBidClose}
      >
        <>
          <AcceptBidAmoutWrapper screenSize={screenSize}>
            <AvoCircleWrapper>
              <AvoCircle avatarUrl={getImageUrl(bid?.creator.avatar || '')} />
              <AvoCircleText>
                You are about to accept a bid for <br />{' '}
                <BidsCreatorName>{bid?.creator.username}</BidsCreatorName>
              </AvoCircleText>
            </AvoCircleWrapper>
            <AvoEditInfo>{`${acceptBidData.totalBidAmount} ${acceptBidData.criptoCurrency} for 1 edition`}</AvoEditInfo>
            <Divider style={{ margin: 0 }} />
            <AcceptBidAmount>
              <AcceptBidAmountLabel>Service fee</AcceptBidAmountLabel>
              <AcceptBidAmountValue>
                {`${acceptBidData.serviceFee} ${acceptBidData.criptoCurrency}`}
              </AcceptBidAmountValue>
            </AcceptBidAmount>
            <AcceptBidAmount>
              <AcceptBidAmountLabel>Total bid amount</AcceptBidAmountLabel>
              <AcceptBidAmountValue>{`${acceptBidData.totalBidAmount} ${acceptBidData.criptoCurrency}`}</AcceptBidAmountValue>
            </AcceptBidAmount>
          </AcceptBidAmoutWrapper>
        </>
      </StepModal>
      <Modal
        title=""
        hasFooter={false}
        open={openConnectWallet}
        onClose={() => setOpenConnectWallet(false)}
      >
        <ConnectWalletContainer>
          <WalletIconCircle>
            <StyledWalletSVG />
          </WalletIconCircle>
          <ConnectWalletInfo>
            You need to connect your wallet first to sign messages and send
            transaction to Avocado network
          </ConnectWalletInfo>
          <Button
            style={{ backgroundColor: '#3772FF', borderColor: '#3772FF' }}
            onClick={handleSignIn}
            btnType={ButtonType.Secondary}
            size={ButtonSize.Large}
          >
            Connect wallet
          </Button>
        </ConnectWalletContainer>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  width: 564px;
  height: 200px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  border: 1px solid #ffffff;
  border-radius: 16px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 516px;
  height: 32px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const PriceInCrypto = styled.p<{ hasPrice: boolean }>`
  height: 32px;
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  width: ${({ hasPrice }) => (hasPrice ? 'auto' : '100%')};
  text-align: ${({ hasPrice }) => (hasPrice ? 'left' : 'center')};
`;

const ConvertedPrice = styled.p`
  height: 24px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
`;

const ServiceFeeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 516px;
  height: 24px;
  padding-right: 12px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const FeeTextWrapper = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  & :first-child {
    width: 77px;
    height: 24px;
    color: rgba(255, 255, 255, 0.7);
    margin-right: 6px;
  }
  & :last-child {
    width: 29px;
    height: 24px;
    color: #ffffff;
    margin-left: 6px;
  }
`;

const PurchaseInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 32px;
  font-family: 'Montserrat';
`;

const PurchaseAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PurchaseAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Montserrat';
`;

const PurchaseAmountLabel = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

const PurchaseAmountValue = styled.span`
  color: #ffffff;
  font-weight: 600;
`;

////////////////////////////////////////////////////////////////////////////////////

const PlaceBidInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 32px;
  font-family: 'Montserrat';
`;
////////////////////////////////////////////////////////////////////////////////////

const PutOnSaleWrapper = styled.div<{ screenSize: number }>`
  display: flex;
  gap: 16px;
  width: ${({ screenSize }) =>
    screenSize >= screenSizes.tablet ? '384px' : '260px'};
  margin-bottom: 32px;
  margin-top: 32px;
`;

const PutOnSaleOptionWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const PutOnSaleCircle = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(48.74deg, #cf47ff -3.69%, #fba04c 100.76%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PutOnSaleOption = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 264px;
`;

const PutOnSaleOptionLabel = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Montserrat';
`;

const PutOnSaleOptionInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const PutOnSaleAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PriceLabel = styled.label`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
`;

const PutOnSaleAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Montserrat';
`;

const PutOnSaleAmountLabel = styled.span`
  color: rgba(255, 255, 255, 0.7);
`;

const PutOnSaleAmountValue = styled.span`
  color: #ffffff;
  font-weight: 600;
`;
////////////////////////////////////////////////////////////////////////////////////
const AvoEditInfo = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  font-family: 'Nasalization';
`;

const AcceptBidAmoutWrapper = styled.div<{ screenSize: number }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: ${({ screenSize }) =>
    screenSize >= screenSizes.tablet ? '384px' : '260px'};
`;

const AcceptBidAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Montserrat';
`;

const AcceptBidAmountLabel = styled.span`
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
`;

const AcceptBidAmountValue = styled.span`
  color: #ffffff;
  font-weight: 600;
`;

const AvoCircleWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const AvoCircle = styled.div<{ avatarUrl: string }>`
  width: 48px;
  height: 48px;
  background: ${({ avatarUrl }) => `url(${avatarUrl})`};
  background-size: cover;
  background-position: center;
  background-color: '#cccccc';
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvoCircleText = styled.span`
  font-family: 'Montserrat';
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

const BidsCreatorName = styled.span`
  font-family: 'Nasalization';
`;
////////////////////////////////////////////////////////////////////////////////////

const ConnectWalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
`;

const WalletIconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #45b36b;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConnectWalletInfo = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
  margin-bottom: 28px;
`;

const StyledWalletSVG = styled(WalletSVG)`
  transform: scale(1.4);
`;

export default memo(NFTActions);
