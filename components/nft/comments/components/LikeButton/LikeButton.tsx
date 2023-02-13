import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import HeartOutlinedSVG from '../../../../../assets/svg/heart-outlined.svg';

type Props = {
  isLiked: boolean;
  onCommentLike: () => void;
  onCommentUnlike: () => void;
};

const LikeButton: FC<Props> = ({ isLiked, onCommentLike, onCommentUnlike }) => {
  const [heartFilled, setHeartFilled] = useState<boolean>(false);

  const handleLikeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heartFilled) {
      onCommentLike();
    } else {
      onCommentUnlike();
    }
    setHeartFilled(!heartFilled);
  };

  useEffect(() => {
    setHeartFilled(isLiked);
  }, [isLiked]);

  return (
    <LikeButtonWrapper heartFilled={heartFilled}>
      <HeartOutlinedSVG
        className="heart-btn"
        heartFilled={heartFilled}
        onClick={handleLikeClick}
      />
    </LikeButtonWrapper>
  );
};

const LikeButtonWrapper = styled.div<{ heartFilled: boolean }>`
  display: flex;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  width: 24px;
  height: 24px;

  & .heart-btn {
    position: relative;
    left: 16.67%;
    right: 16.67%;
    top: 20.83%;
    bottom: 20.83%;
    cursor: pointer;
    fill: ${({ heartFilled }) => (heartFilled ? '#EF466F' : 'none')};

    path {
      stroke: ${({ heartFilled }) =>
        heartFilled ? '#EF466F' : 'rgb(119, 126, 144)'};
    }
  }
`;

export default LikeButton;
