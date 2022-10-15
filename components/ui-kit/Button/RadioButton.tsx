import styled from 'styled-components';

const RadioButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border: 2px solid #e6e8ec;
  border-radius: 48px;
  background-color: white;
  cursor: pointer;
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  &:hover {
    background-color: #e6e8ec;
  }
`;

export { RadioButton };
