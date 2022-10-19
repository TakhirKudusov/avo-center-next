import { memo, useState } from 'react';
import styled from 'styled-components';
import { handleClick } from './helpers';
import { THandler } from './types';

type Props = {
  value?: boolean;
  onChange?: THandler;
};
const Switch: React.FC<Props> = ({ value, onChange }) => {
  const [active, setActive] = useState(!!value);

  return (
    <SwitchWrapper onClick={handleClick(setActive, onChange)} active={active}>
      <SwitchRound />
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 4px;
  box-sizing: border-box;
  width: 40px;
  height: 20px;
  border-radius: 32px;
  background: ${(props) => (props.active ? '#45B36B' : '#e6e8ec')};
  transition: all 0.3s;
  cursor: pointer;

  & > div {
    transition: all 0.3s;
    transform: ${(props) =>
      props.active ? 'translate(20px)' : 'translate(0px)'};
    background: ${(props) => (props.active ? '#FCFCFD' : '#141416')};
  }
`;

const SwitchRound = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 32px;
  position: absolute;
`;

export default memo(Switch);
