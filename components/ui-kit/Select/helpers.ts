import { Dispatch, SetStateAction } from 'react';

const handleDropdownExpand =
  (setExpanded: Dispatch<SetStateAction<boolean>>) => (e: any) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

export { handleDropdownExpand };
