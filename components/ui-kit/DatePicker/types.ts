type TDate = {
  day: number;
  month: number;
  year: number;
};

type TDateValue = TDate & {
  from: TDate;
  to: TDate;
  isStandard?: boolean;
  isWeekend?: boolean;
  isDisabled?: boolean;
};

type TTimeType = 'am' | 'pm';

type TTime = {
  hour: string;
  type: TTimeType;
};

type TDateTime = {
  date: TDateValue;
  time: TTime | undefined;
};

export {
  type TDateValue,
  type TDate,
  type TTime,
  type TTimeType,
  type TDateTime,
};
