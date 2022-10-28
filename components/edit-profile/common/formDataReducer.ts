import { FormAction, FormData } from './types';
import { FormActionKind } from './enums';

const initialState: FormData = {
  name: {
    value: '',
    isError: false,
  },
  bio: {
    value: '',
    isError: false,
  },
  website: {
    value: '',
    isError: false,
  },
  twitter: {
    value: '',
    isError: false,
  },
  photoAddress: {
    value: '',
    isError: false,
  },
};

const formDataReducer = (state: FormData, action: FormAction) => {
  switch (action.type) {
    case FormActionKind.ADD_NAME:
      const regexpName = /(^[a-zа-яё\s]{3,15}$)/gim;
      const isCorrectName = regexpName.test(action.payload);
      return {
        ...state,
        name: {
          value: action.payload,
          isError: !isCorrectName && action.payload !== '',
        },
      };

    case FormActionKind.ADD_BIO:
      const regexpBio = /(^[a-zа-яё,.!?;:()\w\s]{0,150}$)/gim;
      const isCorrectBio = regexpBio.test(action.payload);
      return {
        ...state,
        bio: {
          value: action.payload,
          isError: !isCorrectBio,
        },
      };

    case FormActionKind.ADD_WEBSITE:
      const regexpWebsite =
        /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,5}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi;
      const isCorrectWebsite = regexpWebsite.test(action.payload);
      return {
        ...state,
        website: {
          value: encodeURI(action.payload),
          isError: !isCorrectWebsite && action.payload !== '',
        },
      };

    case FormActionKind.ADD_TWITTER:
      const regexpTwitter = /(^@[a-z_\d]{4,15}$)/gi;
      const isCorrectTwitter = regexpTwitter.test(action.payload);
      return {
        ...state,
        twitter: {
          value: action.payload,
          isError: !isCorrectTwitter && action.payload !== '',
        },
      };
    case FormActionKind.ADD_PHOTO:
      //add correct axios/fetch to upload image to server
      return {
        ...state,
        photoAddress: {
          value: 'url/photo',
          isError: false,
        },
      };
    case FormActionKind.ADD_ADDITIONAL_SOCIAL_ACCOUNT:
      return {
        ...state,
        [action.payload.socialAccountName]: {
          value: action.payload?.socialAccountUsername,
          isError: false,
        },
      };
  }
};

export { initialState, formDataReducer };
