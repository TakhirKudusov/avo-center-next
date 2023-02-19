import { Divider } from '../../../ui-kit';
import Table from '../../UI/table/Table';
import { tableHead } from './constants';
import { useGetNftsQuery } from '../../../../redux/APIs/adminApi';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import PageHeader from '../../UI/page_header/PageHeader';
import TableContainer from '../../UI/table_container/TableContainer';
import ContentContainer from '../../UI/content_container/ContentContainer';
import NFTInfo from './NFTInfo';
import { useState } from 'react';
import { ModalState } from '../../utils/types';
import { TableContent } from '../../UI/table/types';
import { Nft as NftType } from '../../../../redux/APIs/types';

const Nft = () => {
  const [modalState, setModalState] = useState<ModalState>(null);
  const [modalData, setModalData] = useState<TableContent | null>(null);

  const { data, isLoading, isError } = useGetNftsQuery('');

  return (
    <ContentContainer>
      <PageHeader text="Manage NFTs" />
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
            form={<NFTInfo data={modalData as NftType} />}
            modalState={modalState}
            setModalState={setModalState}
          />
        )}
      </TableContainer>
    </ContentContainer>
  );
};

export default Nft;
