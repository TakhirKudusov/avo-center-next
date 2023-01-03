import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import NFTMain from '../../ui-kit/imgs/NFTMain';
import Tag from '../../ui-kit/Tag/Tag';
import { TagsWrapper } from '../';
import { NFT } from '../common/types';

import UserActionsButtonsGroup from './UserActionsButtonsGroup';

type Props = {
  NFTData: Pick<NFT, 'image' | 'tags'>;
};

const NFTImage: React.FC<Props> = ({ NFTData }) => {
  const [screenSize, setScreenSize] = useState<'large' | 'small'>('large');

  useEffect(() => {
    setScreenSize(window.screen.width > 1024 ? 'large' : 'small');
  }, []);

  return (
    <StyledNFTMain background={NFTData.image}>
      <NFTMainContainer>
        <TagsWrapper>
          {NFTData?.tags?.map(({ tagType, tagText }, index) => {
            return (
              <Tag type={tagType} key={index}>
                {tagText}
              </Tag>
            );
          })}
        </TagsWrapper>
        {screenSize === 'small' && (
          <UserActionsButtonsGroup screenSize={screenSize} />
        )}
      </NFTMainContainer>
    </StyledNFTMain>
  );
};

export default memo(NFTImage);

const NFTMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 24px;
`;

const StyledNFTMain = styled(NFTMain)`
  min-width: 500px;

  @media (max-width: 415px) {
    min-width: 100%;
    width: 100%;
  }
`;
