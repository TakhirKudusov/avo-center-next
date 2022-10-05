import styled from 'styled-components';
import LogoSVG from '../../../assets/svg/logo.svg';

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoSVG />
      <LogoTitle>AvoNFT</LogoTitle>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoTitle = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  line-height: 32px;
  color: rgba(35, 38, 47, 1);
  margin-left: 8px;
  font-weight: 600;
  letter-spacing: -1px;
`;

export default Logo;
