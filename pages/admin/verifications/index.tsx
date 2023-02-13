import { ComponentWithLayout } from '../../../common/types';
import AdminLayout from '../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Verifications = dynamic(
  () =>
    import('../../../components/admin/pages/verifications_page/Verifications'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const VerificationsPage: ComponentWithLayout = () => {
  return <Verifications />;
};

VerificationsPage.PageLayout = AdminLayout;

export default VerificationsPage;
