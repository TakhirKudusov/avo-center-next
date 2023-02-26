import styled, { keyframes } from 'styled-components';
import React, { memo, ReactNode } from 'react';

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
    <div {...props}>
      {loading && currentStep == step ? <EllipseLoading /> : children}
    </div>
  );
};

const spinAnimation = keyframes`
  form {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const EllipseLoading = styled.div`
  width: 48px;
  height: 48px;
  -webkit-animation: ${spinAnimation} 1.5s linear infinite;
  -moz-animation: ${spinAnimation} 1.5s linear infinite;
  animation: ${spinAnimation} 1.5s linear infinite;
  margin-right: 4px;
  margin-left: 4px;
  background-image: url(/images/ellipse-loading.png);
`;

export default memo(StepContentLoader);
