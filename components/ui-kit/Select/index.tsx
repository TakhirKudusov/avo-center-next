import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import styled from 'styled-components';
import ChevronDownSVG from '../../../assets/svg/chevron-down.svg';
import { TFormFieldProps } from '../../../common/types';
import { useOnClickOutside } from '../../common/hooks';
import useConnectForm from '../useConnectForm';
import { SelectItemBackground } from './enums';
import { SelectItemSize } from './enums/selectItemSize.enum';
import { handleDropdownExpand } from './helpers';
import { SelectItem } from './types';

type Props = {
  hasError?: boolean;
  hasSchema?: boolean;
  items?: SelectItem[];
  background?: SelectItemBackground;
  placeholder?: string;
  size?: SelectItemSize;
  showImage?: boolean;
  value?: SelectItem;
  style?: any;
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  meta?: FieldMetaProps<any>;
  onChange?: (value: any) => void;
};

const Select: React.FC<Props & TFormFieldProps> = ({
  background = SelectItemBackground.None,
  size = SelectItemSize.Small,
  placeholder = 'Select item',
  hasError = false,
  hasSchema = false,
  field,
  form,
  showImage,
  value,
  style,
  items,
  onChange,
}) => {
  const selectedItem = items?.find((item) => {
    const curValue = field?.value ?? value;

    return item.value === curValue || item.value === curValue?.value;
  });
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<SelectItem | undefined>(
    selectedItem,
  );
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dropdownItemsRef = useRef<HTMLDivElement | null>(null);

  const handleDropdownClose = () => {
    setExpanded(false);
  };

  useConnectForm(selected?.value, form, field, hasSchema, onChange);
  useOnClickOutside(wrapperRef, handleDropdownClose, dropdownItemsRef);

  const handleDropdownItemClick =
    (
      item: SelectItem,
      setSelected: Dispatch<SetStateAction<SelectItem | undefined>>,
    ) =>
    () => {
      setSelected((prev) => {
        if (prev === item) return selectedItem;

        return item;
      });
      handleDropdownClose();
    };

  return (
    <SelectBody>
      <SelectHeader
        style={style}
        background={background}
        size={size}
        onClick={handleDropdownExpand(setExpanded)}
        hasError={hasError}
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
      <SelectDropdown
        ref={dropdownItemsRef}
        expanded={expanded}
        size={size}
        style={style}
      >
        {items?.map((item, index) => (
          <SelectDropdownItem
            key={`drop-down-${index}`}
            isSelected={item.value === selected?.value}
            onClick={handleDropdownItemClick(item, setSelected)}
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

const SelectHeader = styled.div<{
  background: SelectItemBackground;
  size: SelectItemSize;
  hasError: boolean;
}>`
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
  border-color: ${(props) => (props.hasError ? '#ef466f' : '#e6e8ec')};
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
  transform: ${(props) => (props.rotated ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const SelectDropdown = styled.div<{ size: SelectItemSize; expanded: boolean }>`
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
  box-shadow: 0 64px 64px -48px rgba(31, 47, 70, 0.12);
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
