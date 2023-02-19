import { FormikProps } from 'formik';
import { TableContent } from '../../UI/table/types';
import { Dispatch, RefObject, SetStateAction, useCallback } from 'react';
import { APIMutationFunction, ModalState } from '../types';
import { FAQFormValues } from '../../pages/faqs_page/types';
import { RequestMessage } from '../enums';

const handleSetFormikProps = (
  formRef: RefObject<HTMLFormElement>,
  formikProps: FormikProps<TableContent> | null,
  setFormikProps: Dispatch<SetStateAction<FormikProps<TableContent> | null>>,
) => {
  if (formRef.current && !formikProps) {
    setFormikProps(formRef.current as unknown as FormikProps<TableContent>);
  }
};

const handleSetValues = (
  modalState: ModalState | null,
  modalData: TableContent | null,
  formikProps: FormikProps<TableContent> | null,
) => {
  if (modalState === 'put' && modalData && formikProps) {
    formikProps.setValues(modalData);
  }
};

const handleSubmitForm =
  (
    modalState: ModalState | null,
    apiCreate: APIMutationFunction,
    apiUpdate: APIMutationFunction,
    setModalState: Dispatch<SetStateAction<ModalState | null>>,
    modalData: TableContent | null,
  ) =>
  async (values: FAQFormValues, formikProps: FormikProps<TableContent>) => {
    if (modalState === 'post') {
      const data = await apiCreate(values);
      if ((data as any)?.error) {
        formikProps.setErrors({
          title: RequestMessage.ERROR,
          description: RequestMessage.ERROR,
        });
        console.error((data as any).error);
        return;
      }
      formikProps.resetForm();
      setModalState(null);
    }
    if (modalState === 'put') {
      const data = await apiUpdate({ id: modalData?.id, body: values });
      if ((data as any)?.error) {
        formikProps.setErrors({
          title: RequestMessage.ERROR,
          description: RequestMessage.ERROR,
        });
        console.error((data as any).error);
        return;
      }
      formikProps.resetForm();
      setModalState(null);
    }
  };

const handleResetForm =
  (
    modalState: ModalState | null,
    modalData: TableContent | null,
    formikProps: FormikProps<TableContent> | null,
  ) =>
  () => {
    if (modalState === 'put' && modalData && formikProps) {
      queueMicrotask(() => formikProps?.setValues(modalData));
    }
  };

const handleDeleteInstance =
  (
    apiDelete: APIMutationFunction,
    modalData: TableContent | null,
    setModalState: Dispatch<SetStateAction<ModalState | null>>,
  ) =>
  async () => {
    const data = await apiDelete(modalData?.id);
    if ((data as any)?.error) {
      console.error((data as any).error);
      return;
    }
    setModalState(null);
  };

export {
  handleSetFormikProps,
  handleSetValues,
  handleSubmitForm,
  handleResetForm,
  handleDeleteInstance,
};
