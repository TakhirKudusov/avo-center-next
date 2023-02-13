import styled from 'styled-components';
import { FC } from 'react';

type HeaderProps = {
  text: string;
};

const PageHeader: FC<HeaderProps> = ({ text }) => {
  return (
    <HeaderContainer>
      <HeaderText>{text}</HeaderText>
    </HeaderContainer>
  );
};

const HeaderText = styled.div`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: rgba(35, 38, 47, 0.8);
  width: fit-content;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
`;

export default PageHeader;
