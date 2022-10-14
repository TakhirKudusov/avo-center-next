import styled from 'styled-components';
import HeartFilledSVG from '../../../assets/svg/heart-filled.svg';
import React, { useState } from 'react';
import HeartOutlinedSVG from '../../../assets/svg/heart-outlined.svg';

const LikeButton = () => {
  const [heartFilled, setHeartFilled] = useState<boolean>(false);

  return (
    <LikeButtonWrapper>
      {heartFilled ? (
        <HeartFilledSVG
          className={'heart-btn'}
          onClick={(e: React.MouseEvent<HTMLDivElement>) =>
            setHeartFilled(!heartFilled)
          }
        />
      ) : (
        <HeartOutlinedSVG
          className={'heart-btn'}
          onClick={(e: React.MouseEvent<HTMLDivElement>) =>
            setHeartFilled(!heartFilled)
          }
        />
      )}
    </LikeButtonWrapper>
  );
};

const LikeButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  }
`;

export default LikeButton;
