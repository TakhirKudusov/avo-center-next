import styled from 'styled-components';
import { Divider } from '../../ui-kit';
import Table from '../UI/table/Table';
import { tableHead } from './constants';
import { useGetNftsQuery } from '../../../redux/APIs/nftApi';
import LoadingSpinner from '../UI/loading_spinner/LoadingSpinner';

const Nft = () => {
  const { data, isLoading, isError } = useGetNftsQuery('');

  return (
    <Container>
      <HeaderContainer>
        <HeaderText>Manage NFTs</HeaderText>
      </HeaderContainer>
      <Divider />
      <TableContainer>
        {isLoading && !isError ? (
          <LoadingSpinner />
        ) : (
          <Table content={data} head={tableHead} />
        )}
      </TableContainer>
    </Container>
  );
};

const TableContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const HeaderText = styled.div`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: rgba(35, 38, 47, 0.8);
  width: fit-content;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
`;

export default Nft;
