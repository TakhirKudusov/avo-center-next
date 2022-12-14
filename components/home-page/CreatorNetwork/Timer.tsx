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
      {timeValues
        ?.splice(1, timeValues?.length)
        .map(({ digit, value }, index) => (
          <TimerItem key={index}>
            <TimerValue>{value}</TimerValue>
            <TimerLabel>{digit}</TimerLabel>
          </TimerItem>
        ))}
    </TimerBody>
  );
};

const TimerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
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
`;

const TimerLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #777e91;
`;

export { Timer };
