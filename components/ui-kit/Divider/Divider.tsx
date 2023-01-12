import styled from 'styled-components';

const Divider = ({ ...props }) => (
  <DividerWrapper className={props.className} {...props} />
);

export default Divider;

const DividerWrapper = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e8ec;
  margin: 16px 0;
`;
