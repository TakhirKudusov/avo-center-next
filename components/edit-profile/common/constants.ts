import * as Yup from 'yup';
// import { ErrorMessage } from './enums';

// const VALIDATION_REGEXPS = {
//   name: /(^[a-zа-яё\s]{3,15}$)/gi,
//   bio: /(^[a-zа-яё,.!?;:()\w\s]{0,150}$)/gi,
//   url: /^((http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
//   twitter: /(^@[a-z_\d]{4,15}$)/gi,
// };

// const FORM_SCHEMA = Yup.object().shape({
//   name: Yup.string().matches(
//     VALIDATION_REGEXPS.name,
//     ErrorMessage.ERROR_WITH_NAME,
//   ),
//   bio: Yup.string().matches(
//     VALIDATION_REGEXPS.bio,
//     ErrorMessage.ERROR_WITH_BIO,
//   ),
//   website: Yup.string().matches(
//     VALIDATION_REGEXPS.url,
//     ErrorMessage.ERROR_WITH_WEBSITE,
//   ),
//   twitter: Yup.string().matches(
//     VALIDATION_REGEXPS.twitter,
//     ErrorMessage.ERROR_WITH_TWITTER,
//   ),
//   additionalSocialAccount: Yup.string().matches(
//     VALIDATION_REGEXPS.url,
//     ErrorMessage.ERROR_WITH_ADDITIONAL_ACCOUNT,
//   ),
// });

export enum ProfileFormItemName {
  AVATAR = 'Avatar',
  NAME = 'name',
  BIO = 'bio',
  PORTFOLIO_OR_WEBSITE = 'portfolio_or_website',
  TWITTER = 'twitter',
  ADDITIONAL_SOCIAL_ACCOUNT = 'additional_social_accout',
  PHOTO_OF_DOCUMENTS = 'photo_of_documents',
}

const FORM_SCHEMA = Yup.object().shape({
  [ProfileFormItemName.AVATAR]: Yup.array()
    .length(1)
    .required('Field avatar is required'),
  [ProfileFormItemName.NAME]: Yup.string().required(
    'Field network is required',
  ),
  [ProfileFormItemName.BIO]: Yup.string().required('Field bio is required'),
  [ProfileFormItemName.PORTFOLIO_OR_WEBSITE]: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .required('Field Portfolio or website is required'),
  [ProfileFormItemName.TWITTER]: Yup.string().required(
    'Field twitter is required',
  ),
  [ProfileFormItemName.ADDITIONAL_SOCIAL_ACCOUNT]: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .required('Field Additional social accout is required'),
  [ProfileFormItemName.PHOTO_OF_DOCUMENTS]: Yup.string().required(
    'Field photo of documents is required',
  ),
});

export { FORM_SCHEMA };
