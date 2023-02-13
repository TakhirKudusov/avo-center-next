import styled from 'styled-components';
import Form from '../../../ui-kit/Form';
import { useContext, useRef } from 'react';
import { Button, ButtonType, FormItem, Input } from '../../../ui-kit';
import { LoginPlaceholder, LoginTitle } from './enums';
import { FORM_SCHEMA } from './constants';
import { useRouter } from 'next/router';
import { AdminRoute } from '../../utils/routes';
import { AppContext } from '../../../../common/context/AppContext';
import { useLazyAdminLoginQuery } from '../../../../redux/APIs/adminApi';
import { FormikProps } from 'formik';

const Login = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const router = useRouter();

  const [getLoggedIn, { data, isLoading, error }] = useLazyAdminLoginQuery();

  const handleSubmit = async (values: any, formikProps: FormikProps<any>) => {
    const data = await getLoggedIn(values);
    if (data.isError) {
      formikProps.setErrors({
        login: 'Wrong login or password',
        password: 'Wrong login or password',
      });
      return;
    }
    const accessToken = data.data.accessToken.accessToken;
    localStorage.setItem('accessToken', accessToken);
    router.push(AdminRoute.MAIN);
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <StyledForm
          formSchema={FORM_SCHEMA}
          innerRef={formRef}
          initialValues={{}}
          onSubmit={handleSubmit}
        >
          <>
            <LoginHeader>AVO Admin</LoginHeader>
            <FormItemContainer>
              <StyledFormItem
                title={LoginTitle.LOGIN}
                name={LoginTitle.LOGIN}
                placeholder={LoginPlaceholder.USERNAME}
                component={Input}
              />
              <StyledFormItem
                title={LoginTitle.PASSWORD}
                name={LoginTitle.PASSWORD}
                placeholder={LoginPlaceholder.PASSWORD}
                component={Input}
                type="password"
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
