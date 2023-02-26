import { memo } from 'react';
import styled from 'styled-components';
import { Button, ButtonSize, ButtonType } from '../../../ui-kit';

const WalletCard = () => {
  return (
    <WalletCardInfoWrapper>
      <InfoRow>
        <AvoIcon src={`/images/AvoIcon.png`} />
        <AVOAmount>
          <AVOAmountLabel>Balance</AVOAmountLabel>
          <AVOAmountValue>4.689 AVO</AVOAmountValue>
        </AVOAmount>
      </InfoRow>
      <Button
        size={ButtonSize.Medium}
        btnType={ButtonType.Primary}
        fullSize={true}
        style={{ marginTop: '10px', color: 'rgba(255, 255, 255, 0.7)' }}
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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  border-radius: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AvoIcon = styled.img`
  width: 20px;
  height: 32px;
`;

const AVOAmount = styled.div`
  display: flex;
  flex-direction: column;
`;

const AVOAmountLabel = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.7);
`;

const AVOAmountValue = styled.div`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #fcfcfd;
`;

const AvoRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  margin-top: 10px;
`;

const AvoRateLabel = styled.div`
  color: #fcfcfd;
`;

const AvoRateValue = styled.div`
  color: rgba(255, 255, 255, 0.7);
`;

export default memo(WalletCard);
