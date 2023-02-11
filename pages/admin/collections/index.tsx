import { ComponentWithLayout } from '../../../common/types';
import AdminLayout from '../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Collections = dynamic(
  () => import('../../../components/admin/pages/collections_page/Collections'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const CollectionsPage: ComponentWithLayout = () => {
  return <Collections />;
};

CollectionsPage.PageLayout = AdminLayout;

export default CollectionsPage;
