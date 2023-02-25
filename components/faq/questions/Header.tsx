import styled from 'styled-components';
import Link from 'next/link';
import { devices } from '../../../common/constants';
import { Paths } from '../../../common/enums/paths';

const Header: React.FC = () => {
  return (
    <QuestionsHeader>
      <Container>
        <ParagraphText>learn how to get started</ParagraphText>
        <HeaderText>Frequently asked questions</HeaderText>
      </Container>
      <DescParagraph>
        Join Stacks community now to get free updates and also alot of freebies
        are waiting for you or <Link href={Paths.FAQ}>Contact Support</Link>
      </DescParagraph>
    </QuestionsHeader>
  );
};

const HeaderText = styled.h1`
  width: 100%;
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
`;

const ParagraphText = styled.p`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`;

const DescParagraph = styled.p`
  width: 640px;
  height: 48px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;

  & > a {
    color: #f7ef7c;
    font-weight: 600;
  }

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
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
