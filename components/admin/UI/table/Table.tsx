import styled from 'styled-components';
import { TableHead } from './types';
import { FC } from 'react';
import { Nft } from '../../../../redux/APIs/types';

type TableProps = {
  head: TableHead[];
  content: Nft[] | undefined;
};

const Table: FC<TableProps> = ({ head, content }) => {
  const handleFormatCellContent = (el: string) => {
    if (el.length > 15) {
      return el.substring(0, 15) + '...';
    }
    return el;
  };

  return (
    <Container>
      <Header>
        <Row>
          {head?.map((el) => {
            return (
              <Head
                style={{ width: el.width }}
                className={el.id === 1 ? 'table__header__first_child' : ''}
                title={el.name}
                key={el.id}
              >
                <Divider /> {el.name}
              </Head>
            );
          })}
        </Row>
      </Header>
      <Body>
        {content?.map((el, index) => {
          return (
            <Row key={index}>
              {Object.values(el)?.map((el, index) => {
                return (
                  <Cell style={{ width: head[index].width }} key={index}>
                    {handleFormatCellContent(el)}
                  </Cell>
                );
              })}
            </Row>
          );
        })}
      </Body>
    </Container>
  );
};

const Divider = styled.div`
  display: flex;
  height: 100%;
  min-width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 15px;
`;

const Cell = styled.td`
  border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
  background-color: white;
  display: flex;
  width: 100%;
  font-family: 'DM Sans';
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.75);
  padding: 12px 0 12px 16px;
  word-break: break-all;
`;

const Body = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

const Head = styled.th`
  border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
  display: flex;
  width: 100%;
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  font-weight: 500;
  padding: 12px 0;
  &.table__header__first_child {
    & :first-child {
      visibility: hidden;
    }
  }
`;

const Row = styled.tr`
  display: flex;
  width: 100%;
  &:hover {
    & * {
      background-color: #fcfcfd;
    }
  }
`;

const Header = styled.thead`
  display: flex;
  width: 100%;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: #fcfcfd;
`;

const Container = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-spacing: 0;
  max-height: 1000px;
  overflow: auto;
  table-layout: fixed;
  word-break: break-all;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(85, 85, 85, 0.85);
  }
`;

export default Table;
