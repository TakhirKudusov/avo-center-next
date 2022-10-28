import { TableHeadTitles } from '../common/types';
import React, { memo } from 'react';
import styled from 'styled-components';

type Props = {
  tableHeadTitles: TableHeadTitles;
};

const TableHeadBlock: React.FC<Props> = ({ tableHeadTitles }) => {
  return (
    <TableHead>
      {tableHeadTitles.map((el, i) => {
        return <ColumnHead key={i}>{el}</ColumnHead>;
      })}
    </TableHead>
  );
};

const TableHead = styled.div`
  width: 564px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 0;
  gap: 58px;
`;

const ColumnHead = styled.p`
  width: 100px;
  height: 18px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #23262f;
  margin-top: 0;
`;

export default memo(TableHeadBlock);
