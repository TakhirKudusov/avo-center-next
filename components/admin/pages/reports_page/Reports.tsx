import ContentContainer from '../../UI/content_container/ContentContainer';
import PageHeader from '../../UI/page_header/PageHeader';
import { Divider } from '../../../ui-kit';
import TableContainer from '../../UI/table_container/TableContainer';
import {
  useDeleteReportsMutation,
  useGetReportsQuery,
  useUpdateReportsProcessMutation,
} from '../../../../redux/APIs/adminApi';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import { tableHead } from './constants';
import Table from '../../UI/table/Table';
import ReportsInfo from './ReportsInfo';
import { useState } from 'react';
import { ModalState } from '../../utils/types';
import { TableContent } from '../../UI/table/types';
import { Report } from '../../../../redux/APIs/types';

const Reports = () => {
  const [modalState, setModalState] = useState<ModalState | null>(null);
  const [modalData, setModalData] = useState<TableContent | null>(null);

  const { data, isLoading, isError } = useGetReportsQuery('');

  const [deleteReports] = useDeleteReportsMutation();
  const [updateReportsProcess] = useUpdateReportsProcessMutation();
  const [updateReportsComplete] = useUpdateReportsProcessMutation();

  const handleDeleteInstance = () => {
    deleteReports(modalData?.id);
    setModalState(null);
  };

  return (
    <ContentContainer>
      <PageHeader text="Manage reports" />
      <Divider />
      <TableContainer>
        {isLoading && !isError ? (
          <LoadingSpinner />
        ) : (
          <Table
            content={data}
            head={tableHead}
            form={
              <ReportsInfo
                modalData={modalData as Report}
                setModalState={setModalState}
                updateComplete={updateReportsComplete}
                updateProcess={updateReportsProcess}
              />
            }
            setModalData={setModalData}
            modalData={modalData}
            handleDeleteInstance={handleDeleteInstance}
            modalState={modalState}
            setModalState={setModalState}
          />
        )}
      </TableContainer>
    </ContentContainer>
  );
};

export default Reports;
