import { FormItem } from './types';
import {
  ErrorMessages,
  FormNames,
  FormPlaceHolders,
  FormTypes,
  HeaderTextEnum,
} from './enums';

// const formStructure: FormItem[] = [
//   {
//     name: FormNames.NAME,
//     type: FormTypes.INPUT,
//     actionType: FormActionKind.ADD_NAME,
//     groupHeader: HeaderTextEnum.ACCOUNT_INFO,
//     placeHolder: FormPlaceHolders.ENTER_YOUR_DISPLAY_NAME,
//     errorMessage: ErrorMessages.ERROR_WITH_NAME,
//   },
//   {
//     name: FormNames.BIO,
//     type: FormTypes.TEXTAREA,
//     actionType: FormActionKind.ADD_BIO,
//     placeHolder: FormPlaceHolders.ABOUT_YOURSELF_IN_A_FEW_WORDS,
//     errorMessage: ErrorMessages.ERROR_WITH_BIO,
//   },
//   {
//     name: FormNames.PORTFOLIO_OR_WEBSITE,
//     type: FormTypes.INPUT,
//     actionType: FormActionKind.ADD_WEBSITE,
//     groupHeader: HeaderTextEnum.SOCIAL,
//     placeHolder: FormPlaceHolders.ENTER_URL,
//     errorMessage: ErrorMessages.ERROR_WITH_WEBSITE,
//   },
//   {
//     name: FormNames.TWITTER,
//     type: FormTypes.SOCIAL_MEDIA_INPUT,
//     actionType: FormActionKind.ADD_TWITTER,
//     placeHolder: FormPlaceHolders.TWITTER_USERNAME,
//     errorMessage: ErrorMessages.ERROR_WITH_TWITTER,
//     width: 352,
//     hasButton: true,
//   },
//   {
//     name: FormNames.ADDITIONAL_SOCIAL_ACCOUNT,
//     type: FormTypes.ADD_SOCIAL_MEDIA_BTN,
//     actionType: FormActionKind.ADD_ADDITIONAL_SOCIAL_ACCOUNT,
//     errorMessage: ErrorMessages.ERROR_WITH_ADDITIONAL_ACCOUNT,
//   },
//   {
//     name: FormNames.PHOTO_OF_DOCUMENTS,
//     type: FormTypes.PHOTO_UPLOADER,
//     actionType: FormActionKind.ADD_PHOTO,
//   },
// ];

const validationRegExps = {
  name: /(^[a-zа-яё\s]{3,15}$)/gi,
  bio: /(^[a-zа-яё,.!?;:()\w\s]{0,150}$)/gi,
  url: /^((http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
  twitter: /(^@[a-z_\d]{4,15}$)/gi,
};

export { validationRegExps };
