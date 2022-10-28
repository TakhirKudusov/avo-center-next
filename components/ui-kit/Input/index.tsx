import { FieldProps } from 'formik';
import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';
import { handleChange } from './helpers';

type Props = {
  hasSchema: boolean;
  hasError: boolean;
  placeholder?: string;
  width?: number;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
const Input: React.FC<Props & FieldProps> = ({
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
      onChange={handleChange(field?.name, form, hasSchema, onChange)}
    />
  );
};

const InputItem = styled.input<{ width?: number; hasError: boolean }>`
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
  border-color: ${(props) => (props.hasError ? '#ef466f' : '#e6e8ec')};

  &:focus {
    border-color: rgba(51, 51, 51, 0.5);
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
  }
`;

export default Input;
