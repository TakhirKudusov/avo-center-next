import styled from 'styled-components';
import { devices } from '../../../common/constants';
import { Button, ButtonSize } from '../../ui-kit';

const TwitterButton = () => {
  return (
    <TwitterButton.Wrapper>
      <Button size={ButtonSize.Small}>Verify account</Button>
    </TwitterButton.Wrapper>
  );
};

const Wrapper = styled.div<{ isError?: boolean; state?: string }>`
  position: relative;
  left: 27%;
  bottom: 42px;
  margin-bottom: -10px;
  width: fit-content;

  @media (${devices.mobile}) {
    left: 61%;
  }
`;

TwitterButton.Wrapper = Wrapper;

export default TwitterButton;
