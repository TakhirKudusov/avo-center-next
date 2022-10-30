import styled from 'styled-components';
import { Button } from '../../ui-kit';
import UnionSVG from '../../../assets/svg/circle-union.svg';
import { Dispatch, memo, ReactEventHandler, SetStateAction } from 'react';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean | null>>;
};

const AddSocAccBtn = ({ setIsOpen }: Props) => {
  const handleSetOpenClick = () => () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Button onClick={handleSetOpenClick()}>
      <AddSocAccBtn.UnionIcon />
      <AddSocAccBtn.ButtonText>Add more social account</AddSocAccBtn.ButtonText>
    </Button>
  );
};

const UnionIcon = styled(UnionSVG)`
  margin-right: 10px;
`;

const ButtonText = styled.p`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #777e91;
  margin: auto;
`;

AddSocAccBtn.UnionIcon = UnionIcon;
AddSocAccBtn.ButtonText = ButtonText;

export default memo(AddSocAccBtn);
