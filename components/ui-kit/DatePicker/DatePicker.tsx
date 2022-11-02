import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import { memo, useState } from 'react';
import styled from 'styled-components';
import { TFormFieldProps } from '../../../common/types';
import Tooltip from '../Tooltip';
import useConnectForm from '../useConnectForm';
import DatePickerElement from './DatePickerElement';
import { TDateValue } from './types';

type Props = {
  hasError?: boolean;
  hasSchema?: boolean;
  value?: TDateValue;
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
  const [selectedDayRange, setSelectedDayRange] = useState<TDateValue>(
    value ?? defaultValue,
  );

  const handleChange = (value: TDateValue) => {
    setSelectedDayRange(value);
  };

  useConnectForm(selectedDayRange, form, field, hasSchema, onChange);

  const fromDate = selectedDayRange.from;
  const toDate = selectedDayRange.to;

  return (
    <div>
      <Tooltip
        content={
          <DatePickerElement
            value={selectedDayRange}
            onChange={handleChange}
            colorPrimary="#27AE60" // added this
            colorPrimaryLight="rgba(111, 207, 151, 0.2)" // and this
            shouldHighlightWeekends
            renderInput={() => <></>}
          />
        }
      >
        <DatePickerField style={style} hasError={hasError}>
          <DateTimeValue>
            {!!fromDate && (
              <>
                {fromDate.day}.{fromDate.month}.{fromDate.year}
              </>
            )}{' '}
            -{' '}
            {!!toDate && (
              <>
                {toDate.day}.{toDate.month}.{toDate.year}
              </>
            )}
          </DateTimeValue>
          <DateTimeValue>12:06</DateTimeValue>
        </DatePickerField>
      </Tooltip>
    </div>
  );
};

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
