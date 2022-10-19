import { Question, QuestionId } from '../../common/types';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { memo } from 'react';
import clsx from 'clsx';

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
        <a href={data.link} rel="noreferrer" target={'_blank'}>
          <Button>Learn more</Button>
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
    height: 220px;
    animation-duration: 0.5s;
    animation-name: slideDown;
  }
  &.inactive {
    animation-duration: 0.5s;
    animation-name: slideUp;
  }
`;

const BodyText = styled.p`
  width: 735px;
  height: fit-content;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #777e91;
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 117px;
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #23262f;
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  &:hover {
    background-color: #e6e8ec;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 24px;
  width: 735px;
`;

export default memo(Body);
