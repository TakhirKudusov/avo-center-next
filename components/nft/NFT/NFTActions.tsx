import ButtonsGroup from './ButtonsGroup';
import { getAuthorNFTButtons, getUserNFTButtons } from '../common/helpers';
import styled from 'styled-components';
import { memo, useState } from 'react';
import { devices, screenSizes } from '../../../common/constants';
import { StepModal } from '../../common/components';
import {
  ACCEPT_BID_STEPS,
  PLACE_BID_STEPS,
  PURCHASE_STEPS,
  PUT_ON_SALE_STEPS,
} from './constants';
import { Counter, Divider, Input, Switch } from '../../ui-kit';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { NFT_OWNER } from '../../../common/enums/nftOwner.enum';
import CoinSVG from '../../../assets/svg/coin.svg';

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
  const [openPurchase, setOpenPurchase] = useState(false);

  const { screenSize } = useAdaptiveSlider();

  const purchaseData = {
    totalEmission: 8,
    availableEmission: 0,
    totalPayable: 0.007,
    criptoCurrency: 'AVO',
  };

  const handlePurchaseOpen = () => {
    setOpenPurchase(true);
  };
  const handlePurchaseClose = () => {
    setOpenPurchase(false);
  };
  ///////////////////////////////////////////////////
  const [openPlaceBid, setopenPlaceBid] = useState(false);

  const handlePlaceBidOpen = () => {
    setopenPlaceBid(true);
  };
  const handlePlaceBidClose = () => {
    setopenPlaceBid(false);
  };

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
      ? getAuthorNFTButtons(handlePurchaseOpen, handlePlaceBidOpen)
      : getUserNFTButtons(
          isNFTOnSale,
          handlePutOnSaleOpen,
          handleAcceptBidOpen,
        );

  return (
    <Container>
      <PriceWrapper>
        <PriceInCrypto>{price} AVO</PriceInCrypto>
        <ConvertedPrice>${convertedPrice}</ConvertedPrice>
      </PriceWrapper>
      <ButtonsGroup buttonsParameters={getButtonParameters()} />
      <ServiceFeeWrapper>
        <FeeTextWrapper>
          <span>Service fee</span>
          <span>1.5%</span>
        </FeeTextWrapper>
      </ServiceFeeWrapper>
      <StepModal
        steps={PURCHASE_STEPS}
        isOpen={openPurchase}
        childrenStageTitle="Checkout"
        confirmBtnName="I understand, continue"
        cancelBtnName="Cancel"
        onClose={handlePurchaseClose}
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
      <StepModal
        steps={PUT_ON_SALE_STEPS}
        isOpen={openPutOnSale}
        childrenStageTitle="Put on sale"
        confirmBtnName="Continue"
        cancelBtnName="Cancel"
        onClose={handlePutOnSaleClose}
      >
        <>
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
              <Input
                value={putOnSaleData.price}
                type="number"
                onChange={handleServiceFeeChange}
                placeholder="Enter your price"
              />
              <PutOnSaleAmount>
                <PutOnSaleAmountLabel>Service fee</PutOnSaleAmountLabel>
                <PutOnSaleAmountValue>{`1.5%`}</PutOnSaleAmountValue>
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
        childrenStageTitle=" "
        confirmBtnName="Accept bid"
        cancelBtnName="Cancel"
        onClose={handleAcceptBidClose}
      >
        <>
          <AcceptBidAmoutWrapper screenSize={screenSize}>
            <AvoCircleWrapper>
              <AvoCircle />
              <AvoCircleText>
                You are about to accept a bid for <br /> C O I N Z from UI8
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
  background: #fcfcfd;
  border: 1px solid #e6e8ec;
  box-shadow: 0 64px 64px -48px rgba(31, 47, 70, 0.12);
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

const PriceInCrypto = styled.p`
  width: 105px;
  height: 32px;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #23262f;
`;

const ConvertedPrice = styled.p`
  width: 66px;
  height: 24px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
`;

const ServiceFeeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 516px;
  height: 24px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const FeeTextWrapper = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  & :first-child {
    width: 77px;
    height: 24px;
    color: #777e91;
    margin-right: 6px;
  }
  & :last-child {
    width: 29px;
    height: 24px;
    color: #23262f;
    margin-left: 6px;
  }
`;

const PurchaseInfo = styled.div`
  color: #23262f;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
  font-family: 'Poppins';
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
  line-height: 24px;
  font-family: 'Poppins';
`;

const PurchaseAmountLabel = styled.span`
  color: #777e91;
`;

const PurchaseAmountValue = styled.span`
  color: #23262f;
  font-weight: 500;
`;

////////////////////////////////////////////////////////////////////////////////////

const PlaceBidInfo = styled.div`
  color: #23262f;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
  font-family: 'Poppins';
`;
////////////////////////////////////////////////////////////////////////////////////

const PutOnSaleWrapper = styled.div<{ screenSize: number }>`
  display: flex;
  gap: 16px;
  width: ${({ screenSize }) =>
    screenSize >= screenSizes.tablet ? '384px' : '260px'};
  margin-bottom: 32px;
`;

const PutOnSaleOptionWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const PutOnSaleCircle = styled.div`
  width: 48px;
  height: 48px;
  background: #9757d7;
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
  color: #23262f;
  font-size: 16px;
  font-weight: 500;
`;

const PutOnSaleOptionInfo = styled.div`
  color: #777e91;
  font-size: 14px;
`;

const PutOnSaleAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PutOnSaleAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Poppins';
`;

const PutOnSaleAmountLabel = styled.span`
  color: #777e91;
`;

const PutOnSaleAmountValue = styled.span`
  color: #23262f;
  font-weight: 500;
`;
////////////////////////////////////////////////////////////////////////////////////
const AvoEditInfo = styled.div`
  color: #23262f;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  font-family: 'Poppins';
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
  line-height: 24px;
  font-family: 'Poppins';
`;

const AcceptBidAmountLabel = styled.span`
  color: #777e91;
`;

const AcceptBidAmountValue = styled.span`
  color: #23262f;
  font-weight: 500;
`;

const AvoCircleWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const AvoCircle = styled.div`
  width: 48px;
  height: 48px;
  background: #45b36b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvoCircleText = styled.span`
  font-family: 'Poppins';
  font-size: 16px;
  color: #23262f;
`;
////////////////////////////////////////////////////////////////////////////////////

export default memo(NFTActions);
