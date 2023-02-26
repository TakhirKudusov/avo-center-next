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
  <StepWrapper key={step.id} hasMargin={!loading}>
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

const StepWrapper = styled.div<{ hasMargin: boolean }>`
  display: flex;
  gap: 20px;
  margin-bottom: ${({ hasMargin }) => (hasMargin ? '16px' : '0')};

  @media (${devices.mobile}) {
    width: 279px;
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
      return 'linear-gradient(48.74deg, #CF47FF -3.69%, #FBA04C 100.76%)';
    }
    if (hasError && currentStep === step) {
      return '#000000';
    }

    return '#000000';
  }};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ hasError, currentStep, step }) =>
    hasError && currentStep === step ? '2px solid #EB5757' : 'transparent'};
`;

const StepTitle = styled.div`
  font-family: 'Nasalization';
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const StepSubTitle = styled.div`
  font-family: 'Montserrat';
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  margin-top: 4px;
`;

export default StepItem;
