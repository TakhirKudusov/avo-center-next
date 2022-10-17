import Header from './Header';
import { questionsData } from '../../common/constants';
import Body from './Body';
import { useEffect, useState } from 'react';
import { QuestionId } from '../../common/types';

const General: React.FC = () => {
  const [openedQuestions, setOpenedQuestions] = useState<QuestionId[]>([]);
  const [closedQuestions, setClosedQuestions] = useState<QuestionId[]>([]);

  useEffect(() => {
    console.log(closedQuestions);
  }, [closedQuestions]);

  return (
    <>
      {questionsData.map((el) => {
        return (
          <div key={el.id}>
            <Header
              name={el.name}
              setOpenedQuestions={setOpenedQuestions}
              openedQuestionsArr={openedQuestions}
              setClosedQuestions={setClosedQuestions}
              closedQuestionsArr={closedQuestions}
              id={el.id}
            />
            <Body
              data={{
                body: el.body,
                link: el.link,
                id: el.id,
              }}
              openedQuestions={openedQuestions}
              closedQuestions={closedQuestions}
            />
          </div>
        );
      })}
    </>
  );
};

export default General;
