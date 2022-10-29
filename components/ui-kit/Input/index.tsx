import { ChangeEventHandler, HTMLInputTypeAttribute, memo } from 'react';
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import styled, { css } from 'styled-components';
import { TFormFieldProps } from '../../../common/types';
import { handleChange } from './helpers';

type Props = {
  hasSchema?: boolean;
  hasError?: boolean;
  placeholder?: string;
  width?: number;
  type?: HTMLInputTypeAttribute;
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  meta?: FieldMetaProps<any>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  isError?: boolean;
};

const Input: React.FC<Props & TFormFieldProps> = ({
  hasError = false,
  hasSchema = false,
  type,
  width,
  placeholder,
  field,
  form,
  onChange,
}) => {
  return (
    <InputItem
      value={field?.value}
      type={type}
      width={width}
      placeholder={placeholder}
      hasError={hasError}
      onChange={handleChange(
        field?.name ?? '',
        form ?? ({} as any),
        hasSchema,
        onChange,
      )}
    />
  );
};

const InputItem = styled.input<{
  width?: number;
  hasError: boolean;
  type?: string;
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
            width: 61.04px;
            height: 24.04px;
            border: 2px solid #e6e8ec;
            border-radius: 8px;
            justify-content: center;
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 12px;
            color: #777e90;
            cursor: pointer;
            background: url('/images/download.png') no-repeat;
            background-size: 16px 16px;
            background-position: left 16px center;
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
          transition: 0.5s;
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
