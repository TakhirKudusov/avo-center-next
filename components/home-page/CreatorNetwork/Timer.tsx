import styled from 'styled-components';

const Timer = () => {
  return (
    <TimerBody>
      <TimerItem>
        <TimerValue>19</TimerValue>
        <TimerLabel>Hrs</TimerLabel>
      </TimerItem>
      <TimerItem>
        <TimerValue>24</TimerValue>
        <TimerLabel>mins</TimerLabel>
      </TimerItem>
      <TimerItem>
        <TimerValue>19</TimerValue>
        <TimerLabel>secs</TimerLabel>
      </TimerItem>
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
