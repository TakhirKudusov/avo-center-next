import styled from 'styled-components';
import DownSideCornerSVG from '../../../../assets/svg/down-side-corner.svg';
import { QuestionId } from '../../common/types';
import { Dispatch, memo, SetStateAction } from 'react';
import { handleDeleteElementFromArr } from '../../../common/helpers';

type Props = {
  id: QuestionId;
  name: string;
  setOpenedQuestions: Dispatch<SetStateAction<QuestionId[] | []>>;
  openedQuestions: QuestionId[];
  setClosedQuestions: Dispatch<SetStateAction<QuestionId[] | []>>;
  closedQuestions: QuestionId[];
};

const QuestionHeader: React.FC<Props> = ({
  id,
  name,
  setOpenedQuestions,
  openedQuestions,
  setClosedQuestions,
  closedQuestions,
}) => {
  const handleOpenQuestionClick = () => {
    if (openedQuestions.includes(id)) {
      const index = openedQuestions.indexOf(id);
      setOpenedQuestions((prev) => handleDeleteElementFromArr(prev, index));
      setClosedQuestions((prev) => [...prev, id]);
    } else {
      const index = closedQuestions.indexOf(id);
      setOpenedQuestions((prev) => [...prev, id]);
      setClosedQuestions((prev) => handleDeleteElementFromArr(prev, index));
    }
  };

  return (
    <Container>
      <Header onClick={handleOpenQuestionClick}>
        <HeaderText>{name}</HeaderText>
        <IconContainer>
          <DownSideCornerSVG />
        </IconContainer>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  border-top: rgba(255, 255, 255, 0.5) solid 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 100%;
  cursor: pointer;
  margin: 32px 0 0 0;
`;

const HeaderText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: #ffffff;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

export default memo(QuestionHeader);
