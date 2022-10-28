import { Form as FormikForm, Formik } from 'formik';
import { memo } from 'react';
import * as Yup from 'yup';
import { UnknownObject } from '../../../common/types';

type Props = {
  formSchema?: Yup.ObjectSchema<any>;
  initialValues: UnknownObject;
  onSubmit: (values: any, formikProps: any) => void;
  children: JSX.Element;
};
const Form: React.FC<Props> = ({
  formSchema,
  initialValues,
  children,
  onSubmit,
}) => {
  return (
    <Formik
      validationSchema={formSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <FormikForm
          onSubmit={async (e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {children}
        </FormikForm>
      )}
    </Formik>
  );
};

export default memo(Form);
