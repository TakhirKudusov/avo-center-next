import styled, { css } from 'styled-components';

type Props = {
  isError: boolean;
  state: string;
};

const TwitterButton = ({ isError, state }: Props) => {
  return (
    <TwitterButton.Btn isError={isError} state={state}>
      Verify account
    </TwitterButton.Btn>
  );
};

const Btn = styled.button<{ isError?: boolean; state?: string }>`
  position: relative;
  right: 17.5%;
  top: 10px;
  width: 120px;
  height: 32px;
  border-radius: 10px;
  background-color: #fafafb;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  ${({ isError, state }) => {
    if (state === '') {
      return css`
        border-color: #e6e8ec;
        color: #76787b;
      `;
    } else if (isError) {
      return css`
        border-color: #c7aeb5;
        color: #76787b;
      `;
    } else {
      return css`
        border-color: #e6e8ec;
        cursor: pointer;
        color: #23262f;
      `;
    }
  }}
  // border: 2px solid ${({ isError }) => (isError ? '#c7aeb5' : '#e6e8ec')};
  // color: ${({ isError }) => (isError ? '#76787b' : '#23262f')};
  // cursor: ${({ isError }) => !isError && 'pointer'};
  transition: 0.5s;
  &:hover {
    background-color: ${({ isError, state }) =>
      !isError && state !== '' && '#e6e8ec'};
  }
`;

TwitterButton.Btn = Btn;

export default TwitterButton;
