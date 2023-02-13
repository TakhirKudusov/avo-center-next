import { ComponentWithLayout } from '../../../../common/types';
import AdminLayout from '../../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Sellers = dynamic(
  () => import('../../../../components/admin/pages/sellers_page/Sellers'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const SellersPage: ComponentWithLayout = () => {
  return <Sellers />;
};

SellersPage.PageLayout = AdminLayout;

export default SellersPage;
