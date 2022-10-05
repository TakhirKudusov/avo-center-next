import styled from 'styled-components';
import { FlexContainer } from '../../common';
import Logo from '../../common/components/Logo';
import { ButtonSize } from '../../common/enums/buttonSize.enum';
import { ButtonType } from '../../common/enums/buttonType.enum';
import Button from '../../ui-kit/Button';
import Select, { SelectItem, SelectItemSize } from '../../ui-kit/Select';
import Notifications from './Notifications';
import SearchBar from './SearchBar';

const Header = () => {
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

  return (
    <HeaderWrapper>
      <FlexContainer style={{ justifyContent: 'space-between' }}>
        <Logo />
        <ActionsBar>
          <SearchBar />
          <Notifications />
          <Button size={ButtonSize.Medium} type={ButtonType.Primary}>
            Upload
          </Button>
          <Button size={ButtonSize.Medium} type={ButtonType.Secondary}>
            Connect Wallet
          </Button>
          <Select items={languages} size={SelectItemSize.Small} />
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
