import { Form as FormikForm, Formik } from 'formik';
import { FormEventHandler, memo, MutableRefObject } from 'react';
import * as Yup from 'yup';
import { UnknownObject } from '../../../common/types';
import FormikObserver from './observer';

type Props = {
  innerRef?: MutableRefObject<any>;
  formSchema?: Yup.ObjectSchema<any>;
  initialValues: UnknownObject;
  children: JSX.Element;
  onSubmit: (values: any, formikProps: any) => void;
  onReset?: (values: any, formikProps: any) => void;
  onChange?: FormEventHandler<HTMLFormElement>;
  className?: string;
};

const Form: React.FC<Props> = ({
  innerRef,
  formSchema,
  initialValues,
  children,
  onSubmit,
  onReset,
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
      onReset={(a, b) => {
        if (onReset) onReset(a, b);
      }}
    >
      {({ handleSubmit, handleChange, handleReset }) => (
        <FormikForm
          className={className}
          onSubmit={async (e) => {
            e.preventDefault();
            handleSubmit();
          }}
          onReset={() => {
            handleReset();
          }}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          {children}
          <FormikObserver
            onChange={(values: any) => (onChange ? onChange(values) : null)}
          />
        </FormikForm>
      )}
    </Formik>
  );
};

export default memo(Form);
