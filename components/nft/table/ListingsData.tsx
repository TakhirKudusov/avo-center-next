import { ListingData } from '../common/types';
import styled from 'styled-components';
import { fromNameFormatter, handleSetActiveClick } from '../common/helpers';
import { memo } from 'react';

type Props = {
  listingsData: ListingData[];
};

const ListingsData: React.FC<Props> = ({ listingsData }) => {
  return (
    <>
      {listingsData?.map((item, index) => {
        return (
          <TableLineWrapper key={index}>
            <TableCell type={'primary'}>
              {fromNameFormatter(item.from)}
            </TableCell>
            <TableCell type={'transparent'}>{item.expiration}</TableCell>
            <TableCell type={'thickened'}>{item.price} AVO</TableCell>
            <ActionButton
              className={'action-btn'}
              onClick={(e) => handleSetActiveClick(e, 'action-btn', 'active')}
            >
              <p>Accept</p>
            </ActionButton>
          </TableLineWrapper>
        );
      })}
    </>
  );
};

const ActionButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fafafb;
  padding: 8px 24px;
  gap: 10px;
  width: 91px;
  height: 32px;
  border: 1px solid #e6e8ec;
  border-radius: 50px;
  cursor: pointer;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  p {
    width: 43px;
    height: 16px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #23262f;
  }
  &:hover {
    background-color: #e6e8ec;
  }
  &.active {
    background: #353945;
    border: 2px solid #353945;
    color: #fafafb;
    p {
      color: #ffffff;
    }
    &:hover {
      background-color: #515261;
      border-color: #515261;
    }
  }
`;

const TableLineWrapper = styled.div`
  width: 564px;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 18px 0;
  gap: 52px;
  border-top: 1px solid #e6e8ec;
`;

const TableCell = styled.p<any>`
  width: 100px;
  height: 21px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${(props) => {
    switch (props.type) {
      case 'thickened':
        return '700';
      default:
        return '400';
    }
  }};
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-decoration-line: ${(props) => {
    switch (props.type) {
      case 'primary':
        return 'underline';
      default:
        return 'none';
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case 'primary':
        return '#333333';
      case 'transparent':
        return '#777E90';
      case 'thickened':
        return '#23262F';
    }
  }};
  cursor: pointer;
  margin-right: 5px;
`;

export default memo(ListingsData);
