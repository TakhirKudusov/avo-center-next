import { useEffect, useState } from 'react';
import { screenSizes } from '../constants';

export const useAdaptiveSlider = (defaultSliderCount: number = 4) => {
  const [screenSize, setScreenSize] = useState(0);
  const [slidesPerRow, setSlidesPerRow] = useState(defaultSliderCount);

  useEffect(() => {
    setScreenSize(window?.screen.width);
  }, []);

  useEffect(() => {
    if (screenSize > screenSizes.tablet) {
      setSlidesPerRow(defaultSliderCount);
    }
    if (screenSize <= screenSizes.tablet && screenSize > screenSizes.mobileL) {
      setSlidesPerRow(defaultSliderCount - 1);
    }
    if (screenSize <= screenSizes.mobileL) {
      setSlidesPerRow(1);
    }
  }, [defaultSliderCount, screenSize]);

  return {
    screenSize,
    slidesPerRow,
  };
};
