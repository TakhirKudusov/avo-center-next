import { TimeBeforeEnd } from './types';
import React from 'react';
import moment from 'moment';

const dateItemFormat = (item: string): string => {
  if (item.length < 2) {
    return item.padStart(2, '0');
  }
  return item;
};

const calculateTimeLeft = (endTime: string): TimeBeforeEnd | undefined => {
  const difference = +new Date(endTime) - +new Date();
  let timeLeft: TimeBeforeEnd;

  if (difference > 0) {
    timeLeft = {
      days: dateItemFormat(
        String(Math.floor(difference / 1000 / 60 / 60 / 24)),
      ),
      hours: dateItemFormat(
        String(Math.floor((difference / 1000 / 60 / 60) % 24)),
      ),
      mins: dateItemFormat(String(Math.floor((difference / 1000 / 60) % 60))),
      secs: dateItemFormat(String(Math.floor((difference / 1000) % 60))),
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
