import styled from 'styled-components';
import UpSideCornerSVG from '../../../assets/svg/up-side-corner.svg';
import { memo } from 'react';

type Props = {
  commentsQuantity: string;
};

const HideAnswers: React.FC<Props> = ({ commentsQuantity }) => {
  return (
    <Container>
      <HideButton>
        <p>Hide answers</p>
        <div className={'svg-btn-wrapper'}>
          <UpSideCornerSVG className={'svg-btn'} />
        </div>
      </HideButton>
      <TextContainer>
        <p>Comments: {commentsQuantity}</p>
      </TextContainer>
    </Container>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 95px;
  height: 24px;
  p {
    width: 95px;
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #777e91;
  }
`;

const HideButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 122px;
  height: 24px;
  cursor: pointer;
  p {
    width: 94px;
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #777e90;
  }
  .svg-btn-wrapper {
    width: 24px;
    height: 24px;
    .svg-btn {
      position: relative;
      left: 31.25%;
      right: 45.83%;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  width: 1056px;
  height: 24px;
  margin-top: 7px;
`;

export default memo(HideAnswers);
