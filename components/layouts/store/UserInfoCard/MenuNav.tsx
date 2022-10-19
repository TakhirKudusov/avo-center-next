import { useRouter } from 'next/router';
import styled from 'styled-components';
import { getNavItems } from './helpers';
import MenuNavItem from './MenuNavItem';

const MenuNav = () => {
  const router = useRouter();

  return (
    <MenuNavWrapper>
      {getNavItems(router).map((item) => (
        <MenuNavItem
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
