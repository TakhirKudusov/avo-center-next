import styled from 'styled-components';
import React, { memo, ReactNode } from 'react';

interface Props {
  background: string;
  children: ReactNode;
}

const NFTMain: React.FC<Props> = ({ children, ...props }) => {
  return <NFT {...props}>{children}</NFT>;
};

const NFT = styled.div<{ background: string }>`
  display: block;
  flex-wrap: nowrap;
  width: 500.13px;
  height: 600px;
  overflow: hidden;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  border-radius: 16px;
`;

export default memo(NFTMain);
