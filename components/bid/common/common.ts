import styled from 'styled-components';
import { devices } from '../../../common/constants';

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

  @media (${devices.tablet}) {
    width: 1024px;
    padding: 0 80px;
  }

  @media (${devices.mobile}) {
    width: 375px;
    padding: 0 32px;
    flex-direction: column;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 26px;
  margin-left: 24px;
`;

export { Header, NFTDescriptionContainer, NFTDescriptionWrapper, TagsWrapper };
