import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'DM Sans', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

const FlexContainer = styled.div`
  display: flex;
  max-width: 1150px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { FlexContainer, ContentContainer, Global };
