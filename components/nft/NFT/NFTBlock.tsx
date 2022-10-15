import NFTImage from './NFTImage';
import NFTDescription from './NFTDescription';
import { NFT } from '../common/types';
import { memo } from 'react';
import { NFTDescriptionContainer, NFTDescriptionWrapper } from '../index';
import UserActionsButtonsGroup from './UserActionsButtonsGroup';
import styled from 'styled-components';

type Props = {
  NFTData: NFT;
};

const NFTBlock: React.FC<Props> = ({ NFTData }) => {
  const { image, tags, ...NFTDescriptionData } = NFTData;

  return (
    <Container>
      <NFTDescriptionContainer>
        <div>
          <NFTDescriptionWrapper>
            <NFTImage NFTData={{ image, tags }} />
            <NFTDescription data={NFTDescriptionData} />
          </NFTDescriptionWrapper>
        </div>
      </NFTDescriptionContainer>
      <UserActionsButtonsGroup />
    </Container>
  );
};

const Container = styled(NFTDescriptionWrapper)`
  width: 1224px;
`;

export default memo(NFTBlock);
