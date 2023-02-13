import { ComponentWithLayout } from '../../common/types';
import AdminLayout from '../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../components/admin/UI/loading_spinner/LoadingSpinner';

const MainAdmin = dynamic(
  () => import('../../components/admin/pages/main_admin/MainAdmin'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const AdminPage: ComponentWithLayout = () => {
  return <MainAdmin />;
};

AdminPage.PageLayout = AdminLayout;

export default AdminPage;
