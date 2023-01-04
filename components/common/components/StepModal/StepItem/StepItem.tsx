import styled from 'styled-components';
import { Step } from '../types';
import CheckSVG from '../../../../../assets/svg/check.svg';
import StepContentLoader from '../StepContentLoader';
import { devices } from '../../../../../common/constants';

type Props = {
  step: Step;
  currentStep: number;
  hasError: boolean;
  loading: boolean;
};

const StepItem = ({ step, currentStep, hasError, loading }: Props) => (
  <StepWrapper key={step.id}>
    <StepContentLoader
      loading={loading}
      currentStep={currentStep}
      step={step.id}
    >
      <Circle currentStep={currentStep} step={step.id} hasError={hasError}>
        {currentStep <= step.id ? (
          step.renderIcon(currentStep === step.id ? hasError : false)
        ) : (
          <CheckSVG color="#FCFCFD" />
        )}
      </Circle>
    </StepContentLoader>
    <div>
      <StepTitle>{step.title}</StepTitle>
      <StepSubTitle>{step.subTitle}</StepSubTitle>
    </div>
  </StepWrapper>
);

const StepWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  margin-top: 32px;

  @media (${devices.mobile}) {
    width: 279px;
  }
  @media (${devices.tablet}) {
    width: 384px;
  }
`;

const Circle = styled.div<{
  currentStep: number;
  step: number;
  hasError: boolean;
}>`
  width: 48px;
  height: 48px;
  background: ${({ hasError, currentStep, step }) => {
    if (currentStep > step) {
      return '#45B36B';
    }
    if (hasError && currentStep === step) {
      return '#fff';
    }

    return '#e6e8ec';
  }};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ hasError, currentStep, step }) =>
    hasError && currentStep === step ? '2px solid #EF466F' : 'transparent'};
`;

const StepTitle = styled.div`
  color: #23262f;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const StepSubTitle = styled.div`
  color: #777e91;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`;

export default StepItem;
