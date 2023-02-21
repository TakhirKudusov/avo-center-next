import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../../common/constants';
import { ListItem } from './types';

type Props = {
  items: ListItem[];
  value?: ListItem;
  onChange?: (item: ListItem) => void;
};
const FlatList: React.FC<Props> = ({ items, value, onChange }) => {
  const initialValue = value ? value : undefined;
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
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  padding: 6px 12px;
  border-radius: 100px;
  cursor: pointer;
  background: ${(props) => (props.active ? '#353945' : 'none')};
  color: ${(props) => (props.active ? '#fcfcfd' : '#777E91')};
  border: none;
  &:hover {
    background: ${(props) => !props.active && `rgba(53, 57, 69, 0.5)`};
    color: ${(props) => !props.active && 'rgba(252, 252, 253, 0.5)'};
  }
`;

const FlatListChildren = styled.div`
  margin-top: 42px;
  width: fit-content;
  margin-bottom: 48px;
  width: 100%;
`;

export default FlatList;
