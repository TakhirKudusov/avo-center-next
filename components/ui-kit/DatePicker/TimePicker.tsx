import { memo, useState } from 'react';
import styled from 'styled-components';
import { THandler } from '../Switch/types';
import { generateHours, handleSelect } from './helpers';
import { TTime } from './types';

type Props = {
  value?: TTime;
  onChange?: THandler<TTime>;
};
const TimerPicker: React.FC<Props> = ({ value, onChange }) => {
  const hours = generateHours();
  const [selected, setSelected] = useState<TTime | undefined>(value);

  return (
    <TimePickerWrapper>
      <TimeHeader>AM</TimeHeader>
      {hours.map((hour, index) => (
        <HourItem
          type="button"
          active={selected?.hour === hour && selected.type === 'am'}
          key={`hour-item-${index}`}
          onClick={handleSelect(hour, 'am', setSelected, onChange)}
        >
          {hour}
        </HourItem>
      ))}
      <TimeHeader>PM</TimeHeader>
      {hours.map((hour, index) => (
        <HourItem
          type="button"
          active={selected?.hour === hour && selected.type === 'pm'}
          key={`hour-item-${index}`}
          onClick={handleSelect(hour, 'pm', setSelected, onChange)}
        >
          {hour}
        </HourItem>
      ))}
    </TimePickerWrapper>
  );
};

const TimePickerWrapper = styled.div`
  width: 408px;
  height: 369px;
  background: #f4f5f6;
  border-radius: 20px;
  padding: 6px 12px;
`;

const TimeHeader = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  padding-bottom: 12px;
  border-bottom: 1px solid #d9d9d9;
  margin-top: 24px;
  margin-bottom: 18px;
`;

const HourItem = styled.button<{ active: boolean }>`
  width: 64px;
  height: 44px;
  border: none;
  border-radius: 10px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #777e91;
  transition: all 0.3s;
  cursor: pointer;
  background: ${({ active }) => (active ? '#45B36B !important' : 'none')};
  color: ${({ active }) => (active ? '#fff' : '#777e91')};

  &:hover {
    background: #eaeaea;
  }
`;

export default memo(TimerPicker);
