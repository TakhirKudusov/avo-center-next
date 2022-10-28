import styled from 'styled-components';

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

const SubText = styled.p`
  width: 736px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #777e91;
`;

const MainText = styled.p`
  width: 352px;
  height: 56px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #23262f;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 1120px;
  height: 96px;
  margin-top: 80px;
`;

Header.MainText = MainText;
Header.Container = Container;
Header.SubText = SubText;

export default Header;
