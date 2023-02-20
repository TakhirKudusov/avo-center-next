import { Form as FormikForm, Formik } from 'formik';
import { FormEventHandler, memo, MutableRefObject } from 'react';
import * as Yup from 'yup';
import { UnknownObject } from '../../../common/types';

type Props = {
  innerRef?: MutableRefObject<any>;
  formSchema?: Yup.ObjectSchema<any>;
  initialValues: UnknownObject;
  children: JSX.Element;
  onSubmit: (values: any, formikProps: any) => void;
  onChange?: FormEventHandler<HTMLFormElement>;
  className?: string;
};

const Form: React.FC<Props> = ({
  innerRef,
  formSchema,
  initialValues,
  children,
  onSubmit,
  onChange,
  className,
}) => {
  return (
    <Formik
      innerRef={innerRef}
      validationSchema={formSchema}
      initialValues={initialValues}
      onSubmit={(a, b) => {
        onSubmit(a, b);
      }}
    >
      {({ handleSubmit, handleChange }) => (
        <FormikForm
          className={className}
          onSubmit={async (e) => {
            e.preventDefault();
            handleSubmit();
          }}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
              handleChange(e);
            }
          }}
        >
          {children}
        </FormikForm>
      )}
    </Formik>
  );
};

export default memo(Form);
