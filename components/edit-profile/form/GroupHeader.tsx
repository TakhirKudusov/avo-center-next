import styled from 'styled-components';
import ExclamationSVG from '../../../assets/svg/exclamation.svg';

const Name = () => {
  return (
    <>
      <Name.Header>
        <Name.HeaderText>Account info</Name.HeaderText>
        <Name.ExclamationIcon />
      </Name.Header>
    </>
  );
};

const ExclamationIcon = styled(ExclamationSVG)`
  cursor: pointer;
`;

const HeaderText = styled.p`
  width: 272px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
  margin-top: 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 744px;
  height: 24px;
`;

Name.Header = Header;
Name.HeaderText = HeaderText;
Name.ExclamationIcon = ExclamationIcon;

export default Name;
