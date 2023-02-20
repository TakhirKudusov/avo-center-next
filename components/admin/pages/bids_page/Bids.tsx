import ContentContainer from '../../UI/content_container/ContentContainer';
import PageHeader from '../../UI/page_header/PageHeader';
import { Divider } from '../../../ui-kit';
import TableContainer from '../../UI/table_container/TableContainer';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import Table from '../../UI/table/Table';
import { tableHead } from './constants';
import BidsInfo from './BidsInfo';
import {
  useDeleteBidsMutation,
  useGetBidsQuery,
} from '../../../../redux/APIs/adminApi';
import { useState } from 'react';
import { ModalState } from '../../utils/types';
import { TableContent } from '../../UI/table/types';
import { handleDeleteInstance } from '../../utils/helpers';

const Bids = () => {
  const [modalState, setModalState] = useState<ModalState | null>(null);
  const [modalData, setModalData] = useState<TableContent | null>(null);

  const { data, isLoading, isError } = useGetBidsQuery('');

  const [deleteBids] = useDeleteBidsMutation();

  return (
    <ContentContainer>
      <PageHeader text="Manage bids" />
      <Divider />
      <TableContainer>
        {isLoading && !isError ? (
          <LoadingSpinner />
        ) : (
          <Table
            content={data}
            head={tableHead}
            handleDeleteInstance={handleDeleteInstance(
              deleteBids,
              modalData,
              setModalState,
            )}
            setModalData={setModalData}
            modalData={modalData}
            form={<BidsInfo modalData={modalData} />}
            modalState={modalState}
            setModalState={setModalState}
          />
        )}
      </TableContainer>
    </ContentContainer>
  );
};

export default Bids;
