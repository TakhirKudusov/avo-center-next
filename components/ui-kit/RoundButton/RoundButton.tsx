import { MouseEventHandler } from 'react';
import styled from 'styled-components';

type Props = {
  icon: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const RoundButton = ({ icon, onClick, ...rest }: Props) => {
  return (
    <ButtonWrapper onClick={onClick} {...rest}>
      {icon}
    </ButtonWrapper>
  );
};

export default RoundButton;

const ButtonWrapper = styled.button`
  border: 2px solid #e6e8ec;
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
    border-color: rgba(51, 51, 51, 0.5);
    background: rgba(#fff, 0.8);
  }
`;
