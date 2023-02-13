import ContentContainer from '../../UI/content_container/ContentContainer';
import PageHeader from '../../UI/page_header/PageHeader';
import { Divider } from '../../../ui-kit';
import TableContainer from '../../UI/table_container/TableContainer';
import {
  useGetUsersQuery,
  useGetVerificationsQuery,
} from '../../../../redux/APIs/adminApi';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import { tableHead } from './constants';
import Table from '../../UI/table/Table';
import Form from './Form';

const Verifications = () => {
  const { data, isLoading, isError } = useGetVerificationsQuery('');

  return (
    <ContentContainer>
      <PageHeader text="Manage verifications" />
      <Divider />
      <TableContainer>
        {isLoading && !isError ? (
          <LoadingSpinner />
        ) : (
          <Table content={data} head={tableHead} form={<Form />} />
        )}
      </TableContainer>
    </ContentContainer>
  );
};

export default Verifications;
