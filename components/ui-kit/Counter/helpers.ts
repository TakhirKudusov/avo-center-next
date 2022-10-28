import { FormikProps } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import { THandler } from '../Switch/types';

const handleCountDown =
  (
    fieldName: string,
    form: FormikProps<any>,
    hasSchema: boolean,
    onCountChange: THandler,
    setCount: Dispatch<SetStateAction<number>>,
  ) =>
    () => {
      setCount((prev) => {
        const value = prev > 0 ? prev - 1 : prev;

        handleCountChange(
          value,
          fieldName,
          form,
          hasSchema,
          onCountChange,
        );

        return value;
      });
    };

const handleCountUp =
  (
    fieldName: string,
    form: FormikProps<any>,
    hasSchema: boolean,
    onCountChange: THandler,
    setCount: Dispatch<SetStateAction<number>>,
  ) =>
    () => {
      setCount((prev) => {
        const value = prev + 1;

        handleCountChange(
          value,
          fieldName,
          form,
          hasSchema,
          onCountChange,
        );

        return value;
      });
    };

const handleCountChange = (
  value: number,
  fieldName: string,
  form: FormikProps<any>,
  hasSchema: boolean,
  onCountChange: THandler,
): void => {
  if (onCountChange) {
    onCountChange(value);
  }

  form.setFieldTouched(fieldName, true);
  form?.setFieldValue(fieldName, value);

  if (hasSchema) {
    form?.validateField(fieldName);
  }
};

export { handleCountDown, handleCountUp };
