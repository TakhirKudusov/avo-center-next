import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import MinusSVG from '../../../assets/svg/minus.svg';
import PlusSVG from '../../../assets/svg/plus.svg';

type Props = {
  style?: any;
  label?: string;
  onCountChange?: (value: number) => void;
};

const Counter: React.FC<Props> = ({ style, label, onCountChange }) => {
  const [count, setCount] = useState(0);

  const handleCountDown =
    (setCount: Dispatch<SetStateAction<number>>) => () => {
      setCount((prev) => {
        if (onCountChange) {
          onCountChange(prev - 1);
        }
        return prev > 0 ? prev - 1 : prev;
      });
    };

  const handleCountUp = (setCount: Dispatch<SetStateAction<number>>) => () => {
    setCount((prev) => {
      if (onCountChange) {
        onCountChange(prev + 1);
      }
      return prev + 1;
    });
  };

  return (
    <>
      <CounterLabel htmlFor="counter">{label}</CounterLabel>
      <CounterWrapper id="counter" style={style}>
        <RoundButton onClick={handleCountDown(setCount)} type="button">
          <MinusSVG />
        </RoundButton>
        <CounterValue>{count}</CounterValue>
        <RoundButton onClick={handleCountUp(setCount)} type="button">
          <PlusSVG />
        </RoundButton>
      </CounterWrapper>
    </>
  );
};

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border: 2px solid #e6e8ec;
  border-radius: 12px;
  padding: 8px 16px;
  margin-top: 10px;
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
