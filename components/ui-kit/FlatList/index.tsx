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
      <FlatListChildren>{activeItem?.children}</FlatListChildren>
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
  &:hover {
    background: ${(props) => !props.active && `rgba(53, 57, 69, 0.5)`};
    color: ${(props) => !props.active && 'rgba(252, 252, 253, 0.5)'};
  }
`;

const FlatListChildren = styled.div`
  margin-top: 42px;
  width: fit-content;
  margin-bottom: 48px;
`;

export default FlatList;
