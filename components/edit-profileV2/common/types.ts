import {
  ErrorMessages,
  FormActionKind,
  FormNames,
  FormPlaceHolders,
  FormTypes,
  HeaderTextEnum,
} from './enums';

export type ItemData = {
  value: string;
  isError: boolean;
};

export type FormData = {
  name: ItemData;
  bio: ItemData;
  website: ItemData;
  twitter: ItemData;
  photoAddress: ItemData;
  [key: string]: ItemData;
};

type Payload =
  | Record<'socialAccountName' | 'socialAccountUsername', string>
  | string;

export type FormAction = {
  type: FormActionKind;
  payload: Payload | any;
};

export type FormItem = {
  name: FormNames;
  type: FormTypes;
  actionType: FormActionKind;
  groupHeader?: HeaderTextEnum;
  placeHolder?: FormPlaceHolders;
  errorMessage?: ErrorMessages;
  width?: number;
  hasButton?: boolean;
};
