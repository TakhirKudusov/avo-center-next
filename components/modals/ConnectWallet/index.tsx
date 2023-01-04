import styled from 'styled-components';
import MetamaskSVG from '../../../assets/svg/metamask.svg';
import WalletConnectSVG from '../../../assets/svg/wallet-connect.svg';
import AvoNFTSVG from '../../../assets/svg/avo-nft.svg';
import WalletItem from './WalletItem';
import { Wallet } from './types';
import { useAppDispatch } from '../../../redux/hooks';
import { signin } from '../../../redux/slicers/authSlicer';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { screenSizes } from '../../../common/constants';

const ConnectWallet = () => {
  // const [loading, setLoading] = useState(false); // Loading button state
  const dispatch = useAppDispatch();
  const { screenSize } = useAdaptiveSlider();

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
    <ConnectWalletWrapper screenSize={screenSize}>
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

const ConnectWalletWrapper = styled.div<{ screenSize: number }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${({ screenSize }) =>
    screenSize >= screenSizes.tablet ? '386px' : '260px'};
`;

export default ConnectWallet;
