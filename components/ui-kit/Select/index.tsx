import styled from 'styled-components';
import ChevronDownSVG from '../../../assets/svg/chevron-down.svg';
import { SelectItemBackground } from './enums/SelectItemBackground.enum';
import { SelectItemSize } from './enums/selectItemSize.enum';
import { SelectItem } from './types';

type Props = {
  items: SelectItem[];
  background?: SelectItemBackground;
  size?: SelectItemSize;
  style?: any;
};
const Select: React.FC<Props> = ({
  background = SelectItemBackground.None,
  size = SelectItemSize.Small,
  style,
  items,
}) => {
  return (
    <SelectBody style={style} background={background} size={size}>
      <span>{items.length ? items[0].label : ''}</span>
      {/* <ChevronDownSVG /> */}
      <ChevronWrapper background={background} size={size}>
        <ChevronDownSVG />
      </ChevronWrapper>
    </SelectBody>
  );
};

const SelectBody = styled.div<any>`
  position: relative;
  font-size: 14px;
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  border-color: '#e6e8ec';
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
`;

export default Select;
