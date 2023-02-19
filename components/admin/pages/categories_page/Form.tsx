import styled from 'styled-components';
import { Button, ButtonType, Form, FormItem, Input } from '../../../ui-kit';
import { ForwardedRef, forwardRef, memo, useMemo } from 'react';
import { FormikProps } from 'formik';
import Textarea from '../../../ui-kit/Textarea';
import { ModalState } from '../../utils/types';
import { TableContent } from '../../UI/table/types';
import { FIELD_VALUES_KEYS } from './enums';
import { FAQFormValues } from '../faqs_page/types';
import { FORM_SCHEMA, initialValues } from './constants';

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
            title={FIELD_VALUES_KEYS.NAME}
            name={FIELD_VALUES_KEYS.NAME}
            placeholder={FIELD_VALUES_KEYS.NAME}
            component={Input}
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
