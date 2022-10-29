import styled from 'styled-components';
import { Button } from '../../ui-kit';

const TwitterButton = () => {
  return (
    <TwitterButton.Wrapper>
      <Button size={0}>Verify account</Button>
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
