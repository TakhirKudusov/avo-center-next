import styled from 'styled-components';
import React, { memo } from 'react';
import { TimeBeforeEnd } from '../common/types';

type Props = {
  timeBeforeEnd: TimeBeforeEnd;
};

const Timer: React.FC<Props> = ({ timeBeforeEnd }) => {
  return (
    <TimeContainer>
      <EndsParagraph>End in</EndsParagraph>
      <TimeGroup>
        {Object.entries(timeBeforeEnd).map((item, index) => {
          return (
            <TimeItem key={index}>
              <span>{item[1]}</span>
              <span>{item[0]}</span>
            </TimeItem>
          );
        })}
      </TimeGroup>
    </TimeContainer>
  );
};

const TimeContainer = styled.div`
  width: 346px;
  height: 50px;
`;

const EndsParagraph = styled.p`
  width: 278px;
  height: 16px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #23262f;
  margin: 0;
`;

const TimeGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -10px;
  width: 346px;
  height: 24px;
  gap: 26px;
`;

const TimeItem = styled.p`
  display: flex;
  flex-direction: row;
  width: 71px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #23262f;
  text-transform: uppercase;
  & :last-child {
    font-size: 12px;
    color: #777e90;
    position: relative;
    bottom: -3px;
  }
  & :first-child {
    width: 30px;
  }
`;

export default memo(Timer);
