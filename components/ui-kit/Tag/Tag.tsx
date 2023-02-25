import styled from 'styled-components';
import { memo, ReactNode } from 'react';

type Props = {
  type: 'primary' | 'default';
  children: ReactNode;
};

// const TagNFT: React.FC<Props> = ({ type, children }) => {
//   return <Tag type={type}>{children}</Tag>;
// };

const Tag = styled.div<{ type: 'primary' | 'default' }>`
  padding: 8px 8px 6px;
  background-color: ${(props) => {
    switch (props.type) {
      case 'primary':
        return '#ffffff';
      case 'default':
        return '#9757D7';
      default:
        return 'white';
    }
  }};
  text-transform: uppercase;
  width: fit-content;
  color: #141416;
  font-weight: 400;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
  font-family: 'Nasalization';
`;

export default memo(Tag);
