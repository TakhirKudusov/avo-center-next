import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/poppins/Poppins-Regular.ttf");
  }
  
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
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    -ms-transition: all 0.3s;
  }
`;

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

const PageContainer = styled.main`
  padding-top: 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export { FlexContainer, ContentContainer, PageContainer, FormRow, Global };
