import styled from 'styled-components';
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
  left: 29%;
  bottom: 42px;
  margin-bottom: -10px;
`;

TwitterButton.Wrapper = Wrapper;

export default TwitterButton;
