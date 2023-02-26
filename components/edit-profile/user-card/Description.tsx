import styled from 'styled-components';
import ConfirmGreenSVG from '../../../assets/svg/confirm-green.svg';
import { devices } from '../../../common/constants';
import { useAppSelector } from '../../../redux/hooks';
import { TProfileState } from '../../../redux/slicers/profileSlicer/types';

const Description = () => {
  const { user: profileUser } = useAppSelector<TProfileState>(
    (state) => state.profile,
  );

  return (
    <Description.Container>
      <Description.Header>
        <Description.HeaderText>Profile photo</Description.HeaderText>
        {profileUser?.isVerified && <Description.ConfirmIcon />}
      </Description.Header>
      <Description.Text>
        We recommend an image of at least 400x400.
        <br /> Gifs work too 🙌
      </Description.Text>
    </Description.Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 192px;
  height: 92px;

  @media (${devices.mobile}) {
    width: 100%;
    height: auto;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 142px;
  height: 24px;
  margin-top: 8px;

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const HeaderText = styled.p`
  font-family: 'Nasalization';
  width: 122px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcfd;
`;

const ConfirmIcon = styled(ConfirmGreenSVG)``;

const Text = styled.p`
  width: 170px;
  height: 60px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

Description.Header = Header;
Description.Container = Container;
Description.HeaderText = HeaderText;
Description.ConfirmIcon = ConfirmIcon;
Description.Text = Text;

export default Description;
