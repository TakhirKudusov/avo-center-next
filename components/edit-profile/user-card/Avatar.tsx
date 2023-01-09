import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../../common/constants';
import { FormItem } from '../../ui-kit';
import { ProfileFormItemName } from '../common/constants';
import { FormName } from '../common/enums';
import AvatarUploader from './FileUploader';

const Avatar = () => {
  const [imageUrl, setImageUrl] = useState<
    string | ArrayBuffer | null | undefined
  >(`url('/images/profile-photo.png')`);
  // const handleAvatarUpload = () => {
  //   console.log('uplaod!');
  // };

  const { values } = useFormikContext<any>();

  useEffect(() => {
    if (!!values.avatar?.length) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) =>
        setImageUrl(`url(${e.target?.result})`);
      reader.readAsDataURL(new Blob([(values.avatar ?? [])[0]]));
    }
  }, [values.avatar]);

  return (
    <Avatar.Container>
      <Avatar.UserAvatar avatarUrl={imageUrl} />
      <UploaderWrapper>
        <FormItem
          name={ProfileFormItemName.AVATAR}
          component={AvatarUploader}
        />
      </UploaderWrapper>
    </Avatar.Container>
  );
};

const Container = styled.div`
  width: 128px;
  height: 128px;
  position: relative;

  @media (${devices.mobile}) {
    width: 72px;
    height: 72px;
  }
`;

const UserAvatar = styled.div<{ avatarUrl?: any }>`
  width: 128px;
  height: 128px;
  border-radius: 128px;
  background: ${({ avatarUrl }) => avatarUrl};
  background-size: cover;
  margin-left: 15px;

  @media (${devices.mobile}) {
    width: 72px;
    height: 72px;
  }
`;

const UploaderWrapper = styled.div`
  position: relative;
  bottom: 71px;
  left: 68px;

  @media (${devices.mobile}) {
    left: 23px;
    bottom: 64px;
  }
`;

Avatar.Container = Container;
Avatar.UserAvatar = UserAvatar;

export default Avatar;
