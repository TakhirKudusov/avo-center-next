import styled from 'styled-components';
import UpSideCornerSVG from '../../../../assets/svg/up-side-corner.svg';
import { memo } from 'react';
import { devices } from '../../../../common/constants';

type Props = {
  isAnswersHidden: boolean;
  commentsQuantity: string;
  onAnwserToggle: () => void;
};

const HideAnswers: React.FC<Props> = ({
  isAnswersHidden,
  commentsQuantity,
  onAnwserToggle,
}) => {
  return (
    <Container>
      <HideButton onClick={onAnwserToggle}>
        <p>Hide answers</p>
        <div className="svg-btn-wrapper">
          <StyledUpSideCornerSVG
            className="svg-btn"
            rotated={isAnswersHidden}
          />
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
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 95px;
  height: 24px;
  p {
    width: 95px;
    height: 24px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #777e91;
  }
`;

const HideButton = styled.div`
  display: flex;
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
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  width: 1056px;
  height: 24px;
  margin-top: 7px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const StyledUpSideCornerSVG = styled(UpSideCornerSVG)<{ rotated: boolean }>`
  transform: ${({ rotated }) => (rotated ? 'rotate(180deg)' : 'rotate(0)')};
  transition: all 0.3s;
`;

export default memo(HideAnswers);
