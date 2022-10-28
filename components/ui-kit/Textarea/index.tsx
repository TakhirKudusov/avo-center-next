import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

type Props = {
  placeholder?: string;
  width?: number;
  height?: number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  isError?: boolean;
};

const Textarea = ({
  placeholder,
  width,
  height,
  onChange,
  value,
  isError,
}: Props) => {
  return (
    <Textarea.TextareaItem
      placeholder={placeholder}
      width={width}
      height={height}
      onChange={onChange}
      value={value}
      isError={isError}
    />
  );
};

const TextareaItem = styled.textarea<{
  width?: number;
  height?: number;
  isError?: boolean;
}>`
  font-family: 'Poppins', sans-serif;
  background-color: #fcfcfd;
  padding: 12px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
  border: 2px solid ${({ isError }) => (isError ? '#c7aeb5' : '#e6e8ec')};
  border-radius: 8px;
  outline: none;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  resize: none;
  transition: 0.5s;
  &:focus {
    border-color: ${({ isError }) =>
      isError ? 'rgb(192,0,67)' : 'rgba(51, 51, 51, 0.5)'};
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
  }
`;

Textarea.TextareaItem = TextareaItem;

export default Textarea;
