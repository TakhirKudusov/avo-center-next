import { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { TAuthState } from '../../../redux/types';
import ConnectWallet from '../../modals/ConnectWallet';
import { Modal } from '../../ui-kit';
import { UploadItemContext } from './contexts';
import Footer from './Footer';
import Header from './Header';
import { handleWalletConnectClick } from './helpers';

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  const [isConnectWalletVisible, setIsConnectWalletVisible] = useState(false);
  const [isSmallScreenMenuVisible, setIsSmallScreenMenuVisible] =
    useState(false);
  const [isUploadItemVisible, setIsUploadItemVisible] = useState(false);

  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const handleMenuClose = () => {
    setIsSmallScreenMenuVisible(false);
  };

  const handleConnectWalletClose = () => {
    setIsConnectWalletVisible(false);
  };

  const handleMenuWalletConnect = () => {
    handleWalletConnectClick(setIsConnectWalletVisible)();
    handleMenuClose();
  };

  const handleUploadItemClose = () => {
    setIsUploadItemVisible(false);
  };

  const handleUploadClick = () => () => {
    setIsUploadItemVisible(true);
  };

  return (
    <UploadItemContext.Provider
      value={{
        isUploadItemVisible,
        handleUploadClick,
        handleUploadItemClose,
      }}
    >
      <PageWrapper>
        <Header
          user={user}
          isSmallScreenMenuVisible={isSmallScreenMenuVisible}
          isUploadItemVisible={isUploadItemVisible}
          setIsConnectWalletVisible={setIsConnectWalletVisible}
          setIsSmallScreenMenuVisible={setIsSmallScreenMenuVisible}
          handleConnectWalletClose={handleConnectWalletClose}
          handleMenuWalletConnect={handleMenuWalletConnect}
          handleUploadItemClose={handleUploadItemClose}
          handleUploadClick={handleUploadClick}
        />
        {children}
        <Footer
          setIsConnectWalletVisible={setIsConnectWalletVisible}
          handleUploadItemClose={handleUploadItemClose}
          handleUploadClick={handleUploadClick}
        />
        <Modal
          title="Connect wallet"
          hasFooter={false}
          open={isConnectWalletVisible && !user}
          onClose={handleConnectWalletClose}
        >
          <ConnectWallet />
        </Modal>
      </PageWrapper>
    </UploadItemContext.Provider>
  );
};

const PageWrapper = styled.div`
  background-image: url('/images/page-layout.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export default StoreLayout;
