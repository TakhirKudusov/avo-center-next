import { Dispatch, FC, memo, SetStateAction, useMemo } from 'react';
import styled from 'styled-components';
import { Report } from '../../../../redux/APIs/types';
import { ModalState } from '../../utils/types';
import { Button, ButtonType, Divider } from '../../../ui-kit';

type Props = {
  modalData: Report;
  setModalState: Dispatch<SetStateAction<ModalState>>;
  updateProcess: (id: string) => void;
  updateComplete: (id: string) => void;
};
const ReportsInfo: FC<Props> = ({
  modalData,
  setModalState,
  updateComplete,
  updateProcess,
}) => {
  const buttonText = useMemo(() => {
    if (modalData?.status === 'New') {
      return 'Change status to processing';
    }
    if (modalData?.status === 'Processing') {
      return 'Change status to completed';
    }
    if (modalData?.status === 'Completed') {
      return 'Nothing to change';
    }
    return 'Unprocessable';
  }, [modalData]);

  const handleButtonClick = () => {
    if (modalData?.status === 'New') {
      updateProcess(modalData.id);
    }
    if (modalData?.status === 'Processing') {
      updateComplete(modalData.id);
    }
    if (modalData?.status === 'Completed') {
      return;
    }
    setModalState(null);
  };

  return (
    <Wrapper>
      <InfoText>
        <b>ID:</b> {modalData?.id}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Message:</b> {modalData?.message}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Creator ID:</b> {modalData?.creator}
      </InfoText>
      <Divider />
      <InfoText>
        <b>NFT:</b> {modalData?.NFT}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Status:</b> {modalData?.status}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Created at:</b> {modalData?.createdAt}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Updated at:</b> {modalData?.updatedAt}
      </InfoText>
      <StyledButton
        disabled={
          modalData?.status !== 'New' && modalData?.status !== 'Processing'
        }
        btnType={ButtonType.Secondary}
        onClick={handleButtonClick}
      >
        {buttonText}
      </StyledButton>
    </Wrapper>
  );
};

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const InfoText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export default memo(ReportsInfo);
