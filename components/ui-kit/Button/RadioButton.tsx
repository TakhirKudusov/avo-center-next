import styled from 'styled-components';

const RadioButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border: 2px solid #e6e8ec;
  border-radius: 48px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #e6e8ec;
  }
`;

export { RadioButton };
