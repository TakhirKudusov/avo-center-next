import React, { Dispatch, memo, useEffect } from 'react';
import styled from 'styled-components';
import { handleSetActiveClick } from '../../common/helpers';
import { Tab } from '../common/types';
import { CATEGORIES_LIST } from '../common/constants';

type Props = {
  setCurrentTab: Dispatch<React.SetStateAction<Tab>>;
};

const CategoryListItem: React.FC<Props> = ({ setCurrentTab }) => {
  const handleActiveClick =
    (name: Tab) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      handleSetActiveClick(e, 'category-list-item', 'active');
      setCurrentTab(name);
    };

  return (
    <>
      {CATEGORIES_LIST?.map((el, i) => {
        return (
          <Container
            key={i}
            className={'category-list-item'}
            onClick={handleActiveClick(el.name)}
          >
            <el.Icon />
            <Text className={'category-list-item__text'}>{el.name}</Text>
          </Container>
          // <CategoryListItem
          //     key={el.name + i}
          //     name={el.name}
          //     Icon={el.Icon}
          //     setCurrentTab={setCurrentTab}
          // />
        );
      })}
    </>
  );
};

const Text = styled.p`
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 16px;
  width: 86px;
  height: 16px;
  cursor: pointer;
  &.active .category-list-item__text {
    color: #23262f;
  }
`;

export default memo(CategoryListItem);
