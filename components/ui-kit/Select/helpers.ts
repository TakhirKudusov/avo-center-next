import { Dispatch, SetStateAction } from 'react';
import { SelectItem } from './types';

const handleDropdownExpand =
  (setExpanded: Dispatch<SetStateAction<boolean>>) => () => {
    setExpanded((prev) => !prev);
  };

const handleDropdownItemClick =
  (
    item: SelectItem,
    setSelected: Dispatch<SetStateAction<SelectItem | undefined>>,
    setExpanded: Dispatch<SetStateAction<boolean>>,
  ) =>
  () => {
    setSelected(item);
    setExpanded(false);
  };

export { handleDropdownExpand, handleDropdownItemClick };
