import { ComponentWithLayout } from '../../../../common/types';
import AdminLayout from '../../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Categories = dynamic(
  () => import('../../../../components/admin/pages/categories_page/Categories'),
  {
    loading: () => <LoadingSpinner />,
  },
);

const CategoriesPage: ComponentWithLayout = () => {
  return <Categories />;
};

CategoriesPage.PageLayout = AdminLayout;

export default CategoriesPage;
