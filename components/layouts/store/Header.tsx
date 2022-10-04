import styled from 'styled-components';
import LogoSVG from '../../../assets/svg/logo.svg';
import { FlexContainer } from '../../common';
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
        <Logo>
          <LogoSVG />
          <LogoTitle>AvoNFT</LogoTitle>
        </Logo>
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

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoTitle = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  line-height: 32px;
  color: rgba(35, 38, 47, 1);
  margin-left: 8px;
  font-weight: 600;
  letter-spacing: -1px;
`;

const ActionsBar = styled.div`
  display: flex;
  gap: 12px;
`;

export default Header;
