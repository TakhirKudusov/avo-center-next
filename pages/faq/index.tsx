import { ComponentWithLayout } from '../../common/types';
import StoreLayout from '../../components/layouts/store';
import QuestionsBlock from '../../components/faq/questions/QuestionsBlock';

const FAQPage: ComponentWithLayout = () => {
  return (
    <>
      <QuestionsBlock />
    </>
  );
};

FAQPage.PageLayout = StoreLayout;
export default FAQPage;
