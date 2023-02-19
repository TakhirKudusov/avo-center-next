import { TableContent } from '../table/types';
import {
  Dispatch,
  FC,
  memo,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
  useState,
} from 'react';
import styled from 'styled-components';
import { Button } from '../../../ui-kit';
import CloseIcon from '../../../../assets/svg/close-icon.svg';
import { FormikProps } from 'formik';
import { ModalState } from '../../utils/types';
import { ModalHeader } from '../../utils/enums';
import { TrashCan } from '@styled-icons/fa-regular/TrashCan';
import { TriangleDown } from '@styled-icons/octicons/TriangleDown';

type ModalProps = {
  children: ReactNode;
  data?: TableContent | null;
  modalState?: ModalState;
  setModalState?: Dispatch<SetStateAction<ModalState>>;
  formikProps?: FormikProps<TableContent> | null;
  handleDeleteInstance?: () => void;
};

const ModalInfo: FC<ModalProps> = ({
  data,
  modalState,
  setModalState,
  children,
  formikProps,
  handleDeleteInstance,
}) => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

  const handleWrapperClick = () => {
    setDeleteOpen(false);
    if (setModalState) setModalState(null);
    if (formikProps) formikProps.handleReset();
  };

  const handleContainerClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = (e: SyntheticEvent) => {
    e.stopPropagation();
    setDeleteOpen(false);
  };

  const handleDeleteInstanceClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    setDeleteOpen(false);
    if (handleDeleteInstance) handleDeleteInstance();
  };

  return (
    <Wrapper onClick={handleWrapperClick} isOpen={!!modalState}>
      <Container onClick={handleContainerClick}>
        <HeaderContainer>
          <HeaderText>
            {modalState === 'post'
              ? ModalHeader.CREATE_NEW
              : ModalHeader.INSTANCE_INFO}
          </HeaderText>
          <ButtonsContainer>
            {modalState === 'put' && handleDeleteInstance && (
              <TrashBtn round={true} onClick={handleDeleteOpen}>
                {deleteOpen && (
                  <DeleteModalWrapper>
                    <DeleteModalContainer>
                      <DeleteModalText>
                        All&#160;data&#160;of&#160;this&#160;instance&#160;will
                        be removed. Are you sure?
                      </DeleteModalText>
                      <DeleteButtonsContainer>
                        <YesBtn
                          onClick={handleDeleteInstanceClick}
                          round={true}
                        >
                          Yes
                        </YesBtn>
                        <NoBtn onClick={handleDeleteClose} round={true}>
                          No
                        </NoBtn>
                      </DeleteButtonsContainer>
                    </DeleteModalContainer>
                    <TriangleIcon />
                  </DeleteModalWrapper>
                )}
                <TrashIcon />
              </TrashBtn>
            )}
            <StyledButton onClick={handleWrapperClick} round={true}>
              <CloseIcon />
            </StyledButton>
          </ButtonsContainer>
        </HeaderContainer>
        <BodyContainer>{children}</BodyContainer>
      </Container>
    </Wrapper>
  );
};

const DeleteBtn = styled(Button)`
  width: 30px;
  height: 30px;
  font-size: 13px;
  padding: 0;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  z-index: 2;
`;

const YesBtn = styled(DeleteBtn)`
  color: darkgreen;
  border-color: rgba(0, 100, 0, 0.25);
  &:hover {
    color: rgba(0, 100, 0, 0.75);
  }
`;

const NoBtn = styled(DeleteBtn)`
  color: darkred;
  border-color: rgba(139, 0, 0, 0.25);

  &:hover {
    color: rgba(139, 0, 0, 0.75);
  }
`;

const DeleteButtonsContainer = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;

const DeleteModalText = styled.p`
  font-size: 14px;
  margin: 0;
  color: rgb(139, 0, 0);
`;

const TriangleIcon = styled(TriangleDown)`
  width: 50px;
  position: relative;
  color: white;
  bottom: 23px;
  left: 77px;
`;

const DeleteModalContainer = styled.div`
  display: flex;
  background: #fcfcfd;
  padding: 10px;
  height: fit-content;
  width: fit-content;
  border-radius: 15px;
  justify-content: center;
  flex-direction: column;
  row-gap: 7px;
  z-index: 1;
`;

const DeleteModalWrapper = styled.div`
  position: relative;
  bottom: 147px;
  right: 92px;
  align-self: flex-start;
  width: 0;
  height: 0;
  overflow: visible;
  cursor: default;
`;

const TrashIcon = styled(TrashCan)`
  width: 15px;
  color: rgb(139, 0, 0);
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 12px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 16px;
`;

const HeaderText = styled.div`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.01em;
  color: #23262f;
`;

const StyledButton = styled(Button)`
  padding: 0;
  width: 40px;
`;

const TrashBtn = styled(StyledButton)`
  border-color: rgba(139, 0, 0, 0.15);
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  width: 448px;
  padding: 32px;
  background: #fcfcfd;
  box-shadow: 0 64px 64px -48px rgba(31, 47, 70, 0.12);
  flex-direction: column;
  border-radius: 20px;
  row-gap: 32px;
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 11;
  background-color: rgba(20, 20, 22, 0.8);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: none;
  & * {
    transition: none;
  }
`;
export default memo(ModalInfo);
