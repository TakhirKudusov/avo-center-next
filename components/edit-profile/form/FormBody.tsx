import styled from 'styled-components';
import {
  Button,
  ButtonType,
  Divider,
  FileUpload,
  Form,
  FormItem,
  Input,
  Modal,
} from '../../ui-kit';
import {
  FORM_SCHEMA,
  ProfileFormItemName,
  VerificationsKeys,
} from '../common/constants';
import { FormName, FormPlaceHolder, PrimaryHeaderText } from '../common/enums';
import GroupHeader from './GroupHeader';
import Textarea from '../../ui-kit/Textarea';
import { useEffect, useRef, useState } from 'react';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { devices, screenSizes } from '../../../common/constants';
import UserCard from '../user-card';
import { ResetButton } from './ResetButton';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { TIpfsState } from '../../../redux/slicers/ipfsSlicer/types';
import { addAttachment } from '../../../redux/slicers/ipfsSlicer/ipfsSlicer';
import {
  editUserProfile,
  getUserProfile,
} from '../../../redux/slicers/profileSlicer/profileSlicer';
import { TAuthState } from '../../../redux/types';
import { TProfileState } from '../../../redux/slicers/profileSlicer/types';
import { VERIFY_FORM_SCHEMA } from './constants';
import { useVerifyAccount } from '../../../common/hooks/useVerifyAccount';

const FormBody = () => {
  const dispatch = useAppDispatch();
  const formRef = useRef<any>(null);
  const { loading } = useAppSelector<TIpfsState>((state) => state.ipfs);
  const { user: profileUser } = useAppSelector<TProfileState>(
    (state) => state.profile,
  );
  const initialValues = {};

  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const [attachAvatarUrl, setAttachAvatarUrl] = useState<string | null>(null);

  const { screenSize } = useAdaptiveSlider();

  const {
    verifyFormRef,
    isVerifyPermitted,
    isVerifyModalOpen,
    handlePermitVerification,
    handleVerifyAccount,
    handleVerifyModalClose,
    setIsVerifyPermitted,
  } = useVerifyAccount();

  const handleSubmit = () => async (values: any) => {
    const result = await dispatch(addAttachment(values.avatar[0]));

    if (result) setAttachAvatarUrl(result.payload.path);
  };

  useEffect(() => {
    if (attachAvatarUrl) {
      dispatch(
        editUserProfile({
          ...formRef.current?.values,
          avatar: attachAvatarUrl,
        }),
      );
    }
  }, [dispatch, attachAvatarUrl]);

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
                width={screenSize > screenSizes.mobileL ? 352 : '100%'}
              />
              <GroupHeader header={PrimaryHeaderText.VERIFICATION} />
              <VerificationButton
                fullSize={screenSize <= screenSizes.mobileL}
                btnType={ButtonType.Secondary}
                loading={loading}
                onClick={() => setIsVerifyPermitted(true)}
              >
                Start Verification
              </VerificationButton>
              {/* <TwitterButton /> */}
              {/* <AddAdditionalSocialAccountButton setIsOpen={setIsFieldOpen} /> */}
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
                  btnType={ButtonType.Outlined}
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
      <Modal
        title="Verification"
        confirmBtnName="Start Verify"
        cancelBtnName="Cancel"
        open={isVerifyPermitted}
        onClose={() => setIsVerifyPermitted(false)}
        onConfirm={handlePermitVerification}
      >
        <StartVerifyText>
          Upload a photo of your ID to verify your profile
        </StartVerifyText>
      </Modal>
      <Modal
        title="Verification"
        confirmBtnName="Verify"
        open={isVerifyModalOpen}
        disableConfirm={loading}
        onClose={handleVerifyModalClose}
        onConfirm={handleVerifyAccount}
      >
        <Form
          innerRef={verifyFormRef}
          initialValues={initialValues}
          formSchema={VERIFY_FORM_SCHEMA}
          onSubmit={() => false}
        >
          <>
            <FormItem
              label="Upload a photo of your ID"
              name={VerificationsKeys.ID_PHOTO}
              description="PNG, GIF, WEBP. Max 1Gb."
              marginTop={0}
              component={FileUpload}
            />
            <FormItem
              label="Upload a photo of your face next to the photo ID"
              name={VerificationsKeys.FACE_PHOTO}
              description="PNG, GIF, WEBP. Max 1Gb."
              marginTop={0}
              component={FileUpload}
            />
          </>
        </Form>
      </Modal>
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
    height: auto;
  }
`;

const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 48px;
  margin-bottom: 40px;
  max-width: 690px;
`;

const StartVerifyText = styled.span`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const VerificationButton = styled(Button)`
  margin-top: 32px;
`;

FormBody.Container = Container;

export default FormBody;
