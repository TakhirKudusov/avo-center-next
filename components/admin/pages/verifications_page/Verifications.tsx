import ContentContainer from '../../UI/content_container/ContentContainer';
import PageHeader from '../../UI/page_header/PageHeader';
import { Divider } from '../../../ui-kit';
import TableContainer from '../../UI/table_container/TableContainer';
import {
  useGetVerificationsQuery,
  useUpdateVerificationsMutation,
} from '../../../../redux/APIs/adminApi';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import Table from '../../UI/table/Table';
import { useState } from 'react';
import { ModalState } from '../../utils/types';
import { TableContent } from '../../UI/table/types';
import VerifModal from './VerifModal';
import { Verification } from '../../../../redux/APIs/types';
import { tableHead } from './constants';

const Verifications = () => {
  const [modalState, setModalState] = useState<ModalState | null>(null);
  const [modalData, setModalData] = useState<TableContent | null>(null);

  const { data, isLoading, isError } = useGetVerificationsQuery('');

  const [updateVerification] = useUpdateVerificationsMutation();

  return (
    <ContentContainer>
      <PageHeader text="Manage verifications" />
      <Divider />
      <TableContainer>
        {isLoading && !isError ? (
          <LoadingSpinner />
        ) : (
          <Table
            content={data}
            head={tableHead}
            setModalData={setModalData}
            modalData={modalData}
            form={
              <VerifModal
                modalData={modalData as Verification}
                updateVerification={updateVerification}
                setModalState={setModalState}
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

export default Verifications;
