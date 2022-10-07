import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import ChevronDownSVG from '../../../assets/svg/chevron-down.svg';
import { SelectItemBackground } from './enums';
import { SelectItemSize } from './enums/selectItemSize.enum';
import { handleDropdownExpand, handleDropdownItemClick } from './helpers';
import { SelectItem } from './types';

type Props = {
  items: SelectItem[];
  background?: SelectItemBackground;
  placeholder?: string;
  size?: SelectItemSize;
  showImage?: boolean;
  value?: SelectItem;
  style?: any;
};
const Select: React.FC<Props> = ({
  background = SelectItemBackground.None,
  size = SelectItemSize.Small,
  placeholder = 'Select item',
  value,
  showImage,
  style,
  items,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<SelectItem | undefined>(value);

  return (
    <SelectBody>
      <SelectHeader
        style={style}
        background={background}
        size={size}
        onClick={handleDropdownExpand(setExpanded)}
      >
        {showImage && (
          <SelectDropdownItemImage
            style={{ backgroundImage: `url(${selected?.image})` }}
          />
        )}
        <span>{selected ? selected?.label : placeholder}</span>
        <ChevronWrapper background={background} size={size} rotated={expanded}>
          <ChevronDownSVG />
        </ChevronWrapper>
      </SelectHeader>
      <SelectDropdown expanded={expanded} size={size}>
        {items.map((item, index) => (
          <SelectDropdownItem
            key={`drop-down-${index}`}
            isSelected={item.value === selected?.value}
            onClick={handleDropdownItemClick(item, setSelected, setExpanded)}
          >
            {showImage && (
              <SelectDropdownItemImage
                style={{ backgroundImage: `url(${item?.image})` }}
              />
            )}
            <SelectDropdownItemLabel>{item.label}</SelectDropdownItemLabel>
          </SelectDropdownItem>
        ))}
      </SelectDropdown>
    </SelectBody>
  );
};

const SelectBody = styled.div<any>`
  position: relative;
`;

const SelectHeader = styled.div<any>`
  position: relative;
  font-size: 14px;
  border: 2px solid #e6e8ec;
  color: rgba(35, 38, 47, 1);
  cursor: pointer;
  background: ${(props) =>
    props.background === SelectItemBackground.None ? 'none' : '#fff'};
  font-family: ${(props) =>
    props.background === SelectItemBackground.None
      ? `'DM Sans', sans-serif`
      : `'Poppins', sans-serif`};
  font-weight: ${(props) =>
    props.background === SelectItemBackground.None ? '700' : '500'};
  height: ${(props) => (props.size === SelectItemSize.Small ? '40px' : '48px')};
  padding: ${(props) =>
    props.size === SelectItemSize.Small ? '10px 10px' : '12px 16px'};
  border-radius: ${(props) =>
    props.background === SelectItemBackground.None ? '8px' : '12px'};
  padding-right: 40px;
`;

const ChevronWrapper = styled.div<any>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${(props) => (props.size === SelectItemSize.Small ? '8px' : '6px')};
  right: 8px;
  width: ${(props) => (props.size === SelectItemSize.Small ? '22px' : '32px')};
  height: ${(props) => (props.size === SelectItemSize.Small ? '22px' : '32px')};
  border: ${(props) =>
    props.background === SelectItemBackground.None
      ? 'none'
      : '2px solid #E6E8EC'};
  border-radius: 50%;
  transition: all 0.3s;
  transform: ${(props) => (props.rotated ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const SelectDropdown = styled.div<any>`
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 8px;
  background: #fcfcfd;
  border: 2px solid #e6e8ec;
  box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
  border-radius: 12px;

  top: ${(props) => (props.size === SelectItemSize.Small ? '48px' : '56px')};
`;

const SelectDropdownItem = styled.div<any>`
  padding: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  transition: all 0.3s;
  background: ${(props) => (props.isSelected ? '#efefef' : 'none')};
  cursor: pointer;

  &:hover {
    background: #f4f5f6;
  }
`;

const SelectDropdownItemImage = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ccc;
`;

const SelectDropdownItemLabel = styled.div`
  color: #23262f;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export default Select;
