import { useMemo } from 'react';

import utils from './localeUtils';
import getLanguageText from './localeLanguages';

const useLocaleUtils = (locale: string) =>
  useMemo(() => utils(locale), [locale]);

const useLocaleLanguage = (locale: string) =>
  useMemo(() => getLanguageText(locale), [locale]);

export { useLocaleUtils, useLocaleLanguage };
