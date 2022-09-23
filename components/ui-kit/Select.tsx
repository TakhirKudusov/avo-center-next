import styled from 'styled-components';
import ChevronDownSVG from '../../assets/svg/chevron-down.svg';

export type SelectItem = {
  value: string | number | boolean;
  label: string | number;
};

type Props = {
  items: SelectItem[];
};
const Select: React.FC<Props> = ({ items }) => {
  return (
    <SelectBody>
      <span>{items[0].label}</span>
      <ChevronDownSVG />
    </SelectBody>
  );
};

const SelectBody = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 700;
  border: 2px solid #e6e8ec;
  padding: 10px 10px;
  padding-right: 40px;
  border-radius: 8px;
  height: 40px;
  border-color: '#e6e8ec';
  color: rgba(35, 38, 47, 1);
  cursor: pointer;

  svg {
    position: absolute;
    top: 7px;
    right: 8px;
  }
`;

export default Select;
