import {ContentContainer} from "../common";
import styled from "styled-components";
import {memo} from "react";
import {NFT} from "./types";
import {BidPriceWrapper} from "../common/components/BidPrice";

interface Props {
    data: Omit<NFT, "image" | "tags">
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 40px;
`

const Header = styled.h1`
  width: 564px;
  height: 96px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #23262F;
  margin: 0;
`

const NFTPrice = styled(BidPriceWrapper)`
  font-size: 16px;
  line-height: 16px;
`

const ParametersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`

const ParameterParagraph = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: rgba(119, 126, 144, 0.6);
  span {
    color: #777E90;
  }
`

const SecondaryHeaderContainer: React.FC<Props> = ({data}) => {
    return (
        <HeaderContainer>
        <Header>{data?.title}</Header>
        <ParametersContainer>
            <NFTPrice>{data?.price} AVO</NFTPrice>
            <ParameterParagraph>Total: <span>{data?.total}</span></ParameterParagraph>
            <ParameterParagraph>Available: <span>{data?.available}</span></ParameterParagraph>
        </ParametersContainer>
    </HeaderContainer>
    )
}

export default memo(SecondaryHeaderContainer)