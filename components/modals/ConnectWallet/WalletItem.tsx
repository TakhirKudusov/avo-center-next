import { memo } from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  icon: JSX.Element;
  onClick: () => void;
};
const WalletItem: React.FC<Props> = ({ name, icon, onClick }) => {
  return (
    <WalletItemWrapper onClick={onClick}>
      {icon}
      <WalletItemContent>
        <WalletItemName className="wallet-item-name">{name}</WalletItemName>
        <WalletItemDesc className="wallet-item-desc">
          Connect to your wallet
        </WalletItemDesc>
      </WalletItemContent>
    </WalletItemWrapper>
  );
};

const WalletItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 64px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(12, 51, 60, 0.6) 0%,
        rgba(12, 55, 83, 0.3) 77.08%,
        rgba(255, 255, 255, 0) 100%
      );

    & > div > .wallet-item-name {
      color: rgba(255, 255, 255, 0.7);
    }

    & > div > .wallet-item-desc {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const WalletItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const WalletItemName = styled.div`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const WalletItemDesc = styled.div`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

export default memo(WalletItem);
