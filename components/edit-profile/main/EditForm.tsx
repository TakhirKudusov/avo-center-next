import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import { devices } from '../../../common/constants';

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

  @media (${devices.tablet}) {
    padding: 0 64px;
  }

  @media (${devices.mobile}) {
    padding: 0 32px;
  }
`;

EditForm.Container = Container;

export default EditForm;
