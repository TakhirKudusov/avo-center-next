import styled, { keyframes } from 'styled-components';
import { Spinner2 } from '@styled-icons/icomoon/Spinner2';

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

const SpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(Spinner2)`
  width: 48px;
  height: 48px;
  color: rgba(101, 101, 101, 0.75);
  animation: ${SpinAnimation} 1s linear infinite;
`;

const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default LoadingSpinner;
