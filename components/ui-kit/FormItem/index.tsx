import { Field, useFormikContext } from 'formik';
import { memo } from 'react';
import styled, { css } from 'styled-components';
import { devices } from '../../../common/constants';
import { UnknownObject } from '../../../common/types';

type Props = {
  title: string;
  isFieldOpen?: boolean | null;
  canBeHidden?: boolean;
  width?: number;
  marginTop?: number;
  style?: Object;
  className?: string;
};
const FormItem: React.FC<Props & any> = ({
  title,
  width,
  isFieldOpen,
  canBeHidden,
  marginTop = 32,
  style,
  className,
  ...rest
}) => {
  const { errors, validationSchema, submitCount } =
    useFormikContext<UnknownObject>();

  return (
    <AnimationWrapper
      id="animation-wrapper"
      style={style}
      canBeHidden={canBeHidden}
      isFieldOpen={isFieldOpen}
    >
      <FormItemWrapper
        marginTop={marginTop}
        width={width}
        className={className}
      >
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
  isFieldOpen?: boolean | null;
  canBeHidden?: boolean;
}>`
  /* overflow: hidden; */
  animation-duration: 0.3s;
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

const FormItemWrapper = styled.div<{ width: number; marginTop: number }>`
  position: relative;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 12px;
  margin-top: ${({ marginTop }) =>
    Number.isInteger(marginTop) ? `${marginTop}px` : '32px'};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

const FormItemTitle = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const FormItemErrors = styled.div`
  position: absolute;
  bottom: -20px;
  color: #ef466f;
  font-size: 14px;
  white-space: nowrap;
`;

export default memo(FormItem);
