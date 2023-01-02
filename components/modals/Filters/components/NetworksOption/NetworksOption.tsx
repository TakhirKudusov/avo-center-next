import { memo } from 'react';
import styled from 'styled-components';

type Props = {
  icon: JSX.Element;
  optionName: string;
};

const NetworksOption = ({ icon, optionName }: Props) => {
  return (
    <OptionWrapper>
      {icon}
      <span>{optionName}</span>
    </OptionWrapper>
  );
};

const OptionWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default memo(NetworksOption);
