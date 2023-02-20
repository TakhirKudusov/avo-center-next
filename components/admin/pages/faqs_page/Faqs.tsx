import ContentContainer from '../../UI/content_container/ContentContainer';
import PageHeader from '../../UI/page_header/PageHeader';
import { Divider } from '../../../ui-kit';
import TableContainer from '../../UI/table_container/TableContainer';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import Table from '../../UI/table/Table';
import { tableHead } from './constants';
import Form from './Form';
import {
  useCreateFaqMutation,
  useDeleteFaqMutation,
  useGetFaqsQuery,
  useUpdateFaqMutation,
} from '../../../../redux/APIs/adminApi';
import { useEffect, useRef, useState } from 'react';
import { FormikProps } from 'formik';
import { ModalState } from '../../utils/types';
import { TableContent } from '../../UI/table/types';
import {
  handleDeleteInstance,
  handleResetForm,
  handleSetFormikProps,
  handleSetValues,
  handleSubmitForm,
} from '../../utils/helpers';

const Faqs = () => {
  const [modalState, setModalState] = useState<ModalState | null>(null);
  const [modalData, setModalData] = useState<TableContent | null>(null);
  const [formikProps, setFormikProps] =
    useState<FormikProps<TableContent> | null>(null);

  const { data, isLoading, isError } = useGetFaqsQuery('');

  const [createFAQ] = useCreateFaqMutation();
  const [deleteFAQ] = useDeleteFaqMutation();
  const [updateFAQ] = useUpdateFaqMutation();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    handleSetFormikProps(formRef, formikProps, setFormikProps);
  }, [formRef.current]);

  useEffect(() => {
    handleSetValues(modalState, modalData, formikProps);
  }, [modalState, formikProps]);

  return (
    <ContentContainer>
      <PageHeader text="Manage FAQs" setModalState={setModalState} />
      <Divider />
      <TableContainer>
        {isLoading && !isError ? (
          <LoadingSpinner />
        ) : (
          <Table
            formikProps={formikProps}
            content={data}
            head={tableHead}
            handleDeleteInstance={handleDeleteInstance(
              deleteFAQ,
              modalData,
              setModalState,
            )}
            setModalData={setModalData}
            modalData={modalData}
            form={
              <Form
                handleReset={handleResetForm(
                  modalState,
                  modalData,
                  formikProps,
                )}
                handleSubmit={handleSubmitForm(
                  modalState,
                  createFAQ,
                  updateFAQ,
                  setModalState,
                  modalData,
                )}
                ref={formRef}
                modalState={modalState}
              />
            }
            modalState={modalState}
            setModalState={setModalState}
          />
        )}
      </TableContainer>
    </ContentContainer>
  );
};

export default Faqs;
