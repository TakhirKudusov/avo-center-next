import { memo } from 'react';
import styled from 'styled-components';
import { Button, ButtonSize, ButtonType } from '../../../ui-kit';

const WalletCard = () => {
  return (
    <WalletCardInfoWrapper>
      <InfoRow>
        <EtheriumIcon src={`/images/etherium.png`} />
        <AVOAmount>
          <AVOAmountLabel>Balance</AVOAmountLabel>
          <AVOAmountValue>4.689 AVO</AVOAmountValue>
        </AVOAmount>
      </InfoRow>
      <Button
        size={ButtonSize.Small}
        btnType={ButtonType.Primary}
        fullSize={true}
        style={{ marginTop: '10px' }}
      >
        Buy AVO
      </Button>
      <AvoRate>
        <AvoRateLabel>1 AVO</AvoRateLabel>
        <AvoRateValue>≈ $2.23</AvoRateValue>
      </AvoRate>
    </WalletCardInfoWrapper>
  );
};

const WalletCardInfoWrapper = styled.div`
  width: 100%;
  height: 140px;
  padding: 8px 8px 12px;
  background: #fcfcfd;
  box-shadow: 0 3px 18px -10px rgba(15, 15, 15, 0.2);
  border-radius: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const EtheriumIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const AVOAmount = styled.div`
  display: flex;
  flex-direction: column;
`;

const AVOAmountLabel = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

const AVOAmountValue = styled.div`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #141416;
`;

const AvoRate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  margin-top: 10px;
  justify-content: center;
`;

const AvoRateLabel = styled.div`
  color: #000000;
`;

const AvoRateValue = styled.div`
  color: rgba(119, 126, 144, 1);
`;

export default memo(WalletCard);
