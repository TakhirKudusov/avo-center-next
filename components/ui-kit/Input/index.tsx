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
  onChange?: (value: string | number) => void;
  isError?: boolean;
  className?: string;
  min?: number;
  max?: number;
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
  className,
  min,
  max,
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

  // useEffect(() => {
  //   if (form?.dirty && field?.name) {
  //     const elem = document.getElementById(field?.name);
  //     console.log('innerText', elem?.setAttribute('value', ''));

  //     if (elem) elem?.setAttribute('value', '');
  //   }
  // });

  // console.log('value', form?.values[field?.name!]);

  return (
    <InputItem
      id={field?.name}
      value={form?.values[field?.name!]}
      type={type}
      width={width}
      placeholder={placeholder}
      hasError={hasError}
      onChange={handleChange}
      className={className}
      min={min}
      max={max}
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
          font-family: 'Montserrat';
          padding: 12px 16px;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: #ffffff;
          background: none;
          border: 2px solid;
          border-radius: 12px;
          outline: none;
          width: ${width ? `${width}px` : '100%'};
          border-color: ${hasError ? '#ef466f' : 'rgba(255, 255, 255, 0.6)'};
          &::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }

          &:focus {
            border-color: ${hasError ? 'rgb(192,0,67)' : '#ffffff'};
            box-shadow: 0 5px 20px 0 rgb(0 0 0 / 25%);
          }
        `;
    }
  }}
`;

export default memo(Input);
