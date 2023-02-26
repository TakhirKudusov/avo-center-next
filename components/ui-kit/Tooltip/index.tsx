import { memo, useEffect, useRef, useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import styled from 'styled-components';
import { screenSizes } from '../../../common/constants';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { handleActivation } from './helpers';
import { TooltipPosition } from './types';

type Props = {
  children: JSX.Element;
  content: JSX.Element;
  position?: TooltipPosition;
  onClickOutside?: () => void;
};
const Tooltip: React.FC<Props> = ({
  children,
  content,
  position = TooltipPosition.Left,
  onClickOutside,
}) => {
  const [active, setActive] = useState(false);
  const [wrapperWidth, setWrapperWidth] = useState<number | undefined>();

  const { screenSize } = useAdaptiveSlider();

  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useDetectClickOutside({
    onTriggered: () => {
      setActive(false);

      if (onClickOutside) {
        onClickOutside();
      }
    },
  });

  useEffect(() => {
    if (contentRef.current?.clientWidth) {
      setWrapperWidth(contentRef.current?.clientWidth);
    }
  }, [contentRef.current?.clientWidth, children]);

  return (
    <TooltipWrapper ref={wrapperRef} screenSize={screenSize}>
      <TooltipChildrenWrapper onClick={handleActivation(setActive)}>
        {children}
      </TooltipChildrenWrapper>
      <TooltipContent
        ref={contentRef}
        offset={wrapperWidth}
        active={active}
        position={position}
      >
        <ArrowUp position={position} />
        {content}
      </TooltipContent>
    </TooltipWrapper>
  );
};

const TooltipWrapper = styled.span<{ screenSize: number }>`
  position: ${({ screenSize }) =>
    screenSize > screenSizes.tablet ? 'relative' : 'static'};
`;

const TooltipChildrenWrapper = styled.span``;

const TooltipContent = styled.div<{
  offset: number | undefined;
  active: boolean;
  position?: TooltipPosition;
}>`
  position: absolute;
  margin-top: 20px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.3) 0%,
      rgba(12, 55, 83, 0.08) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0 9px 45px -6px rgba(31, 47, 70, 0.12);
  border-radius: 12px;
  min-width: 190px;
  padding: 30px 14px;
  left: ${({ offset, position }) => {
    if (position === TooltipPosition.Left) {
      return '0';
    }
    if (position === TooltipPosition.Right) {
      return 'auto';
    }
    if (position === TooltipPosition.Center) {
      return offset ? `calc(50% - (${offset}px / 2))` : '-50%';
    }
  }};
  right: ${({ position }) => {
    if (position === TooltipPosition.Right) {
      return '0';
    }
    if (position === TooltipPosition.Left) {
      return 'auto';
    }
    if (position === TooltipPosition.Center) {
      return 'auto';
    }
  }};
  opacity: ${({ active }) => (active ? '1' : '0')};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
`;

const ArrowUp = styled.div<{ position?: TooltipPosition }>`
  position: absolute;
  top: -16px;
  left: ${({ position }) => {
    if (position === TooltipPosition.Right) {
      return 'calc(50% + 58px)';
    }
    if (position === TooltipPosition.Left) {
      return 'calc(50% - 90px)';
    }

    return 'calc(50% - 16px)';
  }};
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 16px solid rgba(0, 0, 0, 0.6);
`;

export default memo(Tooltip);
