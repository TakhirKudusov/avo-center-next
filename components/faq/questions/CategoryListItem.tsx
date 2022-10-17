import React, { Dispatch, memo, useEffect } from 'react';
import styled from 'styled-components';
import { handleSetActiveClick } from '../../../common/helpers';
import { Tab } from '../common/types';

type Props = {
  name: Tab;
  Icon: React.FC;
  setCurrentTab: Dispatch<React.SetStateAction<Tab>>;
};

const CategoryListItem: React.FC<Props> = ({ name, Icon, setCurrentTab }) => {
  return (
    <Container
      className={'category-list-item'}
      onClick={(e) => {
        handleSetActiveClick(e, 'category-list-item', 'active');
        setCurrentTab(name);
      }}
    >
      <Icon />
      <p>{name}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 16px;
  width: 86px;
  height: 16px;
  cursor: pointer;
  p {
    padding-top: 2px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #777e91;
    text-transform: capitalize;
  }
  &.active p {
    color: #23262f;
  }
`;

export default memo(CategoryListItem);
