import styled from 'styled-components';

type Props = {
  style: any;
};
export const DatePicker: React.FC<Props> = ({ style }) => {
  return (
    <DatePickerField style={style}>
      <DateTimeValue>8.14.2022</DateTimeValue>
      <DateTimeValue>12:06</DateTimeValue>
    </DatePickerField>
  );
};

const DatePickerField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 2px solid #e6e8ec;
  border-radius: 12px;
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

export default DatePicker;
