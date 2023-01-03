import Link from 'next/link';
import styled from 'styled-components';

import { FlexContainer } from '../../common';
import Logo from '../../common/components/Logo';
import { Divider } from '../../ui-kit';

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <FlexContainer style={{ flexDirection: 'column' }}>
          <FooterContent>
            <CompanyInfo>
              <Logo />
              <Tagline>
                The New Creative
                <br /> Economy.
              </Tagline>
            </CompanyInfo>
            <StyledDivider style={{ margin: '32px 0' }} />
            <LinkSections>
              <LinkSection>
                <LinkSectionTitle>Actions</LinkSectionTitle>
                <LinkSectionBody>
                  <LinkItem>
                    <Link href={''}>Discover</Link>
                  </LinkItem>
                  <LinkItem>
                    <Link href={''}>Connect wallet</Link>
                  </LinkItem>
                  <LinkItem>
                    <Link href={''}>Create item</Link>
                  </LinkItem>
                  <LinkItem>
                    <Link href={'/faq'}>FAQ</Link>
                  </LinkItem>
                </LinkSectionBody>
              </LinkSection>
              <StyledDivider style={{ margin: 0 }} />
              <LinkSection>
                <LinkSectionTitle>Info</LinkSectionTitle>
                <LinkSectionBody>
                  <LinkItem>
                    <Link href={''}>Download</Link>
                  </LinkItem>
                  <LinkItem>
                    <Link href={''}>Demos</Link>
                  </LinkItem>
                  <LinkItem>
                    <Link href={''}>Support</Link>
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
  background: #fcfcfd;
  border-top: 2px solid #e6e8ec;
  padding: 32px 0 32px 32px;

  @media (max-width: 415px) {
    padding-left: 32px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 415px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledDivider = styled(Divider)`
  display: none;

  @media (max-width: 415px) {
    display: block;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tagline = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.01em;
  color: #23262f;
  margin-top: 32px;
`;

const LinkSections = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 90px;

  @media (max-width: 415px) {
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
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
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
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #777e91;
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

  @media (max-width: 415px) {
    flex-direction: column;
  }
`;

const Copyright = styled.div`
  font-weight: 400;
  color: #777e91;
`;

const Cookies = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CookiesLabel = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #23262f;
`;

const CookiesBtn = styled.button`
  background: none;
  border: none;
  padding: none;
  font-weight: 600;
  color: #3772ff;
  cursor: pointer;
`;

export default Footer;
