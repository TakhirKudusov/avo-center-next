import { Question, QuestionId } from '../../common/types';
import styled from 'styled-components';
import { memo } from 'react';
import clsx from 'clsx';
import { ButtonType, Button } from '../../../ui-kit';

type Props = {
  data: Omit<Question, 'name'>;
  openedQuestions: QuestionId[];
  closedQuestions: QuestionId[];
};

const Body: React.FC<Props> = ({ data, openedQuestions, closedQuestions }) => {
  const isOpened = openedQuestions.includes(data.id);
  const isClosed = closedQuestions.includes(data.id);

  const styles = clsx({
    active: isOpened,
    inactive: isClosed,
  });

  return (
    <Wrapper className={styles}>
      <Container>
        <BodyText>{data.body}</BodyText>
        <a href={data.link} rel="noreferrer" target="_blank">
          <Button btnType={ButtonType.Primary}>Learn more</Button>
        </a>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 0;
  overflow: hidden;
  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: 220px;
    }
  }
  @keyframes slideUp {
    from {
      height: 220px;
    }
    to {
      height: 0;
    }
  }
  &.active {
    height: fit-content;
    animation-duration: 0.5s;
    animation-name: slideDown;
  }
  &.inactive {
    animation-duration: 0.5s;
    animation-name: slideUp;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 24px;
  width: 100%;
`;

const BodyText = styled.p`
  width: 100%;
  height: fit-content;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
`;

export default memo(Body);
