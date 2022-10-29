import styled from 'styled-components';
import {
  Button,
  ButtonType,
  Divider,
  Form,
  FormItem,
  Input,
} from '../../ui-kit';
import * as Yup from 'yup';
import { validationRegExps } from '../common/constants';
import {
  ErrorMessages,
  FormFieldType,
  FormNames,
  FormPlaceHolders,
  HeaderTextEnum,
} from '../common/enums';
import GroupHeader from './GroupHeader';
import Textarea from '../../ui-kit/Textarea';
import TwitterButton from './TwitterButton';
import AddAdditionalSocialAccountButton from './AddAdditionalSocialAccountButton';
import { useState } from 'react';
import CircleCloseSVG from '../../../assets/svg/circle-close.svg';

const FormBody = () => {
  const [fieldOpen, setIsFieldOpen] = useState<boolean>();

  const formSchema = Yup.object().shape({
    name: Yup.string().matches(
      validationRegExps.name,
      ErrorMessages.ERROR_WITH_NAME,
    ),
    bio: Yup.string().matches(
      validationRegExps.bio,
      ErrorMessages.ERROR_WITH_BIO,
    ),
    website: Yup.string().matches(
      validationRegExps.url,
      ErrorMessages.ERROR_WITH_WEBSITE,
    ),
    twitter: Yup.string().matches(
      validationRegExps.twitter,
      ErrorMessages.ERROR_WITH_TWITTER,
    ),
    additionalSocialAccount: Yup.string().matches(
      validationRegExps.url,
      ErrorMessages.ERROR_WITH_ADDITIONAL_ACCOUNT,
    ),
  });

  return (
    <FormBody.Container>
      <Form
        formSchema={formSchema}
        initialValues={{}}
        onSubmit={(e) => console.log(e)}
      >
        <>
          <GroupHeader header={HeaderTextEnum.ACCOUNT_INFO} />
          <FormItem
            title={FormNames.NAME}
            name={FormFieldType.NAME}
            placeholder={FormPlaceHolders.ENTER_YOUR_DISPLAY_NAME}
            component={Input}
          />
          <FormItem
            title={FormNames.BIO}
            name={FormFieldType.BIO}
            placeholder={FormPlaceHolders.ABOUT_YOURSELF_IN_A_FEW_WORDS}
            component={Textarea}
            height={'96'}
          />
          <GroupHeader header={HeaderTextEnum.SOCIAL} />
          <FormItem
            title={FormNames.PORTFOLIO_OR_WEBSITE}
            name={FormFieldType.WEBSITE}
            placeholder={FormPlaceHolders.ENTER_URL}
            component={Input}
          />

          <FormItem
            title={FormNames.TWITTER}
            name={FormFieldType.TWITTER}
            placeholder={FormPlaceHolders.TWITTER_USERNAME}
            component={Input}
            width={'352'}
          />
          <TwitterButton />
          <AddAdditionalSocialAccountButton setIsOpen={setIsFieldOpen} />
          <FormItem
            title={FormNames.ADDITIONAL_SOCIAL_ACCOUNT}
            name={FormFieldType.ADDITIONAL_SOCIAL_ACCOUNT}
            placeholder={FormPlaceHolders.ADDITIONAL_ACCOUNT}
            component={Input}
            width={'352'}
            isFieldOpen={fieldOpen}
            canBeHidden={true}
          />
          <FormItem
            title={FormNames.PHOTO_OF_DOCUMENTS}
            name={FormFieldType.PHOTO}
            component={Input}
            type="file"
            width="125"
          />
          <Text>
            To update your settings you should sign message through your wallet.
            Click &apos;Update profile&apos; then sign the message
          </Text>
          <Divider />
          <FormFooter>
            <Button type={ButtonType.Secondary}>Update Profile</Button>
            <Button type={ButtonType.Outlined}>
              <CircleCloseIcon />
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
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  gap: 32px;
  width: 285px;
  height: 48px;
`;

const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
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
  width: 744px;
`;

FormBody.Container = Container;

export default FormBody;
