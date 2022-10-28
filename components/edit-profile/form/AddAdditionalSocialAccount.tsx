import styled from 'styled-components';
import { Button } from '../../ui-kit';
import UnionSVG from '../../../assets/svg/circle-union.svg';

const AddAdditionalSocialAccount = () => {
  return (
    <Button>
      <UnionIcon />
      <ButtonText>Add more social account</ButtonText>
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

export default AddAdditionalSocialAccount;
