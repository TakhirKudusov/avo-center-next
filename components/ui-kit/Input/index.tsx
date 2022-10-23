import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

type Props = {
  placeholder?: string;
  width?: number;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
const Input: React.FC<Props> = ({ type, onChange, width, placeholder }) => {
  return (
    <InputItem
      type={type}
      onChange={onChange}
      width={width}
      placeholder={placeholder}
    />
  );
};

const InputItem = styled.input<{ width?: number }>`
  font-family: 'Poppins', sans-serif;
  padding: 12px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  outline: none;
  width: ${({ width }) => width || '100%'};

  &:focus {
    border-color: rgba(51, 51, 51, 0.5);
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
  }
`;

export default Input;
