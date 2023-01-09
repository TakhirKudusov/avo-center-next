import { useRouter } from 'next/router';
import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { devices } from '../../../common/constants';

const Logo = forwardRef((props: {}, ref: ForwardedRef<HTMLDivElement>) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <LogoWrapper ref={ref} onClick={handleClick}>
      <LogoBackground />
      <LogoDescription>
        Create, explore & collect digital art NFTs.
      </LogoDescription>
    </LogoWrapper>
  );
});

Logo.displayName = 'Logo';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoBackground = styled.div`
  width: 125px;
  height: 60px;
  background-image: url('/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
`;

const LogoDescription = styled.p`
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  color: rgba(119, 126, 144, 1);
  text-transform: uppercase;
  padding-left: 100px;
  width: 320px;

  @media (${devices.mobile}) {
    width: 247px;
  }
`;

export default Logo;
