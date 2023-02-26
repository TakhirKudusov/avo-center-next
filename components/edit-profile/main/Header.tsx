import styled from 'styled-components';
import { devices } from '../../../common/constants';

const Header = () => {
  return (
    <Header.Container>
      <Header.MainText>Edit profile</Header.MainText>
      <Header.SubText>
        You can set preferred display name, create your profile URL and manage
        other personal settings.
      </Header.SubText>
    </Header.Container>
  );
};

const MainText = styled.p`
  width: 100%;
  height: 56px;
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #fcfcfd;
  margin: 0;

  @media (${devices.mobile}) {
    height: auto;
  }
`;

const SubText = styled.p`
  width: 100%;
  height: 24px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);

  @media (${devices.mobile}) {
    height: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 100%;
  height: 96px;
  margin-top: 80px;

  @media (${devices.mobile}) {
    margin-top: 32px;
  }
`;

Header.MainText = MainText;
Header.Container = Container;
Header.SubText = SubText;

export default Header;
