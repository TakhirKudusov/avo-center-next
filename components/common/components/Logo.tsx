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
        <LogoDescription isAdmin={!!props.isAdmin}>
          Create, explore & collect digital art NFTs.
        </LogoDescription>
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
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  color: rgba(119, 126, 144, 1);
  text-transform: uppercase;
  padding-left: ${({ isAdmin }) => !isAdmin && '100px'};
  width: ${({ isAdmin }) => (isAdmin ? '175px' : '320px')};
  @media (${devices.mobile}) {
    width: 247px;
  }
`;

export default Logo;
