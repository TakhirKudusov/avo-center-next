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
import TwitterButton from './TwitterButton';
import AddAdditionalSocialAccountButton from './AddSocAccBtn';
import { ReactEventHandler, useState } from 'react';
import CircleCloseSVG from '../../../assets/svg/circle-close.svg';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { devices, screenSizes } from '../../../common/constants';

const FormBody = () => {
  const [fieldOpen, setIsFieldOpen] = useState<boolean | null>(null);

  const handleSubmitClick = () => (e: ReactEventHandler<HTMLFormElement>) => {
    console.log(e);
  };

  const { screenSize } = useAdaptiveSlider();

  return (
    <FormBody.Container>
      <Form
        formSchema={FORM_SCHEMA}
        initialValues={{}}
        onSubmit={handleSubmitClick()}
      >
        <>
          <GroupHeader header={PrimaryHeaderText.ACCOUNT_INFO} />
          <FormItem
            title={FormName.NAME}
            name={ProfileFormItemName.NAME}
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
            title={FormName.PORTFOLIO_OR_WEBSITE}
            name={ProfileFormItemName.PORTFOLIO_OR_WEBSITE}
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
          <TwitterButton />
          <AddAdditionalSocialAccountButton setIsOpen={setIsFieldOpen} />
          <FormItem
            title={FormName.ADDITIONAL_SOCIAL_ACCOUNT}
            name={ProfileFormItemName.ADDITIONAL_SOCIAL_ACCOUNT}
            placeholder={FormPlaceHolder.ADDITIONAL_ACCOUNT}
            component={Input}
            width={352}
            isFieldOpen={fieldOpen}
            canBeHidden={true}
          />
          <FormItem
            title={FormName.PHOTO_OF_DOCUMENTS}
            name={ProfileFormItemName.PHOTO_OF_DOCUMENTS}
            component={Input}
            type="file"
            width={125}
          />
          <Text>
            To update your settings you should sign message through your wallet.
            Click &apos;Update profile&apos; then sign the message
          </Text>
          <Divider />
          <FormFooter>
            <Button
              fullSize={screenSize <= screenSizes.mobileL}
              btnType={ButtonType.Secondary}
            >
              Update Profile
            </Button>
            <Button
              fullSize={screenSize <= screenSizes.mobileL}
              btnType={ButtonType.Outlined}
            >
              <CircleCloseIcon color="#777E91" />
              Clear all
            </Button>
          </FormFooter>
        </>
      </Form>
    </FormBody.Container>
  );
};

const CircleCloseIcon = styled(CircleCloseSVG)`
  margin-right: 8px;
  width: 24px;
  height: 24px;
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
