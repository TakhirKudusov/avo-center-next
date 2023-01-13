import ContentContainer from '../UI/content_container/ContentContainer';
import PageHeader from '../UI/page_header/PageHeader';
import { Divider } from '../../ui-kit';
import TableContainer from '../UI/table_container/TableContainer';
import { useGetUsersQuery } from '../../../redux/APIs/adminApi';
import LoadingSpinner from '../UI/loading_spinner/LoadingSpinner';
import { tableHead } from './constants';
import Table from '../UI/table/Table';

const Users = () => {
  const { data, isLoading, isError } = useGetUsersQuery('');

  return (
    <ContentContainer>
      <PageHeader text="Manage users" />
      <Divider />
      <TableContainer>
        {isLoading && !isError ? (
          <LoadingSpinner />
        ) : (
          <Table content={data} head={tableHead} />
        )}
      </TableContainer>
    </ContentContainer>
  );
};

export default Users;
