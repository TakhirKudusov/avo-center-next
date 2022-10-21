import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useAppDispatch } from '../../../../redux/hooks';
import { getNavItems } from './helpers';
import MenuNavItem from './MenuNavItem';

const MenuNav = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <MenuNavWrapper>
      {getNavItems(router, dispatch).map((item, index) => (
        <MenuNavItem
          key={`switch-${index}`}
          icon={item.icon}
          label={item.label}
          controller={item.controller}
          clickHandler={item.clickHandler}
        />
      ))}
    </MenuNavWrapper>
  );
};

const MenuNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 16px;

  & > div:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export default MenuNav;
