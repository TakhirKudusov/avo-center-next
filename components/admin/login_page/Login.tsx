import styled from 'styled-components';
import Form from '../../ui-kit/Form';
import { useRef } from 'react';
import { Button, ButtonType, FormItem, Input } from '../../ui-kit';
import { LoginPlaceholder, LoginTitle } from './enums';
import { FORM_SCHEMA } from './constants';

const Login = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <LoginWrapper>
      <LoginContainer>
        <StyledForm
          formSchema={FORM_SCHEMA}
          innerRef={formRef}
          initialValues={{}}
        >
          <>
            <LoginHeader>AVO Admin</LoginHeader>
            <FormItemContainer>
              <StyledFormItem
                title={LoginTitle.USERNAME}
                name={LoginTitle.USERNAME}
                placeholder={LoginPlaceholder.USERNAME}
                component={Input}
              />
              <StyledFormItem
                title={LoginTitle.PASSWORD}
                name={LoginTitle.PASSWORD}
                placeholder={LoginPlaceholder.PASSWORD}
                component={Input}
              />
            </FormItemContainer>

            <FormFooter>
              <StyledButton
                type="submit"
                btnType={ButtonType.Secondary}
                fullSize={true}
              >
                Log in
              </StyledButton>
            </FormFooter>
          </>
        </StyledForm>
      </LoginContainer>
    </LoginWrapper>
  );
};

const StyledButton = styled(Button)`
  margin-top: 24px;
`;

const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const LoginHeader = styled.div`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #23262f;
`;

const FormFooter = styled.div`
  display: flex;
  width: 100%;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  width: 100%;
`;

const StyledFormItem = styled(FormItem)`
  margin: 0;
`;

const LoginContainer = styled.div`
  display: flex;
  width: 472px;
  height: fit-content;
  background: white;
  border-radius: 20px;
  border: 1px rgba(101, 101, 101, 0.25) solid;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default Login;
