import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { devices } from '../../../common/constants';
import { Paths } from '../../../common/enums/paths';

import { FlexContainer } from '../../common';
import Logo from '../../common/components/Logo';
import { Divider } from '../../ui-kit';
import { handleWalletConnectClick } from './helpers';

type Props = {
  setIsConnectWalletVisible: Dispatch<SetStateAction<boolean>>;
  handleUploadItemClose: () => void;
  handleUploadClick: () => () => void;
};

const Footer = ({ setIsConnectWalletVisible, handleUploadClick }: Props) => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push(Paths.EMPTY);
  };

  return (
    <footer>
      <FooterWrapper>
        <FlexContainer style={{ flexDirection: 'column' }}>
          <FooterContent>
            <CompanyInfo>
              <Logo />
              <Tagline>
                CREATE, EXPLORE & COLLECT
                <br /> DIGITAL ART NFTs
              </Tagline>
            </CompanyInfo>
            <StyledDivider style={{ margin: '32px 0' }} />
            <LinkSections>
              <LinkSection>
                <LinkSectionTitle>Actions</LinkSectionTitle>
                <LinkSectionBody>
                  <LinkItem>
                    <a href="#discover" onClick={goToHomePage}>
                      Discover
                    </a>
                  </LinkItem>
                  <LinkItem>
                    <FooterLink
                      onClick={handleWalletConnectClick(
                        setIsConnectWalletVisible,
                      )}
                    >
                      Connect wallet
                    </FooterLink>
                  </LinkItem>
                  <LinkItem>
                    <FooterLink onClick={handleUploadClick()}>
                      Create item
                    </FooterLink>
                  </LinkItem>
                  <LinkItem>
                    <Link href={Paths.FAQ}>FAQ</Link>
                  </LinkItem>
                </LinkSectionBody>
              </LinkSection>
              <StyledDivider style={{ margin: 0 }} />
              <LinkSection>
                <LinkSectionTitle>Info</LinkSectionTitle>
                <LinkSectionBody>
                  <LinkItem>
                    <a target="__blank" href="https://docs.avo.center">
                      Docs
                    </a>
                  </LinkItem>
                  <LinkItem>
                    <a
                      target="__blank"
                      href="https://github.com/AvocadoBlockchainGroup"
                    >
                      Github
                    </a>
                  </LinkItem>
                  <LinkItem>
                    <Link href={Paths.EMPTY}>Support</Link>
                  </LinkItem>
                </LinkSectionBody>
              </LinkSection>
            </LinkSections>
          </FooterContent>
          <FooterBottom>
            <Copyright>Copyright © 2022 AVONFT. All rights reserved</Copyright>
            {/* TODO: remove if unnecessary */}
            {/* <Cookies>
              <CookiesLabel>We use cookies for better service.</CookiesLabel>
              <CookiesBtn>Accept</CookiesBtn>
            </Cookies> */}
          </FooterBottom>
        </FlexContainer>
      </FooterWrapper>
    </footer>
  );
};

const FooterWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    );
  padding: 32px 0 32px 32px;

  @media (${devices.mobile}) {
    padding-left: 32px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${devices.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterLink = styled.span`
  cursor: pointer;
`;

const StyledDivider = styled(Divider)`
  display: none;

  @media (${devices.mobile}) {
    display: block;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tagline = styled.div`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin-top: 32px;
`;

const LinkSections = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 90px;

  @media (${devices.mobile}) {
    flex-direction: column;
    gap: 32px;
    width: 100%;
  }
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const LinkSectionTitle = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const LinkSectionBody = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 24px;
`;

const LinkItem = styled.li`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const FooterBottom = styled.div`
  padding-top: 32px;
  border-top: 1px solid #e6e8ec;
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  line-height: 20px;
  margin-top: 48px;

  @media (${devices.mobile}) {
    flex-direction: column;
  }
`;

const Copyright = styled.div`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

// const Cookies = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 16px;
// `;

// const CookiesLabel = styled.div`
//   font-family: 'Poppins';
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 20px;
//   color: #23262f;
// `;

// const CookiesBtn = styled.button`
//   background: none;
//   border: none;
//   padding: none;
//   font-weight: 600;
//   color: #3772ff;
//   cursor: pointer;
// `;

export default Footer;
