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
  align-items: flex-start;
  gap: 56px;
`;

const TagsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 26px;
  margin-left: 24px;
`;

export { Header, NFTDescriptionContainer, NFTDescriptionWrapper, TagsWrapper };
