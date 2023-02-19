import { Form as FormikForm, Formik } from 'formik';
import { memo, MutableRefObject } from 'react';
import * as Yup from 'yup';
import { UnknownObject } from '../../../common/types';

type Props = {
  innerRef?: MutableRefObject<any>;
  formSchema?: Yup.ObjectSchema<any>;
  initialValues: UnknownObject;
  children: JSX.Element;
  onSubmit: (values: any, formikProps: any) => void;
  onReset?: (values: any, formikProps: any) => void;
  className?: string;
};

const Form: React.FC<Props> = ({
  innerRef,
  formSchema,
  initialValues,
  children,
  onSubmit,
  onReset,
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
      onReset={(a, b) => {
        if (onReset) onReset(a, b);
      }}
    >
      {({ handleSubmit, handleReset }) => (
        <FormikForm
          className={className}
          onSubmit={async (e) => {
            e.preventDefault();
            handleSubmit();
          }}
          onReset={() => {
            handleReset();
          }}
        >
          {children}
        </FormikForm>
      )}
    </Formik>
  );
};

export default memo(Form);
