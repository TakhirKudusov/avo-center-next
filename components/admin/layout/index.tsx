import styled from 'styled-components';
import Logo from '../../common/components/Logo';
import BurgerSVG from '../../../assets/svg/burger-icon.svg';
import { FC, SyntheticEvent, useContext, useEffect, useState } from 'react';
import { ChildrenProp } from '../../../common/types/ChildrenProp';
import { Divider } from '../../ui-kit';
import SideMenu from '../UI/side_menu/SideMenu';
import { useRouter } from 'next/router';
import { AdminRoute } from '../utils/routes';
import { AppContext } from '../../../common/context/AppContext';

const AdminLayout: FC<ChildrenProp> = ({ children }) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const { setIsMenuDisabled } = useContext(AppContext);

  const router = useRouter();

  const handleLogoClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  const handleMenuBtnClick = () => {
    setIsMenuOpened(true);
  };

  const handleMenuClick = (endpoint: AdminRoute) => () => {
    router.push(endpoint);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsMenuDisabled!(false);
      setIsLogged(true);
      if (router.route === AdminRoute.LOGIN) {
        router.push(AdminRoute.MAIN);
      }
    } else {
      setIsLogged(false);
      setIsMenuDisabled!(true);
      router.push(AdminRoute.LOGIN);
    }
  }, [router.asPath]);

  const handleExitClick = () => {
    localStorage.removeItem('accessToken');
    router.push(AdminRoute.LOGIN);
  };

  return (
    <>
      <Wrapper>
        <HeaderContainer>
          <HeaderBody>
            <LogoWrapper onClickCapture={handleLogoClick}>
              <StyledLogo isAdmin={true} />
            </LogoWrapper>
            {isLogged && (
              <ExitButton onClick={handleExitClick}>Exit</ExitButton>
            )}
            <BurgerIconContainer onClick={handleMenuBtnClick}>
              <BurgerSVG color="#777E91" />
            </BurgerIconContainer>
          </HeaderBody>
        </HeaderContainer>
        <ChildrenWrapper>
          <ChildrenContainer>{children}</ChildrenContainer>
        </ChildrenWrapper>
        <FooterContainer>
          <FooterBody>
            <FooterRowContainer>
              <LogoContainer>
                <LogoWrapper onClickCapture={handleLogoClick}>
                  <StyledLogo isAdmin={true} />
                </LogoWrapper>
                <Tagline>CREATE, EXPLORE & COLLECT DIGITAL ART NFTs</Tagline>
              </LogoContainer>

              <MenuWrapper>
                <BottomMenuHeader>Navigation</BottomMenuHeader>
                <FooterMenuContainer>
                  <BottomMenuItem onClick={handleMenuClick(AdminRoute.NFTs)}>
                    NFTs
                  </BottomMenuItem>
                  <BottomMenuItem onClick={handleMenuClick(AdminRoute.USERS)}>
                    Users
                  </BottomMenuItem>
                  <BottomMenuItem onClick={handleMenuClick(AdminRoute.BIDS)}>
                    Bids
                  </BottomMenuItem>
                  <BottomMenuItem
                    onClick={handleMenuClick(AdminRoute.CATEGORIES)}
                  >
                    Categories
                  </BottomMenuItem>
                  <BottomMenuItem
                    onClick={handleMenuClick(AdminRoute.COLLECTIONS)}
                  >
                    Collections
                  </BottomMenuItem>
                  <BottomMenuItem onClick={handleMenuClick(AdminRoute.FAQS)}>
                    FAQs
                  </BottomMenuItem>
                  <BottomMenuItem onClick={handleMenuClick(AdminRoute.REPORTS)}>
                    Reports
                  </BottomMenuItem>
                </FooterMenuContainer>
              </MenuWrapper>
            </FooterRowContainer>
            <Divider />
            <CopyrightText>
              Copyright © 2022 AVONFT. All rights reserved
            </CopyrightText>
          </FooterBody>
        </FooterContainer>
      </Wrapper>
      <SideMenu isOpen={isMenuOpened} setIsOpen={setIsMenuOpened} />
    </>
  );
};

const ExitButton = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #777e91;
  width: 100%;
  text-align: end;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  &:active {
    color: rgb(0, 0, 0);
  }
`;

const CopyrightText = styled.div`
  display: flex;
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
  padding-top: 8px;
`;

const FooterRowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Tagline = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.01em;
  color: #23262f;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  row-gap: 32px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const BottomMenuHeader = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
`;

const BottomMenuItem = styled.div`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #777e91;
  cursor: pointer;
  width: fit-content;
`;

const FooterMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 352px;
  height: 160px;
  row-gap: 24px;
`;

const FooterBody = styled.div`
  display: flex;
  width: 1440px;
  padding: 80px 80px 0;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 373px;
  border-top: 1px solid rgba(101, 101, 101, 0.25);
`;

const ChildrenWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  padding: 40px 80px;
`;

const StyledLogo = styled(Logo)`
  cursor: default;
  height: fit-content;
`;

const LogoWrapper = styled.div`
  display: flex;
  cursor: default;
`;

const BurgerIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover {
    & path {
      fill: rgba(0, 0, 0, 0.75);
    }
  }

  &:active {
    & path {
      fill: rgb(0, 0, 0);
    }
  }
`;

const HeaderBody = styled.div`
  display: flex;
  width: 1440px;
  padding: 0 80px;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 81px;
  border-bottom: 1px solid rgba(101, 101, 101, 0.25);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  overflow-x: hidden;
  background: #fcfcfd;
  height: 100vh;
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

export default AdminLayout;
