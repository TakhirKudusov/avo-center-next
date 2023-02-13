import styled from 'styled-components';
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Chevron from '../../../../assets/svg/chevron-down.svg';
import { AppContext } from '../../../../common/context/AppContext';
import { AdminRoute } from '../../utils/routes';
import { useRouter } from 'next/router';

type Props = {
  header: string;
  subPoint: { id: number; name: string; link: AdminRoute }[];
  Icon: ReactNode | any;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  setMenuSlide: Dispatch<SetStateAction<boolean>>;
};

const NavPoint: FC<Props> = ({
  header,
  subPoint,
  Icon,
  setMenuOpen,
  setMenuSlide,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isMenuDisabled } = useContext(AppContext);

  const router = useRouter();

  const handleOpenClick = () => {
    if (!isMenuDisabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handlePointContainerClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  const handlePointClick = (endpoint: AdminRoute) => () => {
    router.push(endpoint);
    setMenuSlide(false);
    setTimeout(() => setMenuOpen(false), 250);
  };

  return (
    <PointContainer
      style={{ height: isOpen ? `${subPoint.length * 30 + 44}px` : '44px' }}
      isDisabled={isMenuDisabled!}
      onClick={handleOpenClick}
    >
      <HeaderContainer>
        <HeaderWrapper>
          <IconContainer isDisabled={isMenuDisabled!}>
            <Icon />
          </IconContainer>
          <MainNavText isDisabled={isMenuDisabled!}>{header}</MainNavText>
        </HeaderWrapper>
        <ChevronContainer isOpen={isOpen} isDisabled={isMenuDisabled!}>
          <Chevron />
        </ChevronContainer>
      </HeaderContainer>
      <SubPointContainer onClick={handlePointContainerClick}>
        {subPoint.map((el) => {
          return (
            <SubPointWrapper onClick={handlePointClick(el.link)} key={el.id}>
              <MainNavText isSub={true} isDisabled={isMenuDisabled!}>
                {el.name}
              </MainNavText>
            </SubPointWrapper>
          );
        })}
      </SubPointContainer>
    </PointContainer>
  );
};

const SubPointWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const SubPointContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 36px;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 5px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

const IconContainer = styled.div<{ isDisabled: boolean }>`
  display: flex;
  width: 20px;
  height: 20px;
  & * {
    color: ${({ isDisabled }) =>
      isDisabled ? 'rgba(35,38,47,0.25)' : 'rgba(35,38,47,0.85)'};
  }
`;

const ChevronContainer = styled.div<{ isOpen: boolean; isDisabled: boolean }>`
  display: flex;
  transform: rotate(${({ isOpen }) => (isOpen ? '180' : '')}deg);
  & svg path {
    fill: ${({ isDisabled }) =>
      isDisabled ? 'rgba(35,38,47,0.25)' : 'rgba(35,38,47,0.85)'};
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MainNavText = styled.div<{ isDisabled: boolean; isSub?: boolean }>`
  font-family: 'DM Sans';
  font-weight: 600;
  font-size: ${({ isSub }) => (isSub ? '16px' : '18px')};
  line-height: ${({ isSub }) => (isSub ? '20px' : '24px')};
  text-align: center;
  letter-spacing: -0.02em;
  color: ${({ isDisabled, isSub }) =>
    isDisabled
      ? 'rgba(35,38,47,0.25)'
      : isSub
      ? 'rgba(35, 38, 47, 0.75)'
      : 'rgba(35,38,47,0.85)'};
  &:hover {
    color: ${({ isDisabled, isSub }) =>
      isDisabled
        ? 'rgba(35,38,47,0.25)'
        : isSub
        ? 'rgb(35,38,47)'
        : 'rgba(35,38,47,0.85)'};
  }
`;

const PointContainer = styled.div<{ isDisabled: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  border-bottom: rgba(0, 0, 0, 0.05) solid 1px;
  padding: 10px 0;
  overflow: hidden;
  transition: 0.15s linear;
  row-gap: 5px;
`;

export default NavPoint;
