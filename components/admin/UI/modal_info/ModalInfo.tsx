import { TableContent, TableHead } from '../table/types';
import {
  Dispatch,
  FC,
  memo,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
} from 'react';
import styled from 'styled-components';
import { Button } from '../../../ui-kit';
import CloseIcon from '../../../../assets/svg/close-icon.svg';

type ModalProps = {
  data: TableContent | null;
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

const ModalInfo: FC<ModalProps> = ({
  data,
  isOpened,
  setIsOpened,
  children,
}) => {
  const handleWrapperClick = () => {
    setIsOpened(false);
  };

  const handleContainerClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <Wrapper onClick={handleWrapperClick} isOpen={isOpened}>
      <Container onClick={handleContainerClick}>
        <HeaderContainer>
          <HeaderText>Instance info</HeaderText>
          <StyledButton onClick={handleWrapperClick} round={true}>
            <CloseIcon />
          </StyledButton>
        </HeaderContainer>
        <BodyContainer>{children}</BodyContainer>
      </Container>
    </Wrapper>
  );
};

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
