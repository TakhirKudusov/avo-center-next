import styled from 'styled-components';

const SmallScreenMenu = ({ children }: { children: React.ReactNode }) => {
  return <MenuWrapper>{children}</MenuWrapper>;
};

export default SmallScreenMenu;

const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  opacity: 0.95;
  gap: 12px;
  top: 93px;
  padding: 32px 24px 32px;
  border-radius: 0px 0px 12px 12px;
`;
