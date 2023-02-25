import { Children, memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element;
  content: JSX.Element;
  currentThumbPosition: number;
};

const Tooltip = ({ children, content, currentThumbPosition }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.setAttribute(
      'style',
      `left: calc((${currentThumbPosition}px - 16px) * 0.9)`,
    );
  }, [currentThumbPosition]);

  return (
    <TooltipWrapper>
      <TooltipChildrenWrapper>{children}</TooltipChildrenWrapper>
      <TooltipContent ref={contentRef}>
        <ArrowDown />
        {content}
      </TooltipContent>
    </TooltipWrapper>
  );
};

const TooltipWrapper = styled.div`
  position: relative;
`;

const TooltipChildrenWrapper = styled.span``;

const TooltipContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 9px 45px -6px rgba(31, 47, 70, 0.12);
  border-radius: 8px;
  min-width: 60px;
  height: 28px;
  transition: all 0.3s;
  color: #fff;
  left: -16px;
  top: -48px;
`;

const ArrowDown = styled.div`
  position: absolute;
  background: #fff;
  top: 28px;
  left: calc(50% - 18x);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #141416;
`;

export default memo(Tooltip);
