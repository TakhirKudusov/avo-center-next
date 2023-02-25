import { FlatListTypes } from './constants';
import { ListItem } from './types';

export const getInitialValue = (
  items: ListItem[],
  type: FlatListTypes,
  value?: ListItem,
) => {
  if (!!value && type === FlatListTypes.CATALOG_TABS) return value;

  if (!!items && type === FlatListTypes.PROFILE_TABS) return items[0];

  return undefined;
};
