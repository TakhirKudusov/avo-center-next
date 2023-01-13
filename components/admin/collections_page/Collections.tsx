import ContentContainer from '../UI/content_container/ContentContainer';
import PageHeader from '../UI/page_header/PageHeader';
import { Divider } from '../../ui-kit';
import TableContainer from '../UI/table_container/TableContainer';
import { useGetCollectionsQuery } from '../../../redux/APIs/adminApi';
import LoadingSpinner from '../UI/loading_spinner/LoadingSpinner';
import Table from '../UI/table/Table';
import { tableHead } from './constants';

const Collections = () => {
  const { data, isLoading, isError } = useGetCollectionsQuery('');

  return (
    <ContentContainer>
      <PageHeader text="Manage collections" />
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

export default Collections;
