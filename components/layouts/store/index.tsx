import { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { TAuthState } from '../../../redux/types';
import ConnectWallet from '../../modals/ConnectWallet';
import { Modal } from '../../ui-kit';
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
    <>
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
    </>
  );
};

export default StoreLayout;
