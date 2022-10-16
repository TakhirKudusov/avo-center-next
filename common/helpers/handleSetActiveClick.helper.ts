import React from 'react';

export const handleSetActiveClick = (
  event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>,
  className: string,
  targetClass: string,
) => {
  const tabButtonsList = Array.from(document.getElementsByClassName(className));
  if (!event.currentTarget.classList.contains(targetClass)) {
    tabButtonsList.forEach((item) => {
      item.classList.remove(targetClass);
    });
    event.currentTarget.classList.add(targetClass);
  }
};
