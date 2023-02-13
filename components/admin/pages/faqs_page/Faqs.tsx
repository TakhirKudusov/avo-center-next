import ContentContainer from '../../UI/content_container/ContentContainer';
import PageHeader from '../../UI/page_header/PageHeader';
import { Divider } from '../../../ui-kit';
import TableContainer from '../../UI/table_container/TableContainer';
import LoadingSpinner from '../../UI/loading_spinner/LoadingSpinner';
import Table from '../../UI/table/Table';
import { tableHead } from './constants';
import Form from './Form';
import { useGetFaqsQuery } from '../../../../redux/APIs/adminApi';

const Faqs = () => {
  const { data, isLoading, isError } = useGetFaqsQuery('');

  return (
    <ContentContainer>
      <PageHeader text="Manage FAQs" />
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

export default Faqs;
