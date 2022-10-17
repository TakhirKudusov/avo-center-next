import styled from 'styled-components';
import DownSideCornerSVG from '../../../../assets/svg/down-side-corner.svg';
import { QuestionId } from '../../common/types';
import { Dispatch, memo, SetStateAction } from 'react';
import { handleDeleteElementFromArr } from '../../common/helpers';

type Props = {
  name: string;
  setOpenedQuestions: Dispatch<SetStateAction<QuestionId[] | []>>;
  openedQuestionsArr: QuestionId[];
  setClosedQuestions: Dispatch<SetStateAction<QuestionId[] | []>>;
  closedQuestionsArr: QuestionId[];
  id: QuestionId;
};

const QuestionHeader: React.FC<Props> = ({
  name,
  setOpenedQuestions,
  openedQuestionsArr,
  setClosedQuestions,
  closedQuestionsArr,
  id,
}) => {
  const handleOpenQuestionClick = () => {
    if (openedQuestionsArr.includes(id)) {
      setOpenedQuestions((prev) => handleDeleteElementFromArr(prev, id));
      setClosedQuestions((prev) => [...prev, id]);
    } else {
      setOpenedQuestions((prev) => [...prev, id]);
      setClosedQuestions((prev) => handleDeleteElementFromArr(prev, id));
    }
  };

  return (
    <Container>
      <Header onClick={handleOpenQuestionClick}>
        <p>{name}</p>
        <IconContainer>
          <DownSideCornerSVG />
        </IconContainer>
      </Header>
    </Container>
  );
};

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 735px;
  cursor: pointer;
  margin: 32px 0 0 0;
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
`;

const Container = styled.div`
  border-top: #e4e6ea solid 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 735px;
  //padding-bottom: 40px;
`;

export default memo(QuestionHeader);
