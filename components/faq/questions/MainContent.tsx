import styled from 'styled-components';
import CategoriesList from './CategoriesList';

const MainContent: React.FC = () => {
  return (
    <Container>
      <CategoriesList />
    </Container>
  );
};

const Container = styled.div`
  width: 1120px;
  margin-top: 80px;
`;

export default MainContent;
