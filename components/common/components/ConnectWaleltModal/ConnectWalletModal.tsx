import { Dispatch, FC } from 'react';
import styled from 'styled-components';
import { Button, ButtonSize, ButtonType, Modal } from '../../../ui-kit';

type Props = {
  open: boolean;
  setOpen: Dispatch<boolean>;
  onSignIn: () => Promise<void>;
};

const ConnectWalletModal: FC<Props> = ({ open, setOpen, onSignIn }) => {
  return (
    <Modal
      title="Connect First"
      hasFooter={false}
      open={open}
      onClose={() => setOpen(false)}
    >
      <ConnectWalletContainer>
        <ConnectWalletInfo>
          You need to connect your wallet first to sign messages and send
          transaction to network
        </ConnectWalletInfo>
        <Button
          btnType={ButtonType.Secondary}
          size={ButtonSize.Large}
          onClick={onSignIn}
        >
          Connect wallet
        </Button>
      </ConnectWalletContainer>
    </Modal>
  );
};

const ConnectWalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
`;

const ConnectWalletInfo = styled.div`
  font-family: 'Montserrat';
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 28px;
`;

export default ConnectWalletModal;
