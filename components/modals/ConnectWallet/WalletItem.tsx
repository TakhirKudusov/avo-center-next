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
        <WalletItemName>{name}</WalletItemName>
        <WalletItemDesc>Connect to your wallet</WalletItemDesc>
      </WalletItemContent>
    </WalletItemWrapper>
  );
};

const WalletItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 64px;
  border: 1px solid #e6e8ec;
  border-radius: 76px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f2f2f2;
  }
`;

const WalletItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const WalletItemName = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #141416;
`;

const WalletItemDesc = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

export default memo(WalletItem);
