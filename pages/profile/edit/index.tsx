import { ComponentWithLayout } from '../../../common/types';
import StoreLayout from '../../../components/layouts/store';
import styled from 'styled-components';
import { ContentContainer } from '../../../components/common';
import PageHeader from '../../../components/edit-profile/page-header';
import { EditForm } from '../../../components/edit-profile/main';

const EditProfilePage: ComponentWithLayout = () => {
  return (
    <Container>
      <PageHeader />
      <EditForm />
    </Container>
  );
};

const Container = styled(ContentContainer)`
  align-items: center;
  padding: 0 0 136px;
  background: #fcfcfd;
`;

EditProfilePage.PageLayout = StoreLayout;
export default EditProfilePage;
