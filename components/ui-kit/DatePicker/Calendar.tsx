import React, { useState, useRef, useEffect } from 'react';

import {
  getDateAccordingToMonth,
  shallowClone,
  getValueType,
} from './shared/generalUtils';
import {
  TYPE_SINGLE_DATE,
  TYPE_RANGE,
  TYPE_MUTLI_DATE,
} from './shared/constants';
import { useLocaleUtils, useLocaleLanguage } from './shared/hooks';

import { Header, MonthSelector, YearSelector, DaysList } from './components';
import { TDate, TDateValue } from './types';
import { THandler } from '../Switch/types';

type Props = {
  value: any;
  onChange: THandler<TDateValue>;
  calendarClassName: string;
  calendarTodayClassName: string;
  calendarSelectedDayClassName: string;
  calendarRangeStartClassName: string;
  calendarRangeBetweenClassName: string;
  calendarRangeEndClassName: string;
  disabledDays: number[];
  onDisabledDayError: THandler;
  colorPrimary: string;
  colorPrimaryLight: string;
  slideAnimationDuration: string;
  minimumDate?: TDate | null;
  maximumDate?: TDate | null;
  selectorStartingYear: number;
  selectorEndingYear: number;
  locale: string;
  shouldHighlightWeekends: boolean;
  renderFooter: () => JSX.Element | null;
  customDaysClassName: string[];
};
const Calendar: React.FC<Props> = ({
  value,
  onChange,
  onDisabledDayError,
  calendarClassName,
  calendarTodayClassName,
  calendarSelectedDayClassName,
  calendarRangeStartClassName,
  calendarRangeBetweenClassName,
  calendarRangeEndClassName,
  disabledDays,
  colorPrimary,
  colorPrimaryLight,
  slideAnimationDuration,
  minimumDate,
  maximumDate,
  selectorStartingYear,
  selectorEndingYear,
  locale,
  shouldHighlightWeekends,
  renderFooter,
  customDaysClassName,
}) => {
  const calendarElement = useRef<HTMLDivElement>(null);
  const [mainState, setMainState] = useState<{
    activeDate: TDate | null;
    monthChangeDirection: string;
    isMonthSelectorOpen: boolean;
    isYearSelectorOpen: boolean;
  }>({
    activeDate: null,
    monthChangeDirection: '',
    isMonthSelectorOpen: false,
    isYearSelectorOpen: false,
  });

  useEffect(() => {
    const handleKeyUp = ({ key }: any) => {
      /* istanbul ignore else */
      if (key === 'Tab')
        calendarElement.current?.classList.remove('-noFocusOutline');
    };
    calendarElement.current?.addEventListener('keyup', handleKeyUp, false);
    return () => {
      calendarElement.current?.removeEventListener('keyup', handleKeyUp, false);
    };
  });

  const { getToday } = useLocaleUtils(locale);
  const { weekDays: weekDaysList, isRtl } = useLocaleLanguage(locale);
  const today = getToday();

  const createStateToggler = (property: string) => () => {
    setMainState({ ...mainState, [property]: !(mainState as any)[property] });
  };

  const toggleMonthSelector = createStateToggler('isMonthSelectorOpen');
  const toggleYearSelector = createStateToggler('isYearSelectorOpen');

  const getComputedActiveDate = (): any => {
    const valueType = getValueType(value);
    if (valueType === TYPE_MUTLI_DATE && value.length)
      return shallowClone(value[0]);
    if (valueType === TYPE_SINGLE_DATE && value) return shallowClone(value);
    if (valueType === TYPE_RANGE && value.from) return shallowClone(value.from);
    return shallowClone(today);
  };

  const activeDate = mainState.activeDate
    ? shallowClone(mainState.activeDate)
    : getComputedActiveDate();

  const weekdays = weekDaysList.map((weekDay: any) => (
    <abbr key={weekDay.name} title={weekDay.name} className="Calendar__weekDay">
      {weekDay.short}
    </abbr>
  ));

  const handleMonthChange = (direction: string) => {
    setMainState({
      ...mainState,
      monthChangeDirection: direction,
    });
  };

  const updateDate = () => {
    setMainState({
      ...mainState,
      activeDate: getDateAccordingToMonth(
        activeDate,
        mainState.monthChangeDirection,
      ),
      monthChangeDirection: '',
    });
  };

  const selectMonth = (newMonthNumber: number) => {
    setMainState({
      ...mainState,
      activeDate: { ...activeDate, month: newMonthNumber },
      isMonthSelectorOpen: false,
    });
  };

  const selectYear = (year: number) => {
    setMainState({
      ...mainState,
      activeDate: { ...activeDate, year },
      isYearSelectorOpen: false,
    });
  };

  return (
    <div
      className={`Calendar -noFocusOutline ${calendarClassName} -${
        isRtl ? 'rtl' : 'ltr'
      }`}
      role="grid"
      style={
        {
          '--cl-color-primary': colorPrimary,
          '--cl-color-primary-light': colorPrimaryLight,
          '--animation-duration': slideAnimationDuration,
        } as any
      }
      ref={calendarElement}
    >
      <Header
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        activeDate={activeDate}
        onMonthChange={handleMonthChange}
        onMonthSelect={toggleMonthSelector}
        onYearSelect={toggleYearSelector}
        monthChangeDirection={mainState.monthChangeDirection}
        isMonthSelectorOpen={mainState.isMonthSelectorOpen}
        isYearSelectorOpen={mainState.isYearSelectorOpen}
        locale={locale}
      />

      <MonthSelector
        isOpen={mainState.isMonthSelectorOpen}
        activeDate={activeDate}
        onMonthSelect={selectMonth}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        locale={locale}
      />

      <YearSelector
        isOpen={mainState.isYearSelectorOpen}
        activeDate={activeDate}
        onYearSelect={selectYear}
        selectorStartingYear={selectorStartingYear}
        selectorEndingYear={selectorEndingYear}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        locale={locale}
      />

      <div className="Calendar__weekDays">{weekdays}</div>

      <DaysList
        activeDate={activeDate}
        value={value}
        monthChangeDirection={mainState.monthChangeDirection}
        onSlideChange={updateDate}
        disabledDays={disabledDays}
        onDisabledDayError={onDisabledDayError}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        onChange={onChange}
        calendarTodayClassName={calendarTodayClassName}
        calendarSelectedDayClassName={calendarSelectedDayClassName}
        calendarRangeStartClassName={calendarRangeStartClassName}
        calendarRangeEndClassName={calendarRangeEndClassName}
        calendarRangeBetweenClassName={calendarRangeBetweenClassName}
        locale={locale}
        shouldHighlightWeekends={shouldHighlightWeekends}
        customDaysClassName={customDaysClassName}
        isQuickSelectorOpen={
          mainState.isYearSelectorOpen || mainState.isMonthSelectorOpen
        }
      />
      <div className="Calendar__footer">{renderFooter()}</div>
    </div>
  );
};

Calendar.defaultProps = {
  minimumDate: null,
  maximumDate: null,
  colorPrimary: '#0eca2d',
  colorPrimaryLight: '#cff4d5',
  slideAnimationDuration: '0.4s',
  calendarClassName: '',
  locale: 'en',
  value: null,
  renderFooter: () => null,
  customDaysClassName: [],
};

export { Calendar };
