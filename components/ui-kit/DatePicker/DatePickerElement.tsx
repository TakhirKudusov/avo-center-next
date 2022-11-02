import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  memo,
} from 'react';

import { Calendar } from './Calendar';
import DatePickerInput from './DatePickerInput';
import { getValueType } from './shared/generalUtils';
import {
  TYPE_SINGLE_DATE,
  TYPE_MUTLI_DATE,
  TYPE_RANGE,
} from './shared/constants';
import { THandler } from '../Switch/types';
import { TDate, TDateValue } from './types';

type Props = {
  value?: TDateValue | TDateValue[];
  onChange?: THandler<TDateValue>;
  formatInputText?: () => string;
  inputPlaceholder?: string;
  inputClassName?: string;
  inputName?: string;
  renderInput?: (ref: any) => JSX.Element | null;
  wrapperClassName?: string;
  calendarClassName?: string;
  calendarTodayClassName?: string;
  calendarSelectedDayClassName?: string;
  calendarRangeStartClassName?: string;
  calendarRangeBetweenClassName?: string;
  calendarRangeEndClassName?: string;
  calendarPopperPosition?: string;
  disabledDays?: number[];
  onDisabledDayError?: THandler;
  colorPrimary?: string;
  colorPrimaryLight?: string;
  slideAnimationDuration?: string;
  minimumDate?: TDate;
  maximumDate?: TDate;
  selectorStartingYear?: number;
  selectorEndingYear?: number;
  locale?: string;
  shouldHighlightWeekends?: boolean;
  renderFooter?: () => JSX.Element;
  customDaysClassName?: string[];
};
const DatePickerElement: React.FC<Props> = ({
  value,
  onChange,
  formatInputText,
  inputPlaceholder,
  inputClassName,
  inputName,
  renderInput,
  wrapperClassName,
  calendarClassName,
  calendarTodayClassName,
  calendarSelectedDayClassName,
  calendarRangeStartClassName,
  calendarRangeBetweenClassName,
  calendarRangeEndClassName,
  calendarPopperPosition,
  disabledDays,
  onDisabledDayError,
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
  const calendarContainerElement = useRef<HTMLDivElement>(null);
  const inputElement = useRef<HTMLInputElement>(null);
  const shouldPreventToggle = useRef(false);
  const [isCalendarOpen, setCalendarVisiblity] = useState(false);

  useEffect(() => {
    const handleBlur = () => {
      setCalendarVisiblity(false);
    };
    window.addEventListener('blur', handleBlur, false);
    return () => {
      window.removeEventListener('blur', handleBlur, false);
    };
  }, []);

  // handle input focus/blur
  useEffect(() => {
    const valueType = getValueType(value!);
    if (valueType === TYPE_MUTLI_DATE) return; // no need to close the calendar
    const shouldCloseCalendar =
      valueType === TYPE_SINGLE_DATE
        ? !isCalendarOpen
        : !isCalendarOpen && !Array.isArray(value) && value?.from && value?.to;
    if (shouldCloseCalendar) (inputElement.current as any)?.blur();
  }, [value, isCalendarOpen]);

  const handleBlur = (e: any) => {
    e.persist();
    if (!isCalendarOpen) return;
    const isInnerElementFocused = calendarContainerElement.current?.contains(
      e.relatedTarget,
    );
    if (shouldPreventToggle.current) {
      shouldPreventToggle.current = false;
      calendarContainerElement.current?.focus();
    } else if (isInnerElementFocused && e.relatedTarget) {
      e.relatedTarget.focus();
    } else {
      setCalendarVisiblity(false);
    }
  };

  const openCalendar = () => {
    if (!shouldPreventToggle.current) setCalendarVisiblity(true);
  };

  // Keep the calendar in the screen bounds if input is near the window edges
  useLayoutEffect(() => {
    if (!isCalendarOpen) return;
    const { left, width, height, top } =
      calendarContainerElement.current!.getBoundingClientRect();
    const { clientWidth, clientHeight } = document.documentElement;
    const isOverflowingFromRight = left + width > clientWidth;
    const isOverflowingFromLeft = left < 0;
    const isOverflowingFromBottom = top + height > clientHeight;

    const getLeftStyle = () => {
      const overflowFromRightDistance = left + width - clientWidth;

      if (!isOverflowingFromRight && !isOverflowingFromLeft) return;
      const overflowFromLeftDistance = Math.abs(left);
      const rightPosition = isOverflowingFromLeft
        ? overflowFromLeftDistance
        : 0;

      const leftStyle = isOverflowingFromRight
        ? `calc(50% - ${overflowFromRightDistance}px)`
        : `calc(50% + ${rightPosition}px)`;
      return leftStyle;
    };

    calendarContainerElement.current!.style.left = getLeftStyle()!;
    if (
      (calendarPopperPosition === 'auto' && isOverflowingFromBottom) ||
      calendarPopperPosition === 'top'
    ) {
      calendarContainerElement.current!.classList.add('-top');
    }
  }, [isCalendarOpen]);

  const handleCalendarChange = (newValue: TDateValue) => {
    const valueType = getValueType(value!);
    if (onChange) {
      onChange(newValue);
    }
    if (valueType === TYPE_SINGLE_DATE) setCalendarVisiblity(false);
    else if (valueType === TYPE_RANGE && newValue.from && newValue.to)
      setCalendarVisiblity(false);
  };

  const handleKeyUp = ({ key }: any) => {
    switch (key) {
      case 'Enter':
        setCalendarVisiblity(true);
        break;
      case 'Escape':
        setCalendarVisiblity(false);
        shouldPreventToggle.current = true;
        break;
    }
  };

  useEffect(() => {
    if (!isCalendarOpen && shouldPreventToggle.current) {
      (inputElement.current as any).focus();
      shouldPreventToggle.current = false;
    }
  }, [shouldPreventToggle, isCalendarOpen]);

  return (
    <div
      onFocus={openCalendar}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      className={`DatePicker ${wrapperClassName}`}
      role="presentation"
    >
      <DatePickerInput
        ref={inputElement}
        formatInputText={formatInputText!}
        value={value}
        inputPlaceholder={inputPlaceholder ?? ''}
        inputClassName={inputClassName ?? ''}
        renderInput={renderInput!}
        inputName={inputName ?? ''}
        locale={locale ?? ''}
      />
      {
        <>
          <div
            ref={calendarContainerElement}
            className="DatePicker__calendarContainer"
            data-testid="calendar-container"
            role="presentation"
            onMouseDown={() => {
              shouldPreventToggle.current = true;
            }}
          >
            <Calendar
              value={value}
              onChange={handleCalendarChange}
              calendarClassName={calendarClassName!}
              calendarTodayClassName={calendarTodayClassName!}
              calendarSelectedDayClassName={calendarSelectedDayClassName!}
              calendarRangeStartClassName={calendarRangeStartClassName!}
              calendarRangeBetweenClassName={calendarRangeBetweenClassName!}
              calendarRangeEndClassName={calendarRangeEndClassName!}
              disabledDays={disabledDays!}
              colorPrimary={colorPrimary!}
              colorPrimaryLight={colorPrimaryLight!}
              slideAnimationDuration={slideAnimationDuration!}
              onDisabledDayError={onDisabledDayError}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              selectorStartingYear={selectorStartingYear!}
              selectorEndingYear={selectorEndingYear!}
              locale={locale!}
              shouldHighlightWeekends={shouldHighlightWeekends!}
              renderFooter={renderFooter!}
              customDaysClassName={customDaysClassName!}
            />
          </div>
          <div className="DatePicker__calendarArrow" />
        </>
      }
    </div>
  );
};

DatePickerElement.defaultProps = {
  wrapperClassName: '',
  locale: 'en',
  calendarPopperPosition: 'auto',
};

export default memo(DatePickerElement);
