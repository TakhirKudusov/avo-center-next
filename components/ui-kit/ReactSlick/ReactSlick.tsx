import React, { FC, memo, PropsWithChildren } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  hasDots?: boolean;
  slidesPerRow?: number;
  screenSize?: number;
};

const ReactSlick: FC<PropsWithChildren<Props>> = ({
  children,
  hasDots = false,
  slidesPerRow,
  screenSize,
}) => (
  <StyledSlider
    nextArrow={
      <StyledArrowRight screenSize={screenSize} slidesPerRow={slidesPerRow} />
    }
    prevArrow={
      <StyledArrowLeft screenSize={screenSize} slidesPerRow={slidesPerRow} />
    }
    slidesPerRow={slidesPerRow}
    arrows
    dots={hasDots}
  >
    {children}
  </StyledSlider>
);

const StyledSlider = styled(Slider)`
  .slick-track {
    margin-top: 80px;

    @media (max-width: 415px) {
      margin-top: 24px;
    }
  }

  .slick-slide > div {
    text-align: center;
  }
`;

const StyledArrow = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 2;

  &::before {
    color: #777e91;
    line-height: 0;
  }

  &:hover {
    border: 2px solid #e6e8ec;
    transition: unset !important;
  }
`;

const StyledArrowRight = styled(StyledArrow)<{
  slidesPerRow?: number;
  screenSize?: number;
}>`
  top: ${({ slidesPerRow }) => {
    if (slidesPerRow === 4) {
      return 0;
    }
    if (slidesPerRow === 5) {
      return '60%';
    }

    return 'unset';
  }};
  right: ${({ slidesPerRow }) => {
    if (slidesPerRow === 1) {
      return '265px';
    }
    if (slidesPerRow === 4) {
      return 0;
    }
    if (slidesPerRow === 5) {
      return '-45px';
    }

    return 'unset';
  }};
  bottom: ${({ slidesPerRow }) => (slidesPerRow === 1 ? '30px' : 'unset')};

  @media (max-width: 415px) {
    bottom: ${({ slidesPerRow }) => (slidesPerRow === 1 ? '-80px' : 'unset')};
    right: ${({ slidesPerRow, screenSize }) =>
      slidesPerRow === 1 ? `${screenSize && screenSize / 2 - 60}px` : 'unset'};
  }

  &::before {
    content: url(arrow-right.svg);
  }
`;

const StyledArrowLeft = styled(StyledArrow)<{
  slidesPerRow?: number;
  screenSize?: number;
}>`
  top: ${({ slidesPerRow }) => {
    if (slidesPerRow === 4) {
      return 0;
    }
    if (slidesPerRow === 5) {
      return '60%';
    }

    return 'unset';
  }};
  left: ${({ slidesPerRow }) => {
    if (slidesPerRow === 4 || slidesPerRow === 1) {
      return 'unset';
    }
    if (slidesPerRow === 5) {
      return '-45px';
    }

    return 'unset';
  }};
  right: ${({ slidesPerRow }) => (slidesPerRow === 1 ? '310px' : '50px')};
  bottom: ${({ slidesPerRow }) => (slidesPerRow === 1 ? '30px' : 'unset')};

  @media (max-width: 415px) {
    bottom: ${({ slidesPerRow }) => (slidesPerRow === 1 ? '-80px' : 'unset')};
    right: ${({ slidesPerRow, screenSize }) =>
      slidesPerRow === 1 ? `${screenSize && screenSize / 2 - 20}px` : '50px'};
  }

  &::before {
    content: url(arrow-left.svg);
  }
`;

export default memo(ReactSlick);
