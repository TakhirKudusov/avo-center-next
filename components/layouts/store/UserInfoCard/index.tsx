import styled from 'styled-components';
import CopySVG from '../../../../assets/svg/copy.svg';
import { CoppyToClipboard } from '../../../ui-kit';
import WalletCard from '../WalletCard/';
import MenuNav from './MenuNav';

const UserInfoCard = () => {
  const walletId = '0xc4c16a645...b21a';

  return (
    <UserInfoCardWrapper>
      <UserName>Enrico Cole</UserName>
      <PublicAddress>
        <PublicAddressValue>{walletId}</PublicAddressValue>
        <CoppyToClipboard text={walletId}>
          <CopySVG style={{ cursor: 'pointer' }} />
        </CoppyToClipboard>
      </PublicAddress>
      <WalletCard />
      <MenuNav />
    </UserInfoCardWrapper>
  );
};

const UserInfoCardWrapper = styled.div`
  width: 224px;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #23262f;
`;

const PublicAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const PublicAddressValue = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
`;

export default UserInfoCard;
