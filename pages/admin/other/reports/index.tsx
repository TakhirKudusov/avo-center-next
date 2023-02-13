import { ComponentWithLayout } from '../../../../common/types';
import AdminLayout from '../../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Reports = dynamic(
  () => import('../../../../components/admin/pages/reports_page/Reports'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const ReportsPage: ComponentWithLayout = () => {
  return <Reports />;
};

ReportsPage.PageLayout = AdminLayout;

export default ReportsPage;
