import styled from 'styled-components';
import { FlexContainer } from '../../common';
import Logo from '../../common/components/Logo';
import Button from '../../ui-kit/Button/Button';
import Select from '../../ui-kit/Select';
import Notifications from './Notifications';
import SearchBar from './SearchBar';
import { SelectItem } from '../../ui-kit/Select/types';
import { SelectItemSize } from '../../ui-kit/Select/enums';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const languages: SelectItem[] = [
    {
      value: 'en',
      label: 'EN',
    },
    {
      value: 'ru',
      label: 'RU',
    },
  ];

  const handleClick = () => {
    router.push('/collections/create-single');
  };

  return (
    <HeaderWrapper>
      <FlexContainer style={{ justifyContent: 'space-between' }}>
        <Link href={'/'}>
          <Logo />
        </Link>
        <ActionsBar>
          <SearchBar />
          <Notifications />
          <Link href={'/collections/create-single'} onClick={handleClick}>
            <Button size={ButtonSize.Medium} type={ButtonType.Primary}>
              Upload
            </Button>
          </Link>
          <Button size={ButtonSize.Medium} type={ButtonType.Secondary}>
            Connect Wallet
          </Button>
          <Select
            items={languages}
            size={SelectItemSize.Small}
            value={languages[0]}
          />
        </ActionsBar>
      </FlexContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #e6e8ec;
  background: #fff;
  z-index: 100;
`;

const ActionsBar = styled.div`
  display: flex;
  gap: 12px;
`;

export default Header;
