import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { devices } from '../../../common/constants';

import { FlatListTypes } from './constants';
import { ListItem } from './types';
import { getInitialValue } from './utils';

type Props = {
  items: ListItem[];
  type?: FlatListTypes;
  value?: ListItem;
  onChange?: (item: ListItem) => void;
};

const FlatList: React.FC<Props> = ({
  items,
  value,
  type = FlatListTypes.PROFILE_TABS,
  onChange,
}) => {
  const initialValue = getInitialValue(items, type, value);
  const [activeItem, setActiveItem] = useState<ListItem | undefined>(
    initialValue,
  );

  const handleClick = (item: ListItem) => () => {
    if (onChange) {
      onChange(item);
      setActiveItem(item);
    }
  };

  const isActive = (activeItem: ListItem | undefined, item: ListItem) => {
    return activeItem?.id === item.id;
  };

  useEffect(() => {
    const curItem = items.find((item) => item.id === value?.id);

    if (curItem) {
      setActiveItem(curItem);
    }
  }, [value, items]);

  return (
    <FlatListContainer>
      <FlatListWrapper>
        {items.map((item, index) => (
          <FlatListItem
            key={`flat-item-${index}`}
            active={isActive(activeItem, item)}
            onClick={handleClick(item)}
          >
            {item.label}
          </FlatListItem>
        ))}
      </FlatListWrapper>
      {!!activeItem?.children && (
        <FlatListChildren>{activeItem?.children}</FlatListChildren>
      )}
    </FlatListContainer>
  );
};

const FlatListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlatListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (${devices.mobile}) {
    overflow: scroll;
  }
`;

const FlatListItem = styled.button<any>`
  min-width: fit-content;
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding: 6px 12px;
  border-radius: 100px;
  cursor: pointer;
  background: ${(props) => (props.active ? '#ffffff' : 'none')};
  color: ${(props) => (props.active ? '#141416' : 'rgba(255, 255, 255, 0.7) ')};
  border: none;
  &:hover {
    background: ${(props) => !props.active && `rgba(255, 255, 255, 0.5)`};
    color: ${(props) => !props.active && '#141416'};
  }
`;

const FlatListChildren = styled.div`
  margin-top: 42px;
  width: fit-content;
  margin-bottom: 48px;
  width: 100%;
`;

export default FlatList;
