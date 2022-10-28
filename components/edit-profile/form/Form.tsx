import styled from 'styled-components';
import FormManagement from './FormManagement';
import { formStructure } from '../common/constants';
import { useEffect, useReducer } from 'react';
import { formDataReducer, initialState } from '../common/formDataReducer';
import { reducer } from 'next/dist/client/components/reducer';

const Form = () => {
  const [state, dispatch] = useReducer(formDataReducer, initialState);

  useEffect(() => {
    console.log(state.twitter.value);
  }, [state]);

  return (
    <Form.Container>
      {formStructure.map((el, i) => {
        return (
          <FormManagement
            state={state}
            dispatch={dispatch}
            data={el}
            key={el.name + i}
          />
        );
      })}
    </Form.Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 744px;
`;

Form.Container = Container;

export default Form;
