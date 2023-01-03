import styled from 'styled-components';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <QuestionsHeader>
      <Container>
        <ParagraphText>learn how to get started</ParagraphText>
        <HeaderText>Frequently asked questions</HeaderText>
      </Container>
      <DescParagraph>
        Join Stacks community now to get free updates and also alot of freebies
        are waiting for you or <Link href="/faq">Contact Support</Link>
      </DescParagraph>
    </QuestionsHeader>
  );
};

const HeaderText = styled.h1`
  width: 100%;
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #23262f;
  margin: 0;
`;

const ParagraphText = styled.p`
  width: 172px;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #777e91;
`;

const DescParagraph = styled.p`
  width: 640px;
  height: 48px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #353945;
  a {
    color: #0066ff;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 415px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const QuestionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

export default Header;
