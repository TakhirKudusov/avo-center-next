import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../../common/constants';
import { getImageUrl } from '../../../common/helpers/getImageUrl.helper';
import { OpenAPI } from '../../../swagger';
import { FormItem } from '../../ui-kit';
import { ProfileFormItemName } from '../common/constants';
import { FormName } from '../common/enums';
import AvatarUploader from './FileUploader';

type Props = {
  avatarUrl: string;
};

const Avatar = ({ avatarUrl }: Props) => {
  const [imageUrl, setImageUrl] = useState<
    string | ArrayBuffer | null | undefined
  >('');

  const { values } = useFormikContext<any>();

  useEffect(() => {
    if (Array.isArray(values.avatar) && !!values.avatar?.length) {
      console.log('invoke!');
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) =>
        setImageUrl(e.target?.result);
      reader.readAsDataURL(new Blob([(values.avatar ?? [])[0]]));
    }
  }, [values?.avatar]);

  useEffect(() => {
    setImageUrl(getImageUrl(avatarUrl));
  }, [avatarUrl]);

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
  background: ${({ avatarUrl }) => `url(${avatarUrl})`};
  background-size: cover;
  background-position: center;
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
