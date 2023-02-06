export enum FormName {
  USER_NAME = 'username',
  BIO = 'bio',
  WEBSITE = 'portfolio or website',
  TWITTER = 'twitter',
  ADDITIONAL_SOCIAL_ACCOUNT = 'additional social account',
  PHOTO_OF_DOCUMENTS = 'photo of documents',
}

export enum FormPlaceHolder {
  ENTER_YOUR_DISPLAY_NAME = 'Enter your display name',
  ABOUT_YOURSELF_IN_A_FEW_WORDS = 'About yourself in a few words',
  ENTER_URL = 'Enter URL',
  TWITTER_USERNAME = '@twitter username',
  ADDITIONAL_ACCOUNT = "Enter account's url",
}

export enum ErrorMessage {
  ERROR_WITH_NAME = 'Please enter your name in Latin or Cyrillic in 3 to 15 characters',
  ERROR_WITH_BIO = 'Please enter up to 150 characters.',
  ERROR_WITH_WEBSITE = 'Please enter a correct URL.',
  ERROR_WITH_TWITTER = 'Please enter a correct Twitter username',
  ERROR_WITH_ADDITIONAL_ACCOUNT = 'Please enter a correct URL.',
}

export enum PrimaryHeaderText {
  ACCOUNT_INFO = 'Account info',
  SOCIAL = 'Social',
}
