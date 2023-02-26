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
          <CopySVG
            color="rgba(255, 255, 255, 0.7)"
            style={{ cursor: 'pointer' }}
          />
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
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

const PublicAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

const PublicAddressValue = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.7);
`;

export default UserInfoCard;
