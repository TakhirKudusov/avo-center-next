import styled, { keyframes } from 'styled-components';
import React, { memo, ReactNode } from 'react';

import EllipseLoading from '../../../../../assets/svg/ellipse-loading.svg';

type Props = {
  loading: boolean;
  currentStep: number;
  step: number;
  children: ReactNode;
};

const StepContentLoader: React.FC<Props> = ({
  loading,
  currentStep,
  step,
  children,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {loading && currentStep == step ? (
        <StyledEllipseLoading color="#B1B5C4" />
      ) : (
        children
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{}>``;

const spinAnimation = keyframes`
  form {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledEllipseLoading = styled(EllipseLoading)`
  -webkit-animation: ${spinAnimation} 1.5s linear infinite;
  -moz-animation: ${spinAnimation} 1.5s linear infinite;
  animation: ${spinAnimation} 1.5s linear infinite;
  margin-right: 4px;
  margin-left: 4px;
`;

export default memo(StepContentLoader);
