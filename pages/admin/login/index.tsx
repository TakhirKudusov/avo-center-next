import { ComponentWithLayout } from '../../../common/types';
import AdminLayout from '../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../components/admin/UI/loading_spinner/LoadingSpinner';

const LoginPage = dynamic(
  () => import('../../../components/admin/pages/login_page/Login'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const Login: ComponentWithLayout = () => {
  return <LoginPage />;
};

Login.PageLayout = AdminLayout;

export default Login;
