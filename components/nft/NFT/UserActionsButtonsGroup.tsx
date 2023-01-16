import styled from 'styled-components';
import { RadioButton } from '../../ui-kit/Button/RadioButton';
import ThreeDotsSVG from '../../../assets/svg/three-dots.svg';
import ShareSVG from '../../../assets/svg/share.svg';
import LoveSVG from '../../../assets/svg/love.svg';
import { Tooltip } from '../../ui-kit';
import { TooltipPosition } from '../../ui-kit/Tooltip/types';

import TokenActions from './TokenActions';
import { defaultLikesNumber } from './Mock';

type Props = {
  screenSize: 'large' | 'small';
  likesNumber: number;
  onLikeIncrease: () => void;
};

const UserActionsButtonsGroup: React.FC<Props> = ({
  screenSize,
  likesNumber,
  onLikeIncrease,
}) => {
  return (
    <Container screenSize={screenSize}>
      {screenSize === 'large' ? (
        <>
          <Tooltip content={<TokenActions />} position={TooltipPosition.Right}>
            <RadioButton>
              <ThreeDotsSVG />
            </RadioButton>
          </Tooltip>
          <RadioButton>
            <ShareSVG />
          </RadioButton>
          <LikeButtonContainer>
            <RadioButton
              onClick={onLikeIncrease}
              disabled={likesNumber === defaultLikesNumber + 1}
              style={
                likesNumber === defaultLikesNumber + 1
                  ? { backgroundColor: '#ef46707d' }
                  : {}
              }
            >
              <LoveSVG />
            </RadioButton>
            <p>{likesNumber}</p>
          </LikeButtonContainer>
        </>
      ) : (
        <>
          <RadioButton>
            <ShareSVG />
          </RadioButton>
          <LikeButtonContainer>
            <StyledRadioButton
              onClick={onLikeIncrease}
              disabled={likesNumber === defaultLikesNumber + 1}
              style={
                likesNumber === defaultLikesNumber + 1
                  ? { backgroundColor: '#ef46707d' }
                  : {}
              }
            >
              <LoveSVG />
              <p>{likesNumber}</p>
            </StyledRadioButton>
          </LikeButtonContainer>
          <Tooltip content={<TokenActions />} position={TooltipPosition.Right}>
            <RadioButton>
              <ThreeDotsSVG />
            </RadioButton>
          </Tooltip>
        </>
      )}
    </Container>
  );
};

const LikeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 4px;
  width: 48px;
  height: 76px;
  p {
    width: 10px;
    height: 24px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #777e90;
    margin: 0;
  }
`;

const Container = styled.div<{ screenSize: 'large' | 'small' }>`
  display: flex;
  flex-direction: ${({ screenSize }) =>
    screenSize === 'large' ? 'column' : 'raw'};
  align-items: flex-start;
  justify-content: space-between;
  padding: ${({ screenSize }) => (screenSize === 'large' ? 0 : '8px')};
  gap: ${({ screenSize }) => (screenSize === 'large' ? '16px' : '24px')};
  width: ${({ screenSize }) => (screenSize === 'large' ? '48px' : '237px')};
  height: ${({ screenSize }) => (screenSize === 'large' ? '204px' : '64px')};
  background: ${({ screenSize }) => (screenSize === 'large' ? 'none' : '#fff')};
  border-radius: 64px;
  align-self: ${({ screenSize }) =>
    screenSize === 'large' ? 'auto' : 'center'};
`;

const StyledRadioButton = styled(RadioButton)`
  width: 77px;
  gap: 10px;
`;

export default UserActionsButtonsGroup;
