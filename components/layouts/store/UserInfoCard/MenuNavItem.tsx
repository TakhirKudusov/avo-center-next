import styled from 'styled-components';
import { TMenuItem } from './types';

type Props = TMenuItem;
const MenuNavItem: React.FC<Props> = ({
  label,
  icon,
  clickHandler,
  controller,
}) => {
  return (
    <MenuNavItemWrapper hoverable={!!clickHandler} onClick={clickHandler}>
      <MenuNavItemInfo>
        {icon}
        <MenuNavItemLabel>{label}</MenuNavItemLabel>
      </MenuNavItemInfo>
      {controller}
    </MenuNavItemWrapper>
  );
};

const MenuNavItemWrapper = styled.div<{ hoverable: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid #e6e8ec;
  cursor: ${(props) => (props.hoverable ? 'pointer' : 'initial')};
`;

const MenuNavItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MenuNavItemLabel = styled.div`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #777e91;
`;

export default MenuNavItem;
