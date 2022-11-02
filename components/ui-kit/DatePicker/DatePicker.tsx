import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import { memo, useState } from 'react';
import styled from 'styled-components';
import { TFormFieldProps } from '../../../common/types';
import Tooltip from '../Tooltip';
import useConnectForm from '../useConnectForm';
import DatePickerElement from './DatePickerElement';
import { handleDateChange, handleTimeChange } from './helpers';
import TimePicker from './TimePicker';
import { TDateTime } from './types';

type Props = {
  hasError?: boolean;
  hasSchema?: boolean;
  value?: TDateTime;
  style?: any;
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  meta?: FieldMetaProps<any>;
  onChange?: (value: any) => void;
};
export const DatePicker: React.FC<Props & TFormFieldProps> = ({
  hasError = false,
  hasSchema = false,
  style,
  field,
  form,
  value,
  onChange,
}) => {
  const defaultFrom = null;
  const defaultTo = null;
  const defaultValue = {
    from: defaultFrom,
    to: defaultTo,
  } as any;
  const [selectedDateTime, setSelectedDateTime] = useState<TDateTime>({
    date: value?.date ?? defaultValue,
    time: value?.time,
  });
  const { date, time } = selectedDateTime;

  useConnectForm(selectedDateTime, form, field, hasSchema, onChange);

  return (
    <div>
      <Tooltip
        content={
          <PickersWrapper>
            <PickerItem>
              <PickerTitle>Date</PickerTitle>
              <DatePickerElement
                value={selectedDateTime.date}
                onChange={handleDateChange(setSelectedDateTime)}
                colorPrimary="#27AE60" // added this
                colorPrimaryLight="rgba(111, 207, 151, 0.2)" // and this
                shouldHighlightWeekends
                renderInput={() => <></>}
              />
            </PickerItem>
            <PickerItem>
              <PickerTitle>Time</PickerTitle>
              <TimePicker
                value={selectedDateTime.time}
                onChange={handleTimeChange(setSelectedDateTime)}
              />
            </PickerItem>
          </PickersWrapper>
        }
      >
        <DatePickerField style={style} hasError={hasError}>
          <DateTimeValue>
            {!!date.from && (
              <>
                {date.from.day}.{date.from.month}.{date.from.year}
              </>
            )}
            {' - '}
            {!!date.to && (
              <>
                {date.to.day}.{date.to.month}.{date.to.year}
              </>
            )}
          </DateTimeValue>
          <DateTimeValue>
            {`${time?.hour ?? ''} ${time?.type ?? ''}`}
          </DateTimeValue>
        </DatePickerField>
      </Tooltip>
    </div>
  );
};

const PickersWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 33px;
  padding: 0 20px;
`;

const PickerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PickerTitle = styled.div`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #b1b5c4;
`;

const DatePickerField = styled.div<{
  hasError: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 2px solid #e6e8ec;
  border-radius: 12px;
  border-color: ${(props) => (props.hasError ? '#ef466f' : '#e6e8ec')};
  cursor: pointer;
`;

const DateTimeValue = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #777e91;
`;

export default memo(DatePicker);
