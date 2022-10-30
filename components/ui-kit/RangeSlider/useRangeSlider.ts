import { useEffect, useState } from 'react';

export const useRangeSlider = (max: number) => {
  const [value, setValue] = useState(0);

  const getBackgroundSize = () => ({
    backgroundSize: `${(value * 100) / max}% 100%`,
  });

  const handleValueChange = (e: any) => {
    setValue(e.target.value);
  };

  return {
    value,
    handleValueChange,
    getBackgroundSize,
  };
};
