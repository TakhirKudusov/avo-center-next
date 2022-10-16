import { memo, useEffect } from 'react';
import styled from 'styled-components';
import { handleSetActiveClick } from '../../../common/helpers';

type Props = {
  name: string;
  Icon: React.FC;
};

const CategoryListItem: React.FC<Props> = ({ name, Icon }) => {
  return (
    <Container
      className={'category-list-item'}
      onClick={(e) => handleSetActiveClick(e, 'category-list-item', 'active')}
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
  }
  &.active p {
    color: #23262f;
  }
`;

export default memo(CategoryListItem);
