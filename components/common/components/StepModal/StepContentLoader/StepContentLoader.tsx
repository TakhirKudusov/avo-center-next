import styled from 'styled-components';
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

const StyledEllipseLoading = styled(EllipseLoading)`
  -webkit-animation: spin 1.5s linear infinite;
  -moz-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default memo(StepContentLoader);
