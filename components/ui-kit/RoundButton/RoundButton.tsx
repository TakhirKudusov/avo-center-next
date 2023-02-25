import { MouseEventHandler } from 'react';
import styled, { CSSProperties } from 'styled-components';

type Props = {
  icon: JSX.Element;
  id?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const RoundButton = ({ id, icon, onClick, ...rest }: Props) => {
  return (
    <ButtonWrapper id={id} onClick={onClick} {...rest}>
      {icon}
    </ButtonWrapper>
  );
};

export default RoundButton;

const ButtonWrapper = styled.button`
  border: 2px solid #e6e8ecab;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 8px;

  &:hover {
    border-color: #ffffff;
    background: rgba(#fff, 0.8);
  }
`;
