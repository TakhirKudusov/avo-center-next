import styled from 'styled-components';

import { TimeBeforeEnd } from '../../nft/common/types';
import { getTimeItemData } from '../../ui-kit/Timer/utils';

type Props = {
  timeBeforeEnd?: TimeBeforeEnd;
};

const Timer = ({ timeBeforeEnd }: Props) => {
  const timeValues = getTimeItemData(timeBeforeEnd);

  return (
    <TimerBody>
      {!!timeValues ? (
        timeValues?.map(({ digit, value }, index) => (
          <TimerItem key={index}>
            <TimerValue>{value}</TimerValue>
            <TimerLabel>{digit}</TimerLabel>
          </TimerItem>
        ))
      ) : (
        <TimeCalculating>Time is calculating</TimeCalculating>
      )}
    </TimerBody>
  );
};

const TimerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin: auto;
  margin-top: 8px;
`;

const TimerItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimerValue = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  width: 40px;
`;

const TimerLabel = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
`;

const TimeCalculating = styled.div`
  margin-top: 8px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  font-family: 'Montserrat';
  width: 100%;
`;

export { Timer };
