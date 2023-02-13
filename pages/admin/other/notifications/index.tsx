import { ComponentWithLayout } from '../../../../common/types';
import AdminLayout from '../../../../components/admin/layout';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../../components/admin/UI/loading_spinner/LoadingSpinner';

const Notifications = dynamic(
  () =>
    import(
      '../../../../components/admin/pages/notifications_page/Notifications'
    ),
  {
    loading: () => <LoadingSpinner />,
  },
);

const NotificationsPage: ComponentWithLayout = () => {
  return <Notifications />;
};

NotificationsPage.PageLayout = AdminLayout;

export default NotificationsPage;
