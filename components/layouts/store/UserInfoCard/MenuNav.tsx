import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { TAuthState } from '../../../../redux/types';
import { getNavItems } from './helpers';
import MenuNavItem from './MenuNavItem';

const MenuNav = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { user } = useAppSelector<TAuthState>((state) => state.auth);
  const userId = user?.id || '';

  return (
    <MenuNavWrapper>
      {getNavItems(router, dispatch, userId).map((item, index) => (
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
