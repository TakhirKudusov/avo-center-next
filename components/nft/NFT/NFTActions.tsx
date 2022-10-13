import styled from 'styled-components';
import { memo } from 'react';
import { MenuButtonType } from '../common/types';

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
      <ButtonsWrapper>
        <Button type={'primary'}>
          <p>Create NFT</p>
        </Button>
        <Button>
          <p>Place a bid</p>
        </Button>
      </ButtonsWrapper>
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

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 516px;
  height: 48px;
`;

const Button = styled.button<any>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 12px;
  width: 254px;
  height: 48px;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => {
    switch (props.type) {
      case 'primary':
        return '#333333';
      default:
        return '#FAFAFBFF';
    }
  }};
  border: ${(props) => {
    switch (props.type) {
      case 'primary':
        return 'none';
      default:
        return '2px solid #E6E8EC';
    }
  }};
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  p {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: ${(props) => {
      switch (props.type) {
        case 'primary':
          return '#FCFCFD';
        default:
          return '#23262F';
      }
    }};
  }
  &:hover {
    background-color: ${(props) => {
      switch (props.type) {
        case 'primary':
          return '#515261';
        default:
          return '#E6E8EC';
      }
    }};
  }
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
