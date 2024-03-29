import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import MinusSVG from '../../../assets/svg/minus.svg';
import PlusSVG from '../../../assets/svg/plus.svg';
import { TFormFieldProps } from '../../../common/types';
import { THandler } from '../Switch/types';
import useConnectForm from '../useConnectForm';

type Props = {
  hasSchema?: boolean;
  hasError?: boolean;
  style?: any;
  label?: string;
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  meta?: FieldMetaProps<any>;
  onCountChange?: THandler;
};

const Counter: React.FC<Props & TFormFieldProps> = ({
  hasError = false,
  hasSchema = false,
  field,
  form,
  style,
  label,
  onCountChange,
}) => {
  const [count, setCount] = useState(0);

  useConnectForm(count, form, field, hasSchema, onCountChange);

  const handleCountDown = () => {
    setCount((prev) => {
      const value = prev > 0 ? prev - 1 : prev;

      return value;
    });

    if (field) form?.setFieldValue(field?.name, count);

    if (onCountChange) onCountChange(count);
  };

  const handleCountUp = () => {
    setCount((prev) => {
      const value = prev + 1;

      return value;
    });
  };

  return (
    <>
      {!!label && <CounterLabel htmlFor="counter">{label}</CounterLabel>}
      <CounterWrapper hasError={hasError} id="counter" style={style}>
        <RoundButton
          onClick={handleCountDown}
          type="button"
          style={{ border: 'none' }}
        >
          <MinusSVG color="rgba(255, 255, 255, 0.7)" />
        </RoundButton>
        <CounterValue>{count}</CounterValue>
        <RoundButton
          onClick={handleCountUp}
          type="button"
          style={{ border: 'none' }}
        >
          <PlusSVG color="rgba(255, 255, 255, 0.7)" />
        </RoundButton>
      </CounterWrapper>
    </>
  );
};

const CounterWrapper = styled.div<{ hasError: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border: 2px solid #e6e8ec;
  border-radius: 12px;
  padding: 8px 16px;
  margin-top: 8px;

  border-color: ${(props) => (props.hasError ? '#ef466f' : '#e6e8ec')};
`;

const CounterLabel = styled.label`
  color: #b1b5c3;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
`;

const RoundButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 2px solid #e6e8ec;
  border-radius: 100px;
  background: none;
  cursor: pointer;
`;

const CounterValue = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
`;

export default Counter;
