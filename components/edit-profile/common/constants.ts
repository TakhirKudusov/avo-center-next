import * as Yup from 'yup';
import { ErrorMessage } from './enums';

const VALIDATION_REGEXPS = {
  name: /(^[a-zа-яё\s]{3,15}$)/gi,
  bio: /(^[a-zа-яё,.!?;:()\w\s]{0,150}$)/gi,
  url: /^((http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
  twitter: /(^@[a-z_\d]{4,15}$)/gi,
};

const FORM_SCHEMA = Yup.object().shape({
  name: Yup.string().matches(
    VALIDATION_REGEXPS.name,
    ErrorMessage.ERROR_WITH_NAME,
  ),
  bio: Yup.string().matches(
    VALIDATION_REGEXPS.bio,
    ErrorMessage.ERROR_WITH_BIO,
  ),
  website: Yup.string().matches(
    VALIDATION_REGEXPS.url,
    ErrorMessage.ERROR_WITH_WEBSITE,
  ),
  twitter: Yup.string().matches(
    VALIDATION_REGEXPS.twitter,
    ErrorMessage.ERROR_WITH_TWITTER,
  ),
  additionalSocialAccount: Yup.string().matches(
    VALIDATION_REGEXPS.url,
    ErrorMessage.ERROR_WITH_ADDITIONAL_ACCOUNT,
  ),
});

export { VALIDATION_REGEXPS, FORM_SCHEMA };
