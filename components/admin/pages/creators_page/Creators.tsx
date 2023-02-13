import { Divider } from '../../../ui-kit';
import Table from '../../UI/table/Table';
import { tableHead } from './constants';
import {
  useGetCreatorsQuery,
  useGetSellersQuery,
} from '../../../../redux/APIs/adminApi';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import PageHeader from '../../UI/page_header/PageHeader';
import TableContainer from '../../UI/table_container/TableContainer';
import ContentContainer from '../../UI/content_container/ContentContainer';
import Form from './Form';

const Creators = () => {
  const { data, isLoading, isError } = useGetCreatorsQuery('');

  return (
    <ContentContainer>
      <PageHeader text="Manage Creators" />
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

export default Creators;
