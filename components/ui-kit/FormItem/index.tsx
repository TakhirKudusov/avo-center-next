import { Field, useFormikContext } from 'formik';
import { memo } from 'react';
import styled, { css } from 'styled-components';
import { UnknownObject } from '../../../common/types';

type Props = {
  title: string;
  width: number;
  isFieldOpen?: boolean;
  canBeHidden?: boolean;
};
const FormItem: React.FC<Props & any> = ({
  title,
  width,
  isFieldOpen,
  canBeHidden,
  ...rest
}) => {
  const { errors, validationSchema, submitCount } =
    useFormikContext<UnknownObject>();

  return (
    <AnimationWrapper canBeHidden={canBeHidden} isFieldOpen={isFieldOpen}>
      <FormItemWrapper width={width}>
        <FormItemTitle>{title}</FormItemTitle>
        <Field
          {...rest}
          hasError={!!errors[rest.name] && !!submitCount}
          hasSchema={!!(validationSchema && !!validationSchema[rest.name])}
        />
        {!!submitCount && <FormItemErrors>{errors[rest.name]}</FormItemErrors>}
      </FormItemWrapper>
    </AnimationWrapper>
  );
};

const AnimationWrapper = styled.div<{
  isFieldOpen?: boolean;
  canBeHidden?: boolean;
}>`
  overflow: hidden;
  animation-duration: 0.5s;
  height: ${({ canBeHidden }) => canBeHidden && 0};
  ${({ isFieldOpen }) => {
    switch (isFieldOpen) {
      case true:
        return css`
          height: 110px;
          animation-name: slideDown;
          @keyframes slideDown {
            from {
              height: 0;
            }
            to {
              height: 110px;
            }
          }
        `;
      case false:
        return css`
          height: 0;
          animation-name: slideUp;
          @keyframes slideUp {
            from {
              height: 110px;
            }
            to {
              height: 0;
            }
          }
        `;
    }
  }}
`;

const FormItemWrapper = styled.div<{ width: number }>`
  display: flex;
  position: relative;
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
  width: 300px;
`;

const FormItemErrors = styled.div`
  position: absolute;
  bottom: -22px;
  color: #ef466f;
`;

export default memo(FormItem);
