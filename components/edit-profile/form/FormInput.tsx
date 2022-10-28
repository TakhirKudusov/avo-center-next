import Header from './GroupHeader';
import InputContainer from './InputContainer';
import { Input } from '../../ui-kit';
import React, { Dispatch, memo } from 'react';
import { FormAction, FormData, FormItem, ItemData } from '../common/types';
import TwitterButton from './TwitterButton';
import styled from 'styled-components';

type Props = {
  dispatch: Dispatch<FormAction>;
  state: ItemData;
  data: FormItem;
};

const FormInput: React.FC<Props> = ({ dispatch, state, data }) => {
  return (
    <>
      {data.groupHeader && <Header header={data.groupHeader} />}
      <InputContainer
        errorMessage={data.errorMessage!}
        isError={state.isError}
        header={data.name}
      >
        <Wrapper>
          <Input
            isError={state.isError}
            width={data?.width}
            value={state.value}
            placeholder={data.placeHolder}
            onChange={(e) =>
              dispatch({
                type: data.actionType,
                payload: e.target.value,
              })
            }
          />
          {data.hasButton && (
            <TwitterButton state={state.value} isError={state.isError} />
          )}
        </Wrapper>
      </InputContainer>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export default memo(FormInput);
