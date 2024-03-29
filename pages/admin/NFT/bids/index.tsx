import { ComponentWithLayout } from '../../../../common/types';
import AdminLayout from '../../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Bids = dynamic(
  () => import('../../../../components/admin/pages/bids_page/Bids'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const CategoriesPage: ComponentWithLayout = () => {
  return <Bids />;
};

CategoriesPage.PageLayout = AdminLayout;

export default CategoriesPage;
