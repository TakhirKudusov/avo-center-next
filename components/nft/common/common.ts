import styled from 'styled-components';

const Header = styled.div`
  margin-top: 80px;
  height: 116px;
  width: 100%;
`;

const NFTDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 96px;
`;

const NFTDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 56px;
`;

export { Header, NFTDescriptionContainer, NFTDescriptionWrapper };
