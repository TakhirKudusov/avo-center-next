import { ComponentWithLayout } from '../../../common/types';
import AdminLayout from '../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Faqs = dynamic(
  () => import('../../../components/admin/pages/faqs_page/Faqs'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const FaqsPage: ComponentWithLayout = () => {
  return <Faqs />;
};

FaqsPage.PageLayout = AdminLayout;

export default FaqsPage;
