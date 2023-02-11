import { ComponentWithLayout } from '../../../common/types';
import AdminLayout from '../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Nft = dynamic(
  () => import('../../../components/admin/pages/nft_page/Nft'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const NftPage: ComponentWithLayout = () => {
  return <Nft />;
};

NftPage.PageLayout = AdminLayout;

export default NftPage;
