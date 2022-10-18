import Header from './Header';
import { QUESTIONS_DATA } from '../../common/constants';
import Body from './Body';
import { useEffect, useState } from 'react';
import { QuestionId } from '../../common/types';

const General: React.FC = () => {
  const [openedQuestions, setOpenedQuestions] = useState<QuestionId[]>([]);
  const [closedQuestions, setClosedQuestions] = useState<QuestionId[]>([]);

  return (
    <>
      {QUESTIONS_DATA.map((el) => {
        return (
          <div key={el.id}>
            <Header
              id={el.id}
              name={el.name}
              setOpenedQuestions={setOpenedQuestions}
              openedQuestions={openedQuestions}
              setClosedQuestions={setClosedQuestions}
              closedQuestions={closedQuestions}
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
