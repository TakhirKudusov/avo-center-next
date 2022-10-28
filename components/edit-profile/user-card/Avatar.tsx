import styled from 'styled-components';
import CameraSVG from '../../../assets/svg/camera.svg';

const Avatar = () => {
  return (
    <Avatar.Container>
      <Avatar.UserAvatar />
      <Avatar.FileInputWrapper>
        <Avatar.CameraIcon />
        <Avatar.CameraButton
          type="file"
          name="AddImage"
          accept=".jpg, .jpeg, .png, .gif"
        />
      </Avatar.FileInputWrapper>
    </Avatar.Container>
  );
};

const FileInputWrapper = styled.div`
  overflow: hidden;
  position: relative;
  bottom: 32%;
  left: 68%;
  width: 40px;
  height: 40px;
  background-color: #333333;
  border-radius: 40px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #515261;
  }
`;

const UserAvatar = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 128px;
  background: url('/images/profile-photo.png');
  background-size: cover;
  margin-left: 15px;
`;

const CameraIcon = styled(CameraSVG)`
  position: relative;
  left: 25%;
  top: 25%;
`;

const CameraButton = styled.input`
  overflow: hidden;
  position: relative;
  bottom: 120%;
  width: 40px;
  height: 80px;
  border-radius: 40px;
  opacity: 50;
  cursor: pointer;
`;

const Container = styled.div`
  width: 128px;
  height: 128px;
`;

Avatar.Container = Container;
Avatar.CameraButton = CameraButton;
Avatar.CameraIcon = CameraIcon;
Avatar.UserAvatar = UserAvatar;
Avatar.FileInputWrapper = FileInputWrapper;

export default Avatar;
