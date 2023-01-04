import styled from 'styled-components';

const SmallScreenMenu = ({ children }: { children: React.ReactNode }) => {
  return <MenuWrapper>{children}</MenuWrapper>;
};

export default SmallScreenMenu;

const MenuWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  background: #fafafa;
  opacity: 0.95;
  gap: 12px;
  padding: 12px;
  top: 81px;
`;
