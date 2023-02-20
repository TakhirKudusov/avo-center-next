import styled from 'styled-components';
import { Dispatch, FC, memo, SetStateAction } from 'react';
import { Button } from '../../../ui-kit';
import { ModalState } from '../../utils/types';

type HeaderProps = {
  text: string;
  setModalState?: Dispatch<SetStateAction<ModalState>>;
};

const PageHeader: FC<HeaderProps> = ({ text, setModalState }) => {
  const handleButtonClick = () => {
    if (setModalState) setModalState('post');
  };

  return (
    <HeaderContainer>
      <HeaderText>{text}</HeaderText>
      {setModalState && <Button onClick={handleButtonClick}>Create new</Button>}
    </HeaderContainer>
  );
};

const HeaderText = styled.div`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: rgba(35, 38, 47, 0.8);
  width: fit-content;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default memo(PageHeader);
