import styled from "styled-components";

const RadioButton = styled.button`
  height: 48px;
  width: 48px;
  border: 2px solid #E6E8EC;
  border-radius: 48px;
  justify-content: center;
  align-items: center;
  margin: 34px auto 34px auto;
  background-color: white;
  cursor: pointer;
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  &:hover {
    background-color: #E6E8EC;
  }

`

export {RadioButton}