import { ContentContainer } from '../../common';
import styled from 'styled-components';
import { memo } from 'react';
import { NFT } from '../common/types';
import { BidPriceWrapper } from '../../common/components/BidPrice';
import { devices } from '../../../common/constants';
import { INFT } from '../../../swagger';

type Props = {
  data: Omit<NFT, 'image' | 'tags'>;
  nft: INFT | null;
};

const SecondaryHeaderContainer: React.FC<Props> = ({ nft, data }) => {
  return (
    <HeaderContainer>
      <Header>{nft?.name}</Header>
      <ParametersContainer>
        <NFTPrice>
          {nft?.salePrice ? `${nft?.salePrice} AVO` : 'Not on sale'}
        </NFTPrice>
        <ParameterParagraph>
          Total: <span>{nft?.total}</span>
        </ParameterParagraph>
        <ParameterParagraph>
          Available: <span>{nft?.available}</span>
        </ParameterParagraph>
      </ParametersContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 24px;
`;

const Header = styled.h1`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin: 0;

  @media (${devices.tablet}) {
    height: auto;
  }

  @media (${devices.mobile}) {
    height: auto;
  }
`;

const NFTPrice = styled(BidPriceWrapper)`
  padding: 8px 8px 6px;
  gap: 10px;
  font-size: 16px;
  line-height: 16px;
  color: #f7ef7c;
  border: 2px solid #f7ef7c;
`;

const ParametersContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 16px;
`;

const ParameterParagraph = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: rgba(255, 255, 255, 0.7);

  span {
    color: #ffffff;
  }
`;

export default memo(SecondaryHeaderContainer);
