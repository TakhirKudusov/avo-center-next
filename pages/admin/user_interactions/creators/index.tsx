import { ComponentWithLayout } from '../../../../common/types';
import AdminLayout from '../../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Creators = dynamic(
  () => import('../../../../components/admin/pages/creators_page/Creators'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const CreatorsPage: ComponentWithLayout = () => {
  return <Creators />;
};

CreatorsPage.PageLayout = AdminLayout;

export default CreatorsPage;
