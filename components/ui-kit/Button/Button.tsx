import { memo } from 'react';
import styled from 'styled-components';
import LoadingSVG from '../../../assets/svg/loading.svg';
import { ButtonSize, ButtonType } from './enums';

type Props = {
  size?: ButtonSize;
  type?: ButtonType;
  style?: Object;
  children?: React.ReactNode;
  round?: boolean;
  loading?: boolean;
  disabled?: boolean;
  failed?: boolean;
  fullSize?: boolean;
  onClick?: () => void;
};
const Button: React.FC<Props> = ({
  size = ButtonSize.Medium,
  type = ButtonType.Primary,
  round,
  loading,
  disabled,
  failed,
  style,
  children,
  fullSize = false,
  onClick,
}) => {
  const getButtonName = () => {
    if (failed) {
      return 'Failed';
    }

    return children;
  };

  return (
    <ButtonBody
      style={style}
      size={size}
      btnType={type}
      disabled={disabled || failed}
      round={round}
      fullSize={fullSize}
      failed={failed}
      onClick={loading || disabled ? () => null : onClick}
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
};

const ButtonBody = styled.button<{
  disabled?: boolean;
  size: ButtonSize;
  btnType: ButtonType;
  failed?: boolean;
  round?: boolean;
  fullSize?: boolean;
}>`
  font-weight: 700;
  border: ${({ btnType }) =>
    btnType === ButtonType.Outlined ? 'none' : '2px solid'};
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  transition: all 0.3s;
  font-size: ${({ size }) =>
    [ButtonSize.Small, ButtonSize.Medium].includes(size) ? '14px' : '16px'};
  border-color: ${({ btnType, disabled }) =>
    btnType === ButtonType.Primary || disabled
      ? '#e6e8ec'
      : 'rgba(51, 51, 51, 1)'};
  background: ${({ btnType, disabled }) => {
    if (btnType !== ButtonType.Secondary || disabled) {
      return 'none';
    }

    return 'rgba(51, 51, 51, 1)';
  }};
  color: ${({ btnType, disabled, failed }) => {
    if (btnType === ButtonType.Outlined) {
      return '#777E91';
    }
    if (btnType === ButtonType.Primary) {
      return 'rgba(35, 38, 47, 1)';
    }
    if (failed) {
      return '#EF466F';
    }
    if (disabled) {
      return '#777e91';
    }

    return '#fff';
  }};
  border-radius: ${({ round }) => (round ? '90px' : '8px')};
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
        return 'rgba(#e6e8ec, 0.8)';
      }
      if (disabled) {
        return '#E6E8EC';
      }

      return 'rgba(51, 51, 51, 0.8)';
    }};
    background: ${({ btnType, disabled }) => {
      if (btnType !== ButtonType.Secondary || disabled) {
        return 'none';
      }

      return 'rgba(51, 51, 51, 0.8)';
    }};
    color: ${({ btnType }) =>
      btnType === ButtonType.Primary
        ? 'rgba(35, 38, 47, 0.8)'
        : 'rgba(#fff, 0.8)'};
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
