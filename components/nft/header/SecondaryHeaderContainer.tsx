import { ContentContainer } from '../../common';
import styled from 'styled-components';
import { memo } from 'react';
import { NFT } from '../common/types';
import { BidPriceWrapper } from '../../common/components/BidPrice';
import { devices } from '../../../common/constants';
import { IBid } from '../../../swagger';

type Props = {
  data: Omit<NFT, 'image' | 'tags'>;
  bid: IBid | null;
};

const SecondaryHeaderContainer: React.FC<Props> = ({ bid, data }) => {
  return (
    <HeaderContainer>
      <Header>{bid?.nft.name}</Header>
      <ParametersContainer>
        <NFTPrice>
          {bid?.nft.salePrice ? `${bid?.nft.salePrice} AVO` : 'Not on sale'}
        </NFTPrice>
        <ParameterParagraph>
          Total: <span>{bid?.nft.total}</span>
        </ParameterParagraph>
        <ParameterParagraph>
          Available: <span>{bid?.nft.available}</span>
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
  padding-bottom: 32px;
`;

const Header = styled.h1`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #23262f;
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
`;

const ParametersContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 16px;
`;

const ParameterParagraph = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: rgba(119, 126, 144, 0.6);
  span {
    color: #777e90;
  }
`;

export default memo(SecondaryHeaderContainer);
