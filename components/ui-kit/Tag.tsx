import styled from "styled-components";
import {memo, ReactNode} from "react";

interface Props {
    type: "primary" | "default";
    children: ReactNode
}

const Tag = styled.div<{type: "primary" | "default"}>`
  padding: 8px 8px 6px;
  background-color: ${props => {
      switch (props.type) {
          case "primary":
              return "#23262F"
          case "default":
              return "#9757D7"
        default:
            return "white"
      }
  }};
  text-transform: uppercase;
  width: fit-content;
  color: #FCFCFD;
  font-weight: 700;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
  font-family: 'Poppins';
  font-style: normal;
`

const TagNFT: React.FC<Props> = ({type, children}) => {
    return <Tag type={type}>{children}</Tag>
}

export default memo(Tag)