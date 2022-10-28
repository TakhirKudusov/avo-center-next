import { FormikProps } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import { SelectItem } from './types';

const handleDropdownExpand =
  (setExpanded: Dispatch<SetStateAction<boolean>>) => () => {
    setExpanded((prev) => !prev);
  };

const handleDropdownItemClick =
  (
    item: SelectItem,
    fieldName: string,
    form: FormikProps<any>,
    hasSchema: boolean,
    setSelected: Dispatch<SetStateAction<SelectItem | undefined>>,
    setExpanded: Dispatch<SetStateAction<boolean>>,
  ) =>
    () => {
      form?.setFieldTouched(fieldName, true);
      form?.setFieldValue(fieldName, item.value);

      if (hasSchema) {
        form?.validateField(fieldName);
      }
      setSelected(item);
      setExpanded(false);
    };

export { handleDropdownExpand, handleDropdownItemClick };
