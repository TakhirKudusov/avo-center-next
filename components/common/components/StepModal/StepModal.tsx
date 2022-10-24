import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

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

          if (currentStep === steps.length) {
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

    return 'Follow steps';
  };

  useEffect(() => {
    if (!children && isOpen) {
      setStage('followSteps');
    }
  }, [children, isOpen]);

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
        ) : (
          <>
            {steps.map((step) => (
              <div key={step.id}>
                <StepItem
                  step={step}
                  currentStep={currentStep}
                  hasError={hasError}
                  loading={loading}
                />
                {currentStep === step.id && (
                  <>
                    <Button
                      onClick={startStep}
                      size={ButtonSize.Large}
                      type={ButtonType.Secondary}
                      loading={loading}
                      fullSize
                      failed={hasError}
                    >
                      {startStepBtnName || 'Start now'}
                    </Button>
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
              </div>
            ))}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled.div<{ isAnimate: boolean }>`
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
`;

const LinkedButtonWrapper = styled.div`
  font-family: 'Poppins';
  margin-top: 16px;
`;

const LinkedButton = styled.span`
  cursor: pointer;
  color: #3772ff;

  &:hover {
    color: rgba(55, 114, 255, 0.7);
  }
`;

export default StepModal;
