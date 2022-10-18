import styled from 'styled-components';
import MetamaskSVG from '../../../assets/svg/metamask.svg';
import WalletConnectSVG from '../../../assets/svg/wallet-connect.svg';
import AvoNFTSVG from '../../../assets/svg/avo-nft.svg';
import WalletItem from './WalletItem';
import { Wallet } from './types';
import { useAppDispatch } from '../../../redux/hooks';
import { signin } from '../../../redux/slicers/authSlicer';

const ConnectWallet = () => {
  // const [loading, setLoading] = useState(false); // Loading button state
  const dispatch = useAppDispatch();

  const wallets: Wallet[] = [
    {
      name: 'MetaMask',
      icon: <MetamaskSVG />,
      onClick: () => {
        dispatch(signin());
      },
    },
    {
      name: 'WalletConnect',
      icon: <WalletConnectSVG />,
      onClick: () => {
        console.log('WalletConnect');
      },
    },
    {
      name: 'AvoNFT',
      icon: <AvoNFTSVG />,
      onClick: () => {
        console.log('AVO NFT');
      },
    },
  ];

  return (
    <ConnectWalletWrapper>
      {wallets.map((wallet, index) => (
        <WalletItem
          key={`wallet-${index}`}
          name={wallet.name}
          icon={wallet.icon}
          onClick={wallet.onClick}
        />
      ))}
    </ConnectWalletWrapper>
  );
};

const ConnectWalletWrapper = styled.div`
  position: fixed;
  width: 448px;
  height: 360px;
  padding: 32px;
  background: #fcfcfd;
  box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
  border-radius: 20px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ConnectWallet;
