import { useRouter } from 'next/router';
import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { devices } from '../../../common/constants';

const Logo = forwardRef(
  (
    props: { className?: string; isAdmin?: boolean },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const router = useRouter();

    const handleClick = () => {
      router.push('/');
    };

    return (
      <LogoWrapper className={props.className} ref={ref} onClick={handleClick}>
        <LogoBackground isAdmin={!!props.isAdmin} />
        <LogoDescription isAdmin={!!props.isAdmin}>Discover</LogoDescription>
      </LogoWrapper>
    );
  },
);

Logo.displayName = 'Logo';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoBackground = styled.div<{ isAdmin: boolean }>`
  width: 125px;
  height: 60px;
  background-image: url('/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  position: ${({ isAdmin }) => !isAdmin && 'absolute'};
`;

const LogoDescription = styled.p<{ isAdmin: boolean }>`
  text-align: center;
  font-family: 'Nasalization';
  font-size: 16px;
  line-height: 19px;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  padding-left: ${({ isAdmin }) => !isAdmin && '120px'};
  width: ${({ isAdmin }) => (isAdmin ? '175px' : '175px')};
  @media (${devices.mobile}) {
    width: 247px;
  }
`;

export default Logo;
