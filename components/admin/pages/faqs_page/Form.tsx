import styled from 'styled-components';
import { Button, ButtonType, Form, FormItem, Input } from '../../../ui-kit';
import { FORM_SCHEMA, initialValues } from './constants';
import { ForwardedRef, forwardRef, memo, useMemo } from 'react';
import { FormikProps } from 'formik';
import { FAQFormValues } from './types';
import { FAQ_FORM_NAME } from './enums';
import Textarea from '../../../ui-kit/Textarea';
import { ModalState } from '../../utils/types';
import { TableContent } from '../../UI/table/types';

type Props = {
  handleSubmit: (
    values: FAQFormValues,
    formikProps: FormikProps<TableContent>,
  ) => void;
  handleReset: () => void;
  modalState: ModalState;
};
const FAQForm = forwardRef(
  (
    { handleReset, handleSubmit, modalState }: Props,
    ref: ForwardedRef<HTMLFormElement>,
  ) => {
    const resetButtonType = useMemo(
      () => (modalState === 'post' ? 'reset' : 'button'),
      [modalState],
    );

    return (
      <StyledForm
        formSchema={FORM_SCHEMA}
        innerRef={ref as any}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <FormItemsWrapper>
          <StyledFormItem
            title={FAQ_FORM_NAME.TITLE}
            name={FAQ_FORM_NAME.TITLE}
            placeholder={FAQ_FORM_NAME.TITLE}
            component={Input}
          />
          <StyledFormItem
            title={FAQ_FORM_NAME.DESCRIPTION}
            name={FAQ_FORM_NAME.DESCRIPTION}
            placeholder={FAQ_FORM_NAME.DESCRIPTION}
            component={Textarea}
          />
          <FormFooter>
            <StyledButton type="submit" btnType={ButtonType.Secondary}>
              Apply
            </StyledButton>
            <StyledButton type={resetButtonType} onClick={handleReset}>
              Reset
            </StyledButton>
          </FormFooter>
        </FormItemsWrapper>
      </StyledForm>
    );
  },
);

const FormItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
  flex-grow: 1;
`;

const FormFooter = styled.div`
  display: flex;
  width: 100%;
  column-gap: 10px;
`;

const StyledFormItem = styled(FormItem)`
  margin: 0;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  width: 100%;
`;

FAQForm.displayName = 'FAQForm';

export default memo(FAQForm);
