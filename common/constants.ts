export const screenSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 414,
  tablet: 1024,
  laptopM: 1240,
};

export const devices = {
  mobile: `(min-width: ${screenSizes.mobileS}px) and (max-width: ${
    screenSizes.mobileL + 1
  }px)`,
  tablet: `(min-width: ${screenSizes.mobileL + 1}px) and (max-width: ${
    screenSizes.tablet + 1
  }px)`,
  laptop: `(min-width: ${screenSizes.tablet + 1}px)`,
};
