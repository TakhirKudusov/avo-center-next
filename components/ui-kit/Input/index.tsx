import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  memo,
  useEffect,
  useState,
} from 'react';
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import styled, { css } from 'styled-components';
import { TFormFieldProps } from '../../../common/types';
import useConnectForm from '../useConnectForm';

type Props = {
  value: string | number;
  hasSchema?: boolean;
  hasError?: boolean;
  placeholder?: string;
  width?: number;
  type?: HTMLInputTypeAttribute;
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  meta?: FieldMetaProps<any>;
  onChange?: (value: string | number) => void;
  isError?: boolean;
};

const Input: React.FC<Props & TFormFieldProps> = ({
  hasError = false,
  hasSchema = false,
  type,
  width,
  value,
  placeholder,
  field,
  form,
  onChange,
}) => {
  const [curValue, setCurValue] = useState<string | number>(field?.value || '');

  const inputValue = value ?? curValue;

  useConnectForm(curValue, form, field, hasSchema, onChange);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCurValue(event.target.value);
  };

  return (
    <InputItem
      value={inputValue}
      type={type}
      width={width}
      placeholder={placeholder}
      hasError={hasError}
      onChange={handleChange}
    />
  );
};

const InputItem = styled.input<{
  hasError: boolean;
  type?: string;
  width?: number;
}>`
  ${({ type, width, hasError }) => {
    switch (type) {
      case 'file':
        return css`
          &::-webkit-file-upload-button {
            visibility: hidden;
          }

          &::before {
            display: inline-flex;
            content: 'Upload ID';
            padding-top: 12px;
            padding-left: 44px;
            padding-right: 16px;
            width: 61px;
            height: 24px;
            border: 2px solid #e6e8ec;
            border-radius: 8px;
            justify-content: center;
            font-family: 'DM Sans';
            font-weight: 700;
            font-size: 14px;
            line-height: 12px;
            color: #777e90;
            cursor: pointer;
            background: url('/images/download.png') no-repeat left 16px center;
            background-size: 16px 16px;
          }
        `;
      default:
        return css`
          font-family: 'Poppins', sans-serif;
          padding: 12px 16px;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: #777e91;
          background-color: #fcfcfd;
          border: 2px solid ${hasError ? '#c7aeb5' : '#e6e8ec'};
          border-radius: 8px;
          outline: none;
          width: ${width ? `${width}px` : '100%'};
          border-color: ${hasError ? '#ef466f' : '#e6e8ec'};
          &:focus {
            border-color: ${hasError
              ? 'rgb(192,0,67)'
              : 'rgba(51, 51, 51, 0.5)'};
            box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
          }
        `;
    }
  }}
`;

export default memo(Input);
