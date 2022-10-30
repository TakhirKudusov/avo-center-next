import styled from 'styled-components';

const Avatar = () => {
  return (
    <Avatar.Container>
      <Avatar.UserAvatar />
      <Avatar.CameraButton
        type="file"
        name="AddImage"
        accept=".jpg, .jpeg, .png, .gif"
      />
    </Avatar.Container>
  );
};

const UserAvatar = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 128px;
  background: url('/images/profile-photo.png');
  background-size: cover;
  margin-left: 15px;
`;

const CameraButton = styled.input`
  position: relative;
  bottom: 32%;
  left: 80%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 40px;
  background: url('/images/camera.png') no-repeat #333333 center;
  background-size: 20px 20px;

  &::-webkit-file-upload-button {
    visibility: hidden;
    width: 40px;
    height: 40px;
  }

  &:hover {
    background-color: #515261;
  }
`;

const Container = styled.div`
  width: 128px;
  height: 128px;
`;

Avatar.Container = Container;
Avatar.CameraButton = CameraButton;
Avatar.UserAvatar = UserAvatar;

export default Avatar;
