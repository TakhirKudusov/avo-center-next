import styled from 'styled-components';
import { RadioButton } from '../../ui-kit/Button/RadioButton';
import ThreeDotsSVG from '../../../assets/svg/three-dots.svg';
import ShareSVG from '../../../assets/svg/share.svg';
import LoveSVG from '../../../assets/svg/love.svg';

const UserActionsButtonsGroup: React.FC = () => {
  return (
    <Container>
      <RadioButton>
        <ThreeDotsSVG />
      </RadioButton>
      <RadioButton>
        <ShareSVG />
      </RadioButton>
      <LikeButtonContainer>
        <RadioButton>
          <LoveSVG />
        </RadioButton>
        <p>3</p>
      </LikeButtonContainer>
    </Container>
  );
};

const LikeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 4px;
  width: 48px;
  height: 76px;
  p {
    width: 10px;
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #777e90;
    margin: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  width: 48px;
  height: 204px;
`;

export default UserActionsButtonsGroup;
