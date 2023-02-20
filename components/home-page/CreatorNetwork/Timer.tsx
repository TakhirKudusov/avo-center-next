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
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #141416;
  width: 40px;
`;

const TimerLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #777e91;
`;

const TimeCalculating = styled.div`
  margin-top: 8px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  width: 100%;
`;

export { Timer };
