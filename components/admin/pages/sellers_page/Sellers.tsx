import { Divider } from '../../../ui-kit';
import Table from '../../UI/table/Table';
import { tableHead } from './constants';
import { useGetSellersQuery } from '../../../../redux/APIs/adminApi';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import PageHeader from '../../UI/page_header/PageHeader';
import TableContainer from '../../UI/table_container/TableContainer';
import ContentContainer from '../../UI/content_container/ContentContainer';
import { useState } from 'react';
import { ModalState } from '../../utils/types';
import { TableContent } from '../../UI/table/types';
import SellersInfo from './SellersInfo';

const Sellers = () => {
  const [modalState, setModalState] = useState<ModalState | null>(null);
  const [modalData, setModalData] = useState<TableContent | null>(null);

  const { data, isLoading, isError } = useGetSellersQuery('');

  return (
    <ContentContainer>
      <PageHeader text="Manage Creators" />
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
            form={<SellersInfo modalData={modalData} />}
            modalState={modalState}
            setModalState={setModalState}
          />
        )}
      </TableContainer>
    </ContentContainer>
  );
};

export default Sellers;
