import { SortOrder } from '../types';

export const sortStringifier = (
  items: [string, SortOrder][] | { [key: string]: number },
) => {
  return JSON.stringify(items);
};
