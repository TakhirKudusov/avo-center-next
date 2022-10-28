import { ChangeEventHandler, HTMLInputTypeAttribute, memo } from 'react';
import styled from 'styled-components';

type Props = {
  placeholder?: string;
  width?: number;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  isError?: boolean;
};
const Input: React.FC<Props> = ({
  type,
  onChange,
  width,
  placeholder,
  value,
  isError,
}) => {
  return (
    <InputItem
      value={value}
      type={type}
      onChange={onChange}
      width={width}
      placeholder={placeholder}
      isError={isError}
    />
  );
};

const InputItem = styled.input<{ width?: number; isError?: boolean }>`
  font-family: 'Poppins', sans-serif;
  padding: 12px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
  background-color: #fcfcfd;
  border: 2px solid ${({ isError }) => (isError ? '#c7aeb5' : '#e6e8ec')};
  border-radius: 8px;
  outline: none;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  transition: 0.5s;

  &:focus {
    border-color: ${({ isError }) =>
      isError ? 'rgb(192,0,67)' : 'rgba(51, 51, 51, 0.5)'};
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
  }
`;

export default memo(Input);
