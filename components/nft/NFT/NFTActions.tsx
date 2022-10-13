import ButtonsGroup from './ButtonsGroup';
import { NFTButtons } from '../common/constants';
import styled from 'styled-components';
import { memo } from 'react';

type Props = {
  price: string;
  convertedPrice: string;
};

const NFTActions: React.FC<Props> = ({ price, convertedPrice }) => {
  return (
    <Container>
      <PriceWrapper>
        <PriceInCrypto>{price} AVO</PriceInCrypto>
        <ConvertedPrice>${convertedPrice}</ConvertedPrice>
      </PriceWrapper>
      <ButtonsGroup buttonsParameters={NFTButtons} />
      <ServiceFeeWrapper>
        <FeeTextWrapper>
          <span>Service fee</span>
          <span>1.5%</span>
        </FeeTextWrapper>
      </ServiceFeeWrapper>
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
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 516px;
  height: 32px;
`;

const PriceInCrypto = styled.p`
  width: 105px;
  height: 32px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #23262f;
`;

const ConvertedPrice = styled.p`
  width: 66px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
`;

const ServiceFeeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 516px;
  height: 24px;
`;

const FeeTextWrapper = styled.p`
  font-family: 'Poppins';
  font-style: normal;
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

export default memo(NFTActions);
