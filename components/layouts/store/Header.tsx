import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import WalletSVG from '../../../assets/svg/wallet.svg';
import { useAppSelector } from '../../../redux/hooks';
import { TAuthState } from '../../../redux/types';
import { FlexContainer } from '../../common';
import Logo from '../../common/components/Logo';
import ConnectWallet from '../../modals/ConnectWallet';
import { Tooltip } from '../../ui-kit';
import Button from '../../ui-kit/Button/Button';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';
import Select from '../../ui-kit/Select';
import { SelectItemSize } from '../../ui-kit/Select/enums';
import { SelectItem } from '../../ui-kit/Select/types';
import {
  handleCreateNFTClick,
  handleUploadClick,
  handleWalletConnectClick,
} from './helpers';
import Notifications from './Notifications';
import SearchBar from './SearchBar';

const Header = () => {
  const [isConnectWalletVisible, setIsConnectWalletVisible] = useState(false);
  const { user } = useAppSelector<TAuthState>((state) => state.auth);

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

  return (
    <HeaderWrapper>
      <FlexContainer style={{ justifyContent: 'space-between' }}>
        <Link href={'/'}>
          <Logo />
        </Link>
        <ActionsBar>
          <SearchBar />
          <Notifications />
          {!user && (
            <AnonymousActionButtons>
              <Button
                onClick={handleUploadClick(router)}
                size={ButtonSize.Medium}
                type={ButtonType.Primary}
              >
                Upload
              </Button>
              <Button
                size={ButtonSize.Medium}
                type={ButtonType.Secondary}
                onClick={handleWalletConnectClick(setIsConnectWalletVisible)}
              >
                Connect Wallet
              </Button>
            </AnonymousActionButtons>
          )}
          {!!user && (
            <AuthorizedActionButtons>
              <Button
                onClick={handleCreateNFTClick()}
                size={ButtonSize.Medium}
                type={ButtonType.Primary}
              >
                Create NFT
              </Button>
              <Link href={'/profile'}>
                <Button
                  style={{ marginLeft: '12px' }}
                  size={ButtonSize.Medium}
                  type={ButtonType.Secondary}
                >
                  <WalletIcon>
                    <WalletSVG />
                  </WalletIcon>
                  <WalletNumber>0X3a5...4m243</WalletNumber>
                </Button>
              </Link>
              <Tooltip content={<div>content</div>}>
                <Button
                  style={{ marginLeft: '4px' }}
                  size={ButtonSize.Medium}
                  type={ButtonType.Secondary}
                >
                  7.00698
                  <WalletCurrency>AVO</WalletCurrency>
                </Button>
              </Tooltip>
            </AuthorizedActionButtons>
          )}
          <Select
            items={languages}
            size={SelectItemSize.Small}
            value={languages[0]}
          />
        </ActionsBar>
      </FlexContainer>
      {isConnectWalletVisible && !user && <ConnectWallet />}
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

const AnonymousActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AuthorizedActionButtons = styled.div`
  display: flex;
  align-items: center;
`;

const WalletCurrency = styled.span`
  color: rgba(252, 252, 253, 0.6);
  margin-left: 4px;
`;

const WalletIcon = styled.div`
  margin-top: -4px;
  margin-left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #656565;
  border-radius: 50%;
`;

const WalletNumber = styled.div`
  margin-top: -4px;
  margin-left: 12px;
`;

export default Header;
