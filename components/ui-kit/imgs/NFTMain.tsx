import styled from "styled-components";

const NFTMainWrapper = styled.div.attrs(props => ({
    background: "url('')",
}))`
  width: 500.13px;
  height: 600px;
  overflow: hidden;
  background: ${props => props.background};
`