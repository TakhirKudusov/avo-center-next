import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import React, { ChangeEventHandler, memo, useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { TFormFieldProps } from '../../../common/types';
import useConnectForm from '../useConnectForm';

type Props = {
  placeholder?: string;
  width?: number;
  height?: number;
  value: string | number;
  hasSchema?: boolean;
  hasError?: boolean;
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  meta?: FieldMetaProps<any>;
  hasResize?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

const Textarea: React.FC<Props & TFormFieldProps> & {
  StyledTextarea: StyledComponent<any, any, any, any>;
} = ({
  placeholder,
  width,
  height,
  value,
  hasError,
  field,
  form,
  hasSchema,
  hasResize,
  onChange,
}) => {
  const [curValue, setCurValue] = useState<string | number>(
    field?.value || value,
  );

  // const inputValue = value ?? curValue;

  useConnectForm(curValue, form, field, hasSchema, onChange);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCurValue(event.target.value);
    form?.setFieldValue(field?.name!, event.target.value);
  };

  return (
    <Textarea.StyledTextarea
      placeholder={placeholder}
      width={width}
      height={height}
      onChange={handleChange}
      value={form?.values[field?.name!]}
      hasError={hasError}
      hasResize={hasResize}
    />
  );
};

const StyledTextarea = styled.textarea<{
  width?: number;
  height?: number;
  hasError?: boolean;
  hasResize?: boolean;
}>`
  font-family: 'Montserrat';
  background: none;
  padding: 12px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  border: 2px solid;
  border-color: ${({ hasError }) =>
    hasError ? '#ef466f' : 'rgba(255, 255, 255, 0.6)'};
  border-radius: 12px;
  outline: none;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  resize: ${({ hasResize }) => (hasResize ? 'vertical' : 'none')};
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-color: ${({ hasError }) => (hasError ? 'rgb(192,0,67)' : '#ffffff')};
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 25%);
  }
`;

Textarea.StyledTextarea = StyledTextarea;

export default memo(Textarea);
