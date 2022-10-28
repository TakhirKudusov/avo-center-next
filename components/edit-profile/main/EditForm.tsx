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
`;

EditForm.Container = Container;

export default EditForm;
