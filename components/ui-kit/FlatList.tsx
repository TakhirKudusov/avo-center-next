import { useState } from 'react';
import styled from 'styled-components';
import { ListItem } from './types';

type Props = {
  items: ListItem[];
  onChange?: (item: ListItem) => void;
};
const FlatList: React.FC<Props> = ({ items, onChange }) => {
  const [activeItem, setActiveItem] = useState<ListItem | undefined>(
    items ? items[0] : undefined,
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

  return (
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
  );
};

const FlatListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FlatListItem = styled.button<any>`
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
`;

export default FlatList;
