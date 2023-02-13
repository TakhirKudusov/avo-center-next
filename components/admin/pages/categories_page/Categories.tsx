import { useGetCategoriesQuery } from '../../../../redux/APIs/adminApi';
import ContentContainer from '../../UI/content_container/ContentContainer';
import PageHeader from '../../UI/page_header/PageHeader';
import { Divider } from '../../../ui-kit';
import TableContainer from '../../UI/table_container/TableContainer';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import Table from '../../UI/table/Table';
import { tableHead } from './constants';
import Form from './Form';

const Categories = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery('');

  return (
    <ContentContainer>
      <PageHeader text="Manage Categories" />
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

export default Categories;
