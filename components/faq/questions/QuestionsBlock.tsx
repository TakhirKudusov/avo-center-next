import styled from 'styled-components';
import Header from './Header';
import MainContent from './MainContent';

const QuestionsBlock: React.FC = () => {
  return (
    <BlockWrapper>
      <QuestionsContainer>
        <Header />
        <MainContent />
      </QuestionsContainer>
    </BlockWrapper>
  );
};

const QuestionsContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 160px 0 160px;
  background: #fcfcfd;

  @media (max-width: 1024px) {
    padding: 80px 80px 0 80px;
  }

  @media (max-width: 415px) {
    padding: 40px 40px 0 40px;
  }
`;

export default QuestionsBlock;
