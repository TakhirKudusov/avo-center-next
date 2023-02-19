import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import { Verification } from '../../../../redux/APIs/types';
import { Button, ButtonType, Divider } from '../../../ui-kit';
import Image from 'next/image';
import { ModalState } from '../../utils/types';

type Props = {
  modalData: Verification;
  setModalState: Dispatch<SetStateAction<ModalState>>;
  updateVerification: (arg: any) => void;
};

const VerifModal: FC<Props> = ({
  modalData,
  updateVerification,
  setModalState,
}) => {
  const handleVerify = () => {
    updateVerification({ id: modalData?.id });
    setModalState(null);
  };

  return (
    <Wrapper>
      <InfoText>
        <b>Verification ID:</b> {modalData?.id}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Photo ID</b> {modalData?.idPhoto}
      </InfoText>
      <Divider />
      <ImageContainer>
        <Image
          src={'/' + modalData?.facePhoto}
          alt="User photo"
          objectFit="cover"
          loading="lazy"
          layout="fill"
        />
      </ImageContainer>
      <Divider />
      <InfoText>
        <b>User ID</b> {modalData?.user}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Is verified</b> {modalData?.status === 'Verified' ? 'Yes' : 'No'}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Created at</b> {modalData?.createdAt}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Updated at</b> {modalData?.updatedAt}
      </InfoText>
      <StyledButton
        disabled={modalData?.status === 'Verified'}
        btnType={ButtonType.Secondary}
        onClick={handleVerify}
      >
        Verify
      </StyledButton>
    </Wrapper>
  );
};

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
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

export default VerifModal;
