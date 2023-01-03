import styled from 'styled-components';
import ConfirmGreenSVG from '../../../assets/svg/confirm-green.svg';

const Description = () => {
  return (
    <Description.Container>
      <Description.Header>
        <Description.HeaderText>Profile photo</Description.HeaderText>
        <Description.ConfirmIcon />
      </Description.Header>
      <Description.Text>
        We recommend an image of at least 400x400.
        <br /> Gifs work too 🙌
      </Description.Text>
    </Description.Container>
  );
};

const Text = styled.p`
  width: 170px;
  height: 60px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #777e91;

  @media (max-width: 415px) {
    width: 100%;
  }
`;

const ConfirmIcon = styled(ConfirmGreenSVG)``;

const HeaderText = styled.p`
  width: 102px;
  height: 24px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 122px;
  height: 24px;

  @media (max-width: 415px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 192px;
  height: 92px;

  @media (max-width: 415px) {
    width: 100%;
    height: auto;
  }
`;

Description.Header = Header;
Description.Container = Container;
Description.HeaderText = HeaderText;
Description.ConfirmIcon = ConfirmIcon;
Description.Text = Text;

export default Description;
