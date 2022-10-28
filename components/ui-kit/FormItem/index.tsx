import { Field, useFormikContext } from 'formik';
import { memo } from 'react';
import styled from 'styled-components';
import { UnknownObject } from '../../../common/types';

type Props = {
  title: string;
  width: number;
};
const FormItem: React.FC<Props & any> = ({ title, width, ...rest }) => {
  const { errors, validationSchema, submitCount } =
    useFormikContext<UnknownObject>();

  return (
    <FormItemWrapper width={width}>
      <FormItemTitle>{title}</FormItemTitle>
      <Field
        {...rest}
        hasError={!!errors[rest.name] && !!submitCount}
        hasSchema={!!(validationSchema && !!validationSchema[rest.name])}
      />
      {!!submitCount && <FormItemErrors>{errors[rest.name]}</FormItemErrors>}
    </FormItemWrapper>
  );
};

const FormItemWrapper = styled.div<{ width: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

const FormItemTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #b1b5c4;
`;

const FormItemErrors = styled.div`
  position: absolute;
  bottom: -22px;
  color: #ef466f;
`;

export default memo(FormItem);
