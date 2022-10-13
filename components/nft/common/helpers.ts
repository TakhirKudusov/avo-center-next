import { TimeBeforeEnd } from './types';
import React from 'react';
import { DateTypes } from './enums';

const dateItemFormat = (item: string): string => {
  if (item.length < 2) {
    return item.padStart(2, '0');
  }
  return item;
};

const calculateTime = (value: number, type: DateTypes): string => {
  switch (type) {
    case 'days':
      return dateItemFormat(String(Math.floor(value / 1000 / 60 / 60 / 24)));
    case 'hours':
      return dateItemFormat(String(Math.floor((value / 1000 / 60 / 60) % 24)));
    case 'mins':
      return dateItemFormat(String(Math.floor((value / 1000 / 60) % 60)));
    case 'secs':
      return dateItemFormat(String(Math.floor((value / 1000) % 60)));
    default:
      return '00';
  }
};

const calculateTimeLeft = (endTime: string): TimeBeforeEnd | undefined => {
  const difference = +new Date(endTime) - +new Date();
  let timeLeft: TimeBeforeEnd;

  if (difference > 0) {
    timeLeft = {
      days: calculateTime(difference, DateTypes.days),
      hours: calculateTime(difference, DateTypes.hours),
      mins: calculateTime(difference, DateTypes.mins),
      secs: calculateTime(difference, DateTypes.secs),
    };
    return timeLeft;
  }
};

const fromNameFormatter = (name: string): string => {
  if (name.length > 10) {
    const newName = name.substring(0, 10).padEnd(13, '.');
    return newName;
  }
  return name;
};

const handleSetActiveClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  className: string,
) => {
  const tabButtonsList = Array.from(document.getElementsByClassName(className));
  if (!event.currentTarget.classList.contains('active')) {
    tabButtonsList.forEach((item) => {
      item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  }
};

export { calculateTimeLeft, fromNameFormatter, handleSetActiveClick };
