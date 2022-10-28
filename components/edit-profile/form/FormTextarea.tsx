import InputContainer from './InputContainer';
import Textarea from '../../ui-kit/Textarea';
import React, { Dispatch, memo } from 'react';
import { FormAction, FormData, FormItem, ItemData } from '../common/types';
import styled from 'styled-components';

type Props = {
  data: FormItem;
  dispatch: Dispatch<FormAction>;
  state: ItemData;
};

const FormTextarea: React.FC<Props> = ({ data, dispatch, state }) => {
  return (
    <InputContainer
      errorMessage={data.errorMessage!}
      isError={state.isError}
      header={data.name}
    >
      <Textarea
        value={state.value}
        placeholder={data.placeHolder}
        height={96}
        onChange={(e) =>
          dispatch({
            type: data.actionType,
            payload: e.target.value,
          })
        }
        isError={state.isError}
      />
    </InputContainer>
  );
};

export default memo(FormTextarea);
