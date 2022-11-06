import React, { useState } from 'react';
import styled from 'styled-components';

import HeartOutlinedSVG from '../../../assets/svg/heart-outlined.svg';

const LikeButton = () => {
  const [heartFilled, setHeartFilled] = useState<boolean>(false);

  return (
    <LikeButtonWrapper heartFilled={heartFilled}>
      <HeartOutlinedSVG
        heartFilled={heartFilled}
        className={'heart-btn'}
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          setHeartFilled(!heartFilled)
        }
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
