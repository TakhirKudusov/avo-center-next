import styled from "styled-components";
import React, {memo, ReactNode} from "react";

interface Props {
    background: string;
    children: ReactNode
}

const NFT = styled.div<{ background: string}>`
  display: block;
  flex-wrap: nowrap;
  width: 500.13px;
  height: 600px;
  overflow: hidden;
  background: ${props => props.background};
  background-size: cover;
  border-radius: 16px;
`

const NFTMain: React.FC<Props> = ({children, ...props}) => {
    return <NFT {...props}>{children}</NFT>
}

export default memo(NFTMain)