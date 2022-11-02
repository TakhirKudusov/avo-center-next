import { Dispatch, SetStateAction } from 'react';
import { generateArrayOfNumbers } from '../../../common/helpers';
import { THandler } from '../Switch/types';
import { TDateTime, TDateValue, TTime, TTimeType } from './types';

const generateHours = (): string[] => {
  return generateArrayOfNumbers(12).map(
    (number) => `${(+number + 1).toString().padStart(2, '0')}:00`,
  );
};

const handleSelect =
  (
    hour: string,
    type: TTimeType,
    setSelected: Dispatch<SetStateAction<TTime | undefined>>,
    onChange: THandler<TTime>,
  ) =>
  () => {
    setSelected({ hour, type });

    if (onChange) {
      onChange({ hour, type });
    }
  };

const handleDateChange =
  (setSelectedDateTime: Dispatch<SetStateAction<TDateTime>>) =>
  (value: TDateValue) => {
    setSelectedDateTime((prev) => ({ ...prev, date: value }));
  };

const handleTimeChange =
  (setSelectedDateTime: Dispatch<SetStateAction<TDateTime>>) =>
  (value: TTime) => {
    setSelectedDateTime((prev) => ({ ...prev, time: value }));
  };

export { generateHours, handleSelect, handleDateChange, handleTimeChange };
