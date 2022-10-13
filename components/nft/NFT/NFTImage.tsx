import NFTMain from '../../ui-kit/imgs/NFTMain';
import Tag from '../../ui-kit/Tag/Tag';
import TagsWrapper from './TagsWrapper';
import React, { memo } from 'react';
import { NFT } from '../common/types';

type Props = {
  NFTData: Pick<NFT, 'image' | 'tags'>;
};

const NFTImage: React.FC<Props> = ({ NFTData }) => {
  return (
    <NFTMain background={NFTData.image}>
      <TagsWrapper>
        {NFTData?.tags?.map(({ tagType, tagText }, index) => {
          return (
            <Tag type={tagType} key={index}>
              {tagText}
            </Tag>
          );
        })}
      </TagsWrapper>
    </NFTMain>
  );
};

export default memo(NFTImage);
