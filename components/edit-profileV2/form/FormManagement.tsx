import { FormAction, FormData, FormItem } from '../common/types';
import React, { Dispatch, memo } from 'react';
import FormInput from './FormInput';
import { FormNames } from '../common/enums';
import FormTextarea from './FormTextarea';
import AddAdditionalSocialAccountButton from './AddAdditionalSocialAccountButton';

type Props = {
  data: FormItem;
  dispatch: Dispatch<FormAction>;
  state: FormData;
};

const FormManagement: React.FC<Props> = ({ data, dispatch, state }) => {
  switch (data.name) {
    case FormNames.NAME:
      return <FormInput dispatch={dispatch} data={data} state={state.name} />;
    case FormNames.BIO:
      return <FormTextarea dispatch={dispatch} data={data} state={state.bio} />;
    case FormNames.PORTFOLIO_OR_WEBSITE:
      return (
        <FormInput dispatch={dispatch} data={data} state={state.website} />
      );
    case FormNames.TWITTER:
      return (
        <FormInput dispatch={dispatch} data={data} state={state.twitter} />
      );
    case FormNames.ADDITIONAL_SOCIAL_ACCOUNT:
      return <AddAdditionalSocialAccountButton />;
    default:
      return <div></div>;
  }
};

export default memo(FormManagement);
