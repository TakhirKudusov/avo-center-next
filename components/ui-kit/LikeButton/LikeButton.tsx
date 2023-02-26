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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  border-radius: 32px;
`;

const StyledSVG = styled(HeartOutlinedSVG)`
  fill: ${({ isLiked }) => (isLiked ? '#EB5757' : '#fcfcfd')};

  & > path {
    stroke: ${({ isLiked }) =>
      isLiked ? '#EB5757' : 'rgba(255, 255, 255, 0.7)'};
  }
`;

export default memo(LikeButton);
