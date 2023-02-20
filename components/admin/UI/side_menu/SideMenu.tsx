import {
  Dispatch,
  FC,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import CloseIcon from '../../../../assets/svg/close-icon.svg';
import { Divider } from '../../../ui-kit';
import { sideMenuArr } from './constants';
import NavPoint from './NavPoint';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SideMenu: FC<Props> = ({ isOpen, setIsOpen }) => {
  const [menuSlide, setMenuSlide] = useState<boolean>(false);

  useEffect(() => {
    let timeout = setTimeout(() => {}, 0);
    if (isOpen) {
      timeout = setTimeout(() => setMenuSlide(true), 250);
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  const handleWrapperClick = (e: SyntheticEvent) => {
    setMenuSlide(false);
    setTimeout(() => setIsOpen(false), 250);
  };

  const handleMenuBodyClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <Wrapper onClick={handleWrapperClick} isOpen={isOpen}>
      <MenuBody isSlide={menuSlide} onClick={handleMenuBodyClick}>
        <HeaderContainer>
          <HeaderText>Navigation</HeaderText>
          <CloseIconContainer onClick={handleWrapperClick}>
            <CloseIcon />
          </CloseIconContainer>
        </HeaderContainer>
        <Divider />
        <NavContainer>
          {sideMenuArr.map(({ header, subPoints, Icon }) => {
            return (
              <>
                <NavPoint
                  key={header}
                  header={header}
                  subPoint={subPoints as any}
                  Icon={Icon}
                  setMenuOpen={setIsOpen}
                  setMenuSlide={setMenuSlide}
                />
              </>
            );
          })}
        </NavContainer>
      </MenuBody>
    </Wrapper>
  );
};

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
`;

const HeaderText = styled.div`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #23262f;
`;

const CloseIconContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuBody = styled.div<{ isSlide: boolean }>`
  display: flex;
  width: 372px;
  height: 100%;
  background-color: #fcfcfd;
  flex-direction: column;
  position: relative;
  right: ${({ isSlide }) => (isSlide ? '0' : '-372px')};
  transition: 0.25s linear;
  padding: 30px 32px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(85, 85, 85, 0.85);
  }
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ isOpen }) =>
    isOpen ? 'rgba(20, 20, 22, 0.8)' : 'none'};
  transition: 0.25s linear;
`;

export default SideMenu;
