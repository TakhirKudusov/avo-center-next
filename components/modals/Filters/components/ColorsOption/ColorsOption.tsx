import { memo } from 'react';
import styled from 'styled-components';

type Props = {
  colorName: string;
  color: string;
};

const ColorsOption = ({ colorName, color }: Props) => {
  return (
    <OptionWrapper>
      <ColoredCircle color={color} />
      <ColorName color={color}>{colorName}</ColorName>
    </OptionWrapper>
  );
};

const OptionWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ColoredCircle = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background: ${({ color }) => {
    if (color === '#3772FF') {
      return '#ffffff';
    }

    return color;
  }};
  border: ${({ color }) => `2px solid ${color}`};
  border-radius: 50%;
`;

const ColorName = styled.span<{ color: string }>`
  color: ${({ color }) => (color === '#3772FF' ? color : '#23262F')};
  font-weight: 500;
`;

export default memo(ColorsOption);
