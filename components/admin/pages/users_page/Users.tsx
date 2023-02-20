import ContentContainer from '../../UI/content_container/ContentContainer';
import PageHeader from '../../UI/page_header/PageHeader';
import { Divider } from '../../../ui-kit';
import TableContainer from '../../UI/table_container/TableContainer';
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from '../../../../redux/APIs/adminApi';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import { tableHead } from './constants';
import Table from '../../UI/table/Table';
import { useState } from 'react';
import { ModalState } from '../../utils/types';
import { TableContent } from '../../UI/table/types';
import { handleDeleteInstance } from '../../utils/helpers';
import UsersInfo from './UsersInfo';

const Users = () => {
  const [modalState, setModalState] = useState<ModalState>(null);
  const [modalData, setModalData] = useState<TableContent | null>(null);

  const { data, isLoading, isError } = useGetUsersQuery('');

  const [deleteUser] = useDeleteUserMutation();

  return (
    <ContentContainer>
      <PageHeader text="Manage users" />
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
            handleDeleteInstance={handleDeleteInstance(
              deleteUser,
              modalData,
              setModalState,
            )}
            form={<UsersInfo modalData={modalData} />}
            modalState={modalState}
            setModalState={setModalState}
          />
        )}
      </TableContainer>
    </ContentContainer>
  );
};

export default Users;
