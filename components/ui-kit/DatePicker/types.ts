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

export { type TDateValue, type TDate };
