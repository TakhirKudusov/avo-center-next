import { ForwardedRef, forwardRef, memo } from 'react';
import styled from 'styled-components';
import LoadingSVG from '../../../assets/svg/loading.svg';
import { ButtonSize, ButtonType } from './enums';

type Props = {
  size?: ButtonSize;
  btnType?: ButtonType;
  style?: Object;
  children?: React.ReactNode;
  round?: boolean;
  loading?: boolean;
  disabled?: boolean;
  failed?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullSize?: boolean;
  onClick?: (e?: any) => void;
  className?: string;
};

const Button: React.FC<Props> = forwardRef(
  (
    {
      size = ButtonSize.Medium,
      btnType = ButtonType.Primary,
      round,
      loading,
      disabled,
      failed,
      style,
      children,
      fullSize = false,
      type = 'button',
      onClick,
      className,
    },
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const getButtonName = () => {
      if (failed) {
        return 'Failed';
      }

      return children;
    };

    return (
      <ButtonBody
        ref={ref}
        btnType={btnType}
        style={style}
        size={size}
        disabled={disabled || failed}
        round={round}
        fullSize={fullSize}
        failed={failed}
        type={type}
        onClick={loading || disabled ? () => null : onClick}
        className={className}
      >
        <ButtonContent>
          {loading ? (
            <LoadingWrapper>
              <LoadingSVG color="#FCFCFD" />
            </LoadingWrapper>
          ) : (
            getButtonName()
          )}
        </ButtonContent>
      </ButtonBody>
    );
  },
);

Button.displayName = 'Button';

const ButtonBody = styled.button<{
  disabled?: boolean;
  size: ButtonSize;
  btnType: ButtonType;
  failed?: boolean;
  round?: boolean;
  fullSize?: boolean;
}>`
  font-weight: 400;
  border: ${({ btnType }) =>
    btnType === ButtonType.Outlined || btnType === ButtonType.Secondary
      ? 'none'
      : '2px solid'};
  box-sizing: border-box;
  font-family: 'Nasalization';
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  font-size: ${({ size }) =>
    [ButtonSize.Small, ButtonSize.Medium].includes(size) ? '14px' : '16px'};
  border-color: ${({ btnType, disabled }) =>
    btnType === ButtonType.Primary || disabled ? '#ffffff' : 'unset'};
  background: ${({ btnType }) => {
    if (btnType === ButtonType.Outlined) {
      return '#fff';
    }

    if (btnType === ButtonType.Primary) {
      return 'none';
    }

    return 'linear-gradient(48.74deg, #CF47FF -3.69%, #FBA04C 100.76%);';
  }};
  color: ${({ btnType, disabled, failed }) => {
    if (!!disabled) {
      return '#777e91';
    }
    if (btnType === ButtonType.Outlined) {
      return '#141416';
    }
    if (btnType === ButtonType.Primary) {
      return '#ffffff';
    }
    if (failed) {
      return '#EF466F';
    }

    return '#fff';
  }};
  border-radius: ${({ round }) => (round ? '90px' : '12px')};
  padding: ${({ size }) =>
    size === ButtonSize.Small
      ? '4px 12px'
      : size === ButtonSize.Medium
      ? '8px 14px'
      : '10px 24px'};
  height: ${({ size }) =>
    size === ButtonSize.Small
      ? '32px'
      : size === ButtonSize.Medium
      ? '40px'
      : '48px'};
  width: ${({ fullSize }) => (fullSize ? '100%' : 'fit-content')};

  &:hover {
    border-color: ${({ btnType, disabled }) => {
      if (btnType === ButtonType.Primary) {
        return 'rgba(255, 255, 255, 0.7)';
      }
      if (disabled) {
        return '#E6E8EC';
      }

      return 'linear-gradient(48.74deg, #CF47FF -3.69%, #FBA04C 100.76%);';
    }};
    background: ${({ btnType, disabled }) => {
      if (disabled) {
        return '#fff';
      }

      if (btnType === ButtonType.Outlined) {
        return 'rgba(255, 255, 255, 0.8)';
      }

      if (btnType === ButtonType.Primary) {
        return 'none';
      }

      return 'linear-gradient(48.74deg, #d15efb -3.69%, #feae63 100.76%);';
    }};
    color: ${({ btnType, disabled }) => {
      if (btnType === ButtonType.Outlined) {
        return 'rgba(35, 38, 47, 0.8)';
      }

      if (disabled) {
        return '#777e91';
      }

      return 'rgba(255, 255, 255, 0.7)';
    }};
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  -webkit-animation: spin 2s linear infinite;
  -moz-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  margin-left: 10px;

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

export default memo(Button);
