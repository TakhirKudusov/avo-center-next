import styled from 'styled-components';
import { RadioButton } from '../../ui-kit/Button/RadioButton';
import ThreeDotsSVG from '../../../assets/svg/three-dots.svg';
import ShareSVG from '../../../assets/svg/share.svg';
import LoveSVG from '../../../assets/svg/love.svg';
import { Tooltip } from '../../ui-kit';
import { TooltipPosition } from '../../ui-kit/Tooltip/types';

import TokenActions from './TokenActions';
import ShareActions from './ShareActions';

type Props = {
  screenSize: 'large' | 'small';
  likesNumber: number;
  defaultLikesNumber: number;
  onLikeClick: () => void;
  host?: string;
};

const UserActionsButtonsGroup: React.FC<Props> = ({
  host,
  screenSize,
  likesNumber,
  defaultLikesNumber,
  onLikeClick,
}) => {
  return (
    <Container screenSize={screenSize}>
      {screenSize === 'large' ? (
        <>
          <Tooltip content={<TokenActions />} position={TooltipPosition.Right}>
            <RadioButton>
              <ThreeDotsSVG color="rgba(255, 255, 255, 0.7)" />
            </RadioButton>
          </Tooltip>
          <Tooltip
            content={<ShareActions host={host} />}
            position={TooltipPosition.Right}
          >
            <RadioButton>
              <ShareSVG color="rgba(255, 255, 255, 0.7)" />
            </RadioButton>
          </Tooltip>
          <LikeButtonContainer>
            <RadioButton
              onClick={onLikeClick}
              style={
                likesNumber === defaultLikesNumber + 1
                  ? { backgroundColor: '#ef46707d' }
                  : {}
              }
            >
              <LoveSVG />
            </RadioButton>
            <LikeNumber>{likesNumber}</LikeNumber>
          </LikeButtonContainer>
        </>
      ) : (
        <>
          <RadioButton>
            <ShareSVG />
          </RadioButton>
          <LikeButtonContainer>
            <StyledRadioButton
              onClick={onLikeClick}
              disabled={likesNumber === defaultLikesNumber + 1}
              style={
                likesNumber === defaultLikesNumber + 1
                  ? { backgroundColor: '#ef46707d' }
                  : {}
              }
            >
              <LoveSVG />
              <LikeNumber>{likesNumber}</LikeNumber>
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
  & > p {
    width: 10px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }

  &:hover {
    & > p {
      color: #ffffff;
    }
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

const LikeNumber = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledRadioButton = styled(RadioButton)`
  width: 77px;
  gap: 10px;
`;

export default UserActionsButtonsGroup;
