import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../../../common/constants';

import {
  Button,
  ButtonSize,
  ButtonType,
  Modal,
} from '../../../../components/ui-kit';

import StepItem from './StepItem';
import { Stage, Step } from './types';

type Props = {
  isOpen: boolean;
  steps: Step[];
  children?: JSX.Element;
  childrenStageTitle?: string;
  startStepBtnName?: string;
  confirmBtnName?: string;
  cancelBtnName?: string;
  successWindow?: JSX.Element;
  childrenStageOnConfirm?: () => void;
  onClose: () => void;
};

const StepModal: FC<Props> = ({
  steps,
  isOpen,
  children,
  childrenStageTitle,
  startStepBtnName,
  confirmBtnName,
  cancelBtnName,
  successWindow,
  childrenStageOnConfirm,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stage, setStage] = useState<Stage>('children');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isAnimate, setAnimate] = useState(false);

  const handleStepModalClose = () => {
    setTimeout(() => {
      setHasError(false);
      setCurrentStep(1);
      setStage('children');
    }, 500);

    onClose();
  };

  const startStep = () => {
    new Promise((resolve, reject) => {
      setLoading(true);
      //put currentStep < 4 if you want see passing all steps
      if (currentStep < 2) {
        setTimeout(() => resolve(false), 1000);
      } else {
        setTimeout(() => {
          reject(true);
          setHasError(true);
        }, 1000);
      }
    })
      .then((error) => {
        setCurrentStep((prev) => {
          if (error) {
            return prev;
          }

          if (currentStep === steps.length && !successWindow) {
            setTimeout(() => handleStepModalClose(), 1000);

            return prev + 1;
          }

          return prev + 1;
        });
      })
      .catch((error) => {
        console.error(`error is ${error}!`);
        // throw new Error('something went wrong');
      })
      .finally(() => setLoading(false));
  };

  const tryAgain = () => {
    setHasError(false);
    startStep();
  };

  const handleStepModalConfirm = () => {
    if (childrenStageOnConfirm) {
      childrenStageOnConfirm();
    }
    if (steps.length === 1) {
      startStep();
    }

    setAnimate(true);
    setTimeout(() => {
      setStage('followSteps');
      setAnimate(false);
    }, 500);
  };

  const getStepModalTitle = () => {
    if (stage === 'children' && childrenStageTitle) {
      return childrenStageTitle;
    }

    if (stage === 'successWindow') {
      return '';
    }

    return 'Follow steps';
  };

  useEffect(() => {
    if (!children && isOpen) {
      setStage('followSteps');
    }
  }, [children, isOpen]);

  useEffect(() => {
    if (!!successWindow && currentStep === steps.length + 1) {
      setStage('successWindow');
    }
  }, [currentStep, isOpen, steps.length, successWindow]);

  return (
    <Modal
      title={getStepModalTitle()}
      open={isOpen}
      confirmBtnName={confirmBtnName}
      cancelBtnName={cancelBtnName}
      hasFooter={stage === 'children'}
      onConfirm={handleStepModalConfirm}
      onClose={handleStepModalClose}
    >
      <ModalContent isAnimate={isAnimate}>
        {stage === 'children' ? (
          <>{children}</>
        ) : stage === 'successWindow' ? (
          <>{successWindow}</>
        ) : (
          <>
            {steps.map((step) => (
              <StepItemWrapper
                isCurrentStep={currentStep === step.id}
                key={step.id}
              >
                <StepItem
                  step={step}
                  currentStep={currentStep}
                  hasError={hasError}
                  loading={loading}
                />
                {currentStep === step.id && !loading && (
                  <>
                    {!hasError && (
                      <Button
                        onClick={startStep}
                        size={ButtonSize.Large}
                        btnType={ButtonType.Secondary}
                        loading={loading}
                        fullSize
                        failed={hasError}
                      >
                        {startStepBtnName || 'Start now'}
                      </Button>
                    )}
                    {hasError && (
                      <LinkedButtonWrapper>
                        <span>Something went wrong, please</span>&nbsp;
                        <LinkedButton onClick={tryAgain}>
                          try again
                        </LinkedButton>
                      </LinkedButtonWrapper>
                    )}
                  </>
                )}
              </StepItemWrapper>
            ))}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled.div<{ isAnimate: boolean }>`
  width: 384px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${({ isAnimate }) =>
    isAnimate ? 'fadeOut 1s linear forwards' : 'fadeIn 1s linear forwards'};

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @media (${devices.mobile}) {
    width: 300px;
  }
`;

const LinkedButtonWrapper = styled.div`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 16px;
`;

const LinkedButton = styled.span`
  cursor: pointer;
  color: #eb5757;
  font-weight: 600;

  &:hover {
    color: #eb5757ba;
  }
`;

const StepItemWrapper = styled.div<{ isCurrentStep: boolean }>`
  border: ${({ isCurrentStep }) =>
    isCurrentStep ? '1px solid #ffffff' : 'none'};
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  border-radius: 12px;
  padding: 16px;
`;

export default StepModal;
