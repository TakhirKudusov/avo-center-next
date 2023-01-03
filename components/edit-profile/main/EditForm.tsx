import styled from 'styled-components';
import Header from './Header';
import Body from './Body';

const EditForm = () => {
  return (
    <EditForm.Container>
      <Header />
      <Body />
    </EditForm.Container>
  );
};

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (max-width: 1024px) {
    padding: 0 64px;
  }

  @media (max-width: 415px) {
    padding: 0 32px;
  }
`;

EditForm.Container = Container;

export default EditForm;
