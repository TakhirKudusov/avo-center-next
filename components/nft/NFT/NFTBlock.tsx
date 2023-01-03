import NFTImage from './NFTImage';
import NFTDescription from './NFTDescription';
import { NFT } from '../common/types';
import { memo, useEffect, useState } from 'react';
import { NFTDescriptionContainer, NFTDescriptionWrapper } from '../index';
import UserActionsButtonsGroup from './UserActionsButtonsGroup';
import styled from 'styled-components';
import NFTListingsBlock from './NFTListingsBlock';

type Props = {
  NFTData: NFT;
};

const NFTBlock: React.FC<Props> = ({ NFTData }) => {
  const { image, tags, ...NFTDescriptionData } = NFTData;
  const [screenSize, setScreenSize] = useState<'large' | 'small'>('large');

  useEffect(() => {
    setScreenSize(window?.screen.width > 1024 ? 'large' : 'small');
  }, []);

  return (
    <>
      <Container>
        <NFTDescriptionContainer>
          <div>
            <StyledNFTDescriptionWrapper>
              <NFTImage NFTData={{ image, tags }} />
              <NFTDescription
                screenSize={screenSize}
                data={NFTDescriptionData}
              />
            </StyledNFTDescriptionWrapper>
            {screenSize === 'small' && (
              <NFTListingsBlock
                listingsData={NFTDescriptionData.listingsData}
              />
            )}
          </div>
        </NFTDescriptionContainer>
        {screenSize === 'large' && (
          <UserActionsButtonsGroup screenSize={screenSize} />
        )}
      </Container>
    </>
  );
};

const Container = styled(NFTDescriptionWrapper)`
  width: 1224px;

  @media (max-width: 1024px) {
    width: 1024px;
  }

  @media (max-width: 415px) {
    width: 375px;
    padding: 0 32px;
  }
`;

const StyledNFTDescriptionWrapper = styled(NFTDescriptionWrapper)`
  @media (max-width: 1024px) {
    padding: 0 80px 0 0;
  }

  @media (max-width: 415px) {
    padding: 0;
    margin: auto;
  }
`;

export default memo(NFTBlock);
