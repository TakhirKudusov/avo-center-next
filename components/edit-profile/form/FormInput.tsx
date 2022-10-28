import Header from './GroupHeader';
import {
  ErrorMessages,
  FormActionKind,
  FormNames,
  FormPlaceHolders,
  HeaderTextEnum,
} from '../common/enums';
import InputContainer from './InputContainer';
import { Input } from '../../ui-kit';
import React, { Dispatch } from 'react';
import { FormAction, FormData, FormItem, ItemData } from '../common/types';

type Props = {
  dispatch: Dispatch<FormAction>;
  data: ItemData;
};

const Name: React.FC<Props> = ({ dispatch, state }) => {
  return (
    <>
      <Header header={HeaderTextEnum.ACCOUNT_INFO} />
      <InputContainer
        errorMessage={ErrorMessages.ERROR_WITH_NAME}
        isError={state.name.isError}
        header={FormNames.NAME}
      >
        <Input
          value={state.name.value}
          placeholder={FormPlaceHolders.ENTER_YOUR_DISPLAY_NAME}
          onChange={(e) =>
            dispatch({
              type: FormActionKind.ADD_NAME,
              payload: e.target.value,
            })
          }
        />
      </InputContainer>
    </>
  );
};

export default Name;
