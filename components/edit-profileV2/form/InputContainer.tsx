import { memo, ReactNode } from 'react';
import { ErrorMessages, FormNames, FormPlaceHolders } from '../common/enums';
import styled from 'styled-components';
import { isError } from 'util';

type Props = {
  header?: FormNames;
  isError: boolean;
  children: ReactNode;
  errorMessage: ErrorMessages;
};

const InputContainer = ({ header, children, isError, errorMessage }: Props) => {
  return (
    <InputContainer.Container>
      {header && (
        <InputContainer.HeaderText>{header}</InputContainer.HeaderText>
      )}
      {children}
      <ErrorText isError={isError}>{errorMessage}</ErrorText>
    </InputContainer.Container>
  );
};

const ErrorText = styled.p<{ isError: boolean }>`
  visibility: ${(props) => (props.isError ? 'visible' : 'hidden')};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #c00043;
  margin-top: 5px;
  margin-bottom: -5px;
`;

const HeaderText = styled.p`
  height: 12px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #b1b5c4;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

InputContainer.Container = Container;
InputContainer.HeaderText = HeaderText;

export default memo(InputContainer);
