import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import NFTMain from '../../ui-kit/imgs/NFTMain';
import Tag from '../../ui-kit/Tag/Tag';
import { TagsWrapper } from '../';
import { NFT } from '../common/types';

import UserActionsButtonsGroup from './UserActionsButtonsGroup';
import { devices, screenSizes } from '../../../common/constants';

type Props = {
  NFTData: Pick<NFT, 'image' | 'tags'>;
  defaultLikesNumber: number;
  likesNumber: number;
  onLikeClick: () => void;
};

const NFTImage: React.FC<Props> = ({
  defaultLikesNumber,
  NFTData,
  likesNumber,
  onLikeClick,
}) => {
  const [screenSize, setScreenSize] = useState<'large' | 'small'>('large');

  useEffect(() => {
    setScreenSize(window.screen.width > screenSizes.tablet ? 'large' : 'small');
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
          <UserActionsButtonsGroup
            defaultLikesNumber={defaultLikesNumber}
            likesNumber={likesNumber}
            screenSize={screenSize}
            onLikeClick={onLikeClick}
          />
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

  @media (${devices.mobile}) {
    min-width: 100%;
    width: 100%;
  }
`;
