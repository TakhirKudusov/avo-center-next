import styled from 'styled-components';
import React, { memo } from 'react';

import { TimeBeforeEnd } from '../../nft/common/types';

import { getTimeItemData } from './utils';

type Props = {
  timeBeforeEnd: TimeBeforeEnd;
};

const Timer: React.FC<Props> = ({ timeBeforeEnd }) => {
  return (
    <TimeContainer>
      <EndsParagraph>End in</EndsParagraph>
      <TimeGroup>
        {getTimeItemData(timeBeforeEnd)?.map(({ digit, value }, index) => {
          return (
            <TimeItem key={index}>
              <TimeValue>{value}</TimeValue>
              <TimeDigit>{digit}</TimeDigit>
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
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #23262f;
  margin: 0;
`;

const TimeGroup = styled.div`
  display: flex;
  margin-top: -10px;
  width: 346px;
  height: 24px;
  gap: 26px;
`;

const TimeItem = styled.p`
  display: flex;
  width: 71px;
  height: 24px;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #23262f;
  text-transform: uppercase;
`;

const TimeValue = styled.span`
  width: 30px;
`;

const TimeDigit = styled.span`
  font-size: 12px;
  color: #777e90;
  position: relative;
  bottom: -3px;
`;

export default memo(Timer);
