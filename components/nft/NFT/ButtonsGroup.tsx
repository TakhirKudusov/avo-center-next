import styled from 'styled-components';
import React, { memo } from 'react';
import { Buttons } from '../common/types';

type Props = {
  buttonsParameters: Buttons[];
};

const ButtonsGroup: React.FC<Props> = ({ buttonsParameters }) => {
  return (
    <ButtonsWrapper>
      {buttonsParameters?.map((el, i) => {
        return (
          <Button key={i} btnType={el.type}>
            <p>{el.name}</p>
          </Button>
        );
      })}
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0;
  gap: 8px;
  width: 516px;
  height: 48px;
`;

const Button = styled.button<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 12px;
  width: 254px;
  height: 48px;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => {
    switch (props.type) {
      case 'primary':
        return '#333333';
      default:
        return '#FAFAFBFF';
    }
  }};
  border: ${(props) => {
    switch (props.type) {
      case 'primary':
        return 'none';
      default:
        return '2px solid #E6E8EC';
    }
  }};
  p {
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: ${(props) => {
      switch (props.type) {
        case 'primary':
          return '#FCFCFD';
        default:
          return '#23262F';
      }
    }}
  }
  &:hover {
    background-color: ${(props) => {
      switch (props.type) {
        case 'primary':
          return '#515261';
        default:
          return '#E6E8EC';
      }
    }}
`;

export default memo(ButtonsGroup);
