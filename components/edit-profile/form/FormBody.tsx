import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  Button,
  ButtonType,
  Divider,
  Form,
  FormItem,
  Input,
} from '../../ui-kit';
import { FORM_SCHEMA, ProfileFormItemName } from '../common/constants';
import { FormName, FormPlaceHolder, PrimaryHeaderText } from '../common/enums';
import GroupHeader from './GroupHeader';
import Textarea from '../../ui-kit/Textarea';
// import TwitterButton from './TwitterButton';
// import AddAdditionalSocialAccountButton from './AddSocAccBtn';
import { ReactEventHandler, useEffect, useRef, useState } from 'react';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { devices, screenSizes } from '../../../common/constants';
import UserCard from '../user-card';
import { ResetButton } from './ResetButton';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { TAttachmentsState } from '../../../redux/slicers/attachmentsSlicer/types';
import { addAttachment } from '../../../redux/slicers/attachmentsSlicer/attachmentsSlicer';
import {
  editUserProfile,
  getUserProfile,
} from '../../../redux/slicers/profileSlicer/profileSlicer';
import { TAuthState } from '../../../redux/types';
import { TProfileState } from '../../../redux/slicers/profileSlicer/types';

const FormBody = () => {
  // const [fieldOpen, setIsFieldOpen] = useState<boolean | null>(null);
  const formRef = useRef<any>(null);
  const { fileUrl, loading } = useAppSelector<TAttachmentsState>(
    (state) => state.attachments,
  );
  const { user: profileUser } = useAppSelector<TProfileState>(
    (state) => state.profile,
  );
  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const dispatch = useAppDispatch();

  const { screenSize } = useAdaptiveSlider();

  const handleSubmit = () => (values: any, formikProps: any) => {
    dispatch(addAttachment(values.avatar[0]));
  };

  useEffect(() => {
    if (fileUrl) {
      dispatch(
        editUserProfile({ ...formRef.current?.values, avatar: fileUrl }),
      );
    }
  }, [dispatch, fileUrl]);

  useEffect(() => {
    if (user?.id) {
      dispatch(getUserProfile(user.id));
    }
  }, [dispatch, user?.id]);

  return (
    <FormBody.Container>
      {profileUser ? (
        <Form
          innerRef={formRef}
          formSchema={FORM_SCHEMA}
          initialValues={(profileUser as any) ?? {}}
          onSubmit={handleSubmit()}
        >
          <FormWrapper>
            <UserCard avatarUrl={profileUser.avatar} />
            <div>
              <GroupHeader header={PrimaryHeaderText.ACCOUNT_INFO} />
              <FormItem
                title={FormName.USER_NAME}
                name={ProfileFormItemName.USER_NAME}
                placeholder={FormPlaceHolder.ENTER_YOUR_DISPLAY_NAME}
                component={Input}
              />
              <FormItem
                title={FormName.BIO}
                name={ProfileFormItemName.BIO}
                placeholder={FormPlaceHolder.ABOUT_YOURSELF_IN_A_FEW_WORDS}
                component={Textarea}
                height={96}
              />
              <GroupHeader header={PrimaryHeaderText.SOCIAL} />
              <FormItem
                title={FormName.WEBSITE}
                name={ProfileFormItemName.WEBSITE}
                placeholder={FormPlaceHolder.ENTER_URL}
                component={Input}
              />
              <FormItem
                title={FormName.TWITTER}
                name={ProfileFormItemName.TWITTER}
                placeholder={FormPlaceHolder.TWITTER_USERNAME}
                component={Input}
                width={352}
              />
              {/* <TwitterButton /> */}
              {/* <AddAdditionalSocialAccountButton setIsOpen={setIsFieldOpen} /> */}
              <FormItem
                title={FormName.ADDITIONAL_SOCIAL_ACCOUNT}
                name={ProfileFormItemName.SOCIAL_ACCOUNT}
                placeholder={FormPlaceHolder.ADDITIONAL_ACCOUNT}
                component={Input}
                width={352}
                // isFieldOpen={fieldOpen}
                // canBeHidden={true}
              />
              {/* <FormItem
            title={FormName.PHOTO_OF_DOCUMENTS}
            name={ProfileFormItemName.PHOTO_OF_DOCUMENTS}
            component={Input}
            type="file"
            width={125}
          /> */}
              <Text>
                To update your settings you should sign message through your
                wallet. Click &apos;Update profile&apos; then sign the message
              </Text>
              <Divider />
              <FormFooter>
                <Button
                  fullSize={screenSize <= screenSizes.mobileL}
                  btnType={ButtonType.Secondary}
                  type="submit"
                  loading={loading}
                >
                  Update Profile
                </Button>
                <ResetButton formRef={formRef} screenSize={screenSize} />
              </FormFooter>
            </div>
          </FormWrapper>
        </Form>
      ) : (
        '...loading'
      )}
    </FormBody.Container>
  );
};

const FormWrapper = styled.div`
  display: flex;

  @media (${devices.tablet}) {
    flex-direction: column;
  }

  @media (${devices.mobile}) {
    flex-direction: column;
  }
`;

const FormFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  gap: 32px;
  height: 48px;

  @media (${devices.mobile}) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  color: #777e91;
  margin-top: 48px;
  margin-bottom: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

FormBody.Container = Container;

export default FormBody;
