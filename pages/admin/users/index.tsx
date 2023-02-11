import { ComponentWithLayout } from '../../../common/types';
import AdminLayout from '../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Users = dynamic(
  () => import('../../../components/admin/pages/users_page/Users'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const UsersPage: ComponentWithLayout = () => {
  return <Users />;
};

UsersPage.PageLayout = AdminLayout;

export default UsersPage;
