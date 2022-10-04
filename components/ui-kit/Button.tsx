import { memo } from 'react';
import styled from 'styled-components';
import { ButtonSize } from '../common/enums/buttonSize.enum';
import { ButtonType } from '../common/enums/buttonType.enum';

type Props = {
  size?: ButtonSize;
  type?: ButtonType;
  style?: Object;
  children?: React.ReactNode;
  round?: boolean;
};
const Button: React.FC<Props> = ({
  size = ButtonSize.Medium,
  type = ButtonType.Primary,
  round,
  style,
  children,
}) => {
  return (
    <ButtonBody style={style} size={size} type={type} round={round}>
      {children}
    </ButtonBody>
  );
};

const ButtonBody = styled.button<any>`
  font-size: ${(props) =>
    [ButtonSize.Small, ButtonSize.Medium].includes(props.size)
      ? '14px'
      : '16px'};
  font-weight: 700;
  border: 2px solid;
  border-color: ${(props) =>
    props.type === ButtonType.Primary ? '#e6e8ec' : 'rgba(51, 51, 51, 1)'};
  background: ${(props) =>
    props.type === ButtonType.Primary ? 'none' : 'rgba(51, 51, 51, 1)'};
  color: ${(props) =>
    props.type === ButtonType.Primary ? 'rgba(35, 38, 47, 1)' : '#fff'};
  border-radius: ${(props) => (props.round ? '90px' : '8px')};
  padding: ${(props) =>
    props.size === ButtonSize.Small
      ? '4px 12px'
      : props.size === ButtonSize.Medium
      ? '8px 14px'
      : '10px 24px'};
  height: ${(props) =>
    props.size === ButtonSize.Small
      ? '32px'
      : props.size === ButtonSize.Medium
      ? '40px'
      : '48px'};
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
`;

export default memo(Button);
