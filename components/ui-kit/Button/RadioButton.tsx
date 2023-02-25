import styled from 'styled-components';

const RadioButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 48px;
  background: none;
  cursor: pointer;

  &:hover {
    border: 2px solid #ffffff;
  }
`;

export { RadioButton };
