import styled from 'styled-components';
import { Button } from '../../ui-kit';
import UnionSVG from '../../../assets/svg/circle-union.svg';
import { Dispatch, memo, SetStateAction } from 'react';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean | undefined>>;
};

const AddAdditionalSocialAccountButton = ({ setIsOpen }: Props) => {
  return (
    <Button onClick={() => setIsOpen((prev) => !prev)}>
      <AddAdditionalSocialAccountButton.UnionIcon />
      <AddAdditionalSocialAccountButton.ButtonText>
        Add more social account
      </AddAdditionalSocialAccountButton.ButtonText>
    </Button>
  );
};

const UnionIcon = styled(UnionSVG)`
  margin-right: 10px;
`;

const ButtonText = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #777e91;
  margin: auto;
`;

AddAdditionalSocialAccountButton.UnionIcon = UnionIcon;
AddAdditionalSocialAccountButton.ButtonText = ButtonText;

export default memo(AddAdditionalSocialAccountButton);
