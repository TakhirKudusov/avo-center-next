import { memo, useState } from 'react';
import styled from 'styled-components';

import HeartOutlinedSVG from '../../../assets/svg/heart-outlined.svg';

type Props = {
  isNftLiked: boolean;
  onLikeNft: (likeNft: () => void) => void;
  onUnlikeNft: (likeNft: () => void) => void;
};

const LikeButton: React.FC<Props> = ({
  isNftLiked,
  onLikeNft,
  onUnlikeNft,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(isNftLiked);

  const likeNft = () => setIsLiked(!isLiked);

  const handleLikeClick = () => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isLiked) onUnlikeNft(likeNft);
    else onLikeNft(likeNft);
  };

  return (
    <Wrapper isLiked={isLiked} onClick={handleLikeClick()}>
      <StyledSVG isLiked={isLiked} className={'heart-btn'} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isLiked: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #fcfcfd;
  box-shadow: 0px 8px 16px -8px rgba(15, 15, 15, 0.2);
  border-radius: 32px;
`;

const StyledSVG = styled(HeartOutlinedSVG)`
  fill: ${({ isLiked }) => (isLiked ? '#EF466F' : '#fcfcfd')};

  & > path {
    stroke: ${({ isLiked }) => (isLiked ? '#EF466F' : '#777E90')};
  }
`;

export default memo(LikeButton);
