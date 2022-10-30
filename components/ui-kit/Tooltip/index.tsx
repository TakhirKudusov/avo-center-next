import { memo, useEffect, useRef, useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import styled from 'styled-components';
import { handleActivation } from './helpers';

type Props = {
  children: JSX.Element;
  content: JSX.Element;
};
const Tooltip: React.FC<Props> = ({ children, content }) => {
  const [active, setActive] = useState(false);
  const [wrapperWidth, setWrapperWidth] = useState<number | undefined>();

  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useDetectClickOutside({
    onTriggered: () => {
      setActive(false);
    },
  });

  useEffect(() => {
    if (contentRef.current?.clientWidth) {
      setWrapperWidth(contentRef.current?.clientWidth);
    }
  }, [contentRef.current?.clientWidth, children]);

  return (
    <TooltipWrapper ref={wrapperRef}>
      <TooltipChildrenWrapper onClick={handleActivation(setActive)}>
        {children}
      </TooltipChildrenWrapper>
      <TooltipContent ref={contentRef} offset={wrapperWidth} active={active}>
        <ArrowUp />
        {content}
      </TooltipContent>
    </TooltipWrapper>
  );
};

const TooltipWrapper = styled.span`
  position: relative;
`;

const TooltipChildrenWrapper = styled.span``;

const TooltipContent = styled.div<{
  offset: number | undefined;
  active: boolean;
}>`
  position: absolute;
  margin-top: 20px;
  background: #fcfcfd;
  box-shadow: 0 9px 45px -6px rgba(31, 47, 70, 0.12);
  border-radius: 12px;
  min-width: 190px;
  padding: 30px 14px;
  left: ${(props) =>
    props.offset ? `calc(50% - (${props.offset}px / 2))` : '-50%'};
  opacity: ${(props) => (props.active ? '1' : '0')};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
`;

const ArrowUp = styled.div`
  position: absolute;
  top: -16px;
  left: calc(50% - 16px);
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 16px solid #fcfcfd;
`;

export default memo(Tooltip);
