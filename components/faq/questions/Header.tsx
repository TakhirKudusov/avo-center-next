import styled from 'styled-components';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <QuestionsHeader>
      <Container>
        <p>learn how to get started</p>
        <h1>Frequently asked questions</h1>
      </Container>
      <DescParagraph>
        Join Stacks community now to get free updates and also alot of freebies
        are waiting for you or <Link href={'/faq'}>Contact Support</Link>
      </DescParagraph>
    </QuestionsHeader>
  );
};

const DescParagraph = styled.p`
  width: 640px;
  height: 48px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #353945;
  a {
    color: #0066ff;
    font-weight: 500;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 736px;
  height: 80px;
  p {
    width: 172px;
    height: 12px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: #777e91;
  }
  h1 {
    width: 736px;
    height: 56px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #23262f;
    margin: 0;
  }
`;

const QuestionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 736px;
  height: 148px;
`;

export default Header;
