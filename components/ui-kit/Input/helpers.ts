import { FormikProps } from "formik";
import { ChangeEventHandler } from "react";

const handleChange = (fieldName: string, form: FormikProps<any>, hasSchema: boolean, onChange: ChangeEventHandler<HTMLInputElement> | undefined) => (e: any) => {
  form.setFieldTouched(fieldName, true);
  form?.setFieldValue(fieldName, e.target.value);

  if (hasSchema) {
    form?.validateField(fieldName);
  }

  if (onChange) {
    onChange(e.target.value);
  }
}

export { handleChange };