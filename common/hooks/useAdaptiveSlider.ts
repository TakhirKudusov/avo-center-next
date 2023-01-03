import { useEffect, useState } from 'react';

export const useAdaptiveSlider = (defaultSliderCount: number = 4) => {
  const [screenSize, setScreenSize] = useState(0);
  const [slidesPerRow, setSlidesPerRow] = useState(defaultSliderCount);

  useEffect(() => {
    setScreenSize(window?.screen.width);
  }, []);

  useEffect(() => {
    if (screenSize > 1024) {
      setSlidesPerRow(defaultSliderCount);
    }
    if (screenSize <= 1024 && screenSize > 414) {
      setSlidesPerRow(defaultSliderCount - 1);
    }
    if (screenSize <= 414) {
      setSlidesPerRow(1);
    }
  }, [defaultSliderCount, screenSize]);

  return {
    screenSize,
    slidesPerRow,
  };
};
