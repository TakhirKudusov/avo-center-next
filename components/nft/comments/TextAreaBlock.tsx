import React, { useContext } from 'react';
import styled from 'styled-components';
import CornerDownRightSVG from '../../../assets/svg/corner-down-right.svg';
import RightSideCornerSVG from '../../../assets/svg/right-side-corner.svg';
import { devices } from '../../../common/constants';
import { useAppSelector } from '../../../redux/hooks';
import { TAuthState } from '../../../redux/types';
import { ConnectWalletContext } from '../NFT/context';

const TextAreaBlock: React.FC = () => {
  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const { setOpenConnectWallet } = useContext(ConnectWalletContext);

  const handleMesageSend = () => {
    if (!user) {
      setOpenConnectWallet(true);
    }
  };

  return (
    <TextAreaWrapper>
      <SendMessageButtonWrapper>
        <CornerDownRightSVG />
        <RightSideCornerSVG />
      </SendMessageButtonWrapper>
      <TextAreaContainer>
        <TextArea placeholder={'Comment...'} />
        <SendButton onClick={handleMesageSend}>
          <p>Send</p>
        </SendButton>
      </TextAreaContainer>
    </TextAreaWrapper>
  );
};

const SendButton = styled.button`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  padding: 6px 10px;
  gap: 10px;
  width: 62px;
  height: 28px;
  background: #333333;
  border-radius: 6px;
  position: relative;
  bottom: 14px;
  right: 6px;
  cursor: pointer;
  border: none;
  & p {
    width: 30px;
    height: 16px;
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    position: relative;
    bottom: 12px;
  }
  &:hover {
    background-color: #515261;
  }
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const TextAreaWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
  gap: 6px;
  width: 1056px;
  height: 40px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const SendMessageButtonWrapper = styled.div`
  width: 25px;
  height: 25px;
  & :first-child {
    position: relative;
    left: 16.67%;
    right: 16.67%;
    top: 25.67%;
    bottom: 37.5%;
  }
  & :last-child {
    position: relative;
    right: 5%;
    top: 45%;
    bottom: 16.67%;
  }
`;

const TextArea = styled.textarea`
  padding: 6px 8px 6px 16px;
  width: 1016px;
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  resize: none;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #23262f;
  position: relative;
  top: 20px;
  ::placeholder {
    font-size: 12px;
    line-height: 20px;
    display: flex;
    text-align: start;
    color: #777e91;
    position: relative;
    top: 3px;
  }

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

export default TextAreaBlock;
