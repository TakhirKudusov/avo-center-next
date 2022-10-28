import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import MinusSVG from '../../../assets/svg/minus.svg';
import PlusSVG from '../../../assets/svg/plus.svg';
import { TFormFieldProps } from '../../../common/types';
import { THandler } from '../Switch/types';
import { handleCountDown, handleCountUp } from './helpers';

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

  return (
    <>
      {!!label && <CounterLabel htmlFor="counter">{label}</CounterLabel>}
      <CounterWrapper hasError={hasError} id="counter" style={style}>
        <RoundButton
          onClick={handleCountDown(
            field?.name ?? '',
            form ?? ({} as any),
            hasSchema,
            onCountChange,
            setCount,
          )}
          type="button"
        >
          <MinusSVG />
        </RoundButton>
        <CounterValue>{count}</CounterValue>
        <RoundButton
          onClick={handleCountUp(
            field?.name ?? '',
            form ?? ({} as any),
            hasSchema,
            onCountChange,
            setCount,
          )}
          type="button"
        >
          <PlusSVG />
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

  border-color: ${(props) => (props.hasError ? '#ef466f' : '#e6e8ec')};
`;

const CounterLabel = styled.label`
  color: #b1b5c3;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
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
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
`;

export default Counter;
