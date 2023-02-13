import ContentContainer from '../../UI/content_container/ContentContainer';
import PageHeader from '../../UI/page_header/PageHeader';
import { Divider } from '../../../ui-kit';
import TableContainer from '../../UI/table_container/TableContainer';
import { useGetNotificationsQuery } from '../../../../redux/APIs/adminApi';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import { tableHead } from './constants';
import Table from '../../UI/table/Table';
import Form from './Form';

const Notifications = () => {
  const { data, isLoading, isError } = useGetNotificationsQuery('');

  return (
    <ContentContainer>
      <PageHeader text="Manage notifications" />
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

export default Notifications;
