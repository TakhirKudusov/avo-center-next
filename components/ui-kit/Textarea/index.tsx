import React, { ChangeEventHandler, HTMLInputTypeAttribute, memo } from 'react';
import styled from 'styled-components';

type Props = {
  placeholder?: string;
  width?: number;
  height?: number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  hasError?: boolean;
};

const Textarea = ({
  placeholder,
  width,
  height,
  onChange,
  value,
  hasError,
}: Props) => {
  return (
    <Textarea.StyledTextarea
      placeholder={placeholder}
      width={width}
      height={height}
      onChange={onChange}
      value={value}
      hasError={hasError}
    />
  );
};

const StyledTextarea = styled.textarea<{
  width?: number;
  height?: number;
  hasError?: boolean;
}>`
  font-family: 'Poppins', sans-serif;
  background-color: #fcfcfd;
  padding: 12px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
  border: 2px solid ${({ hasError }) => (hasError ? '#c7aeb5' : '#e6e8ec')};
  border-radius: 8px;
  outline: none;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  resize: none;
  &:focus {
    border-color: ${({ hasError }) =>
      hasError ? 'rgb(192,0,67)' : 'rgba(51, 51, 51, 0.5)'};
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
  }
`;

Textarea.StyledTextarea = StyledTextarea;

export default memo(Textarea);
