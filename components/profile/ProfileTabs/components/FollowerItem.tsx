import styled from 'styled-components';
import { devices, screenSizes } from '../../../../common/constants';
import { useAdaptiveSlider } from '../../../../common/hooks/useAdaptiveSlider';
import { Button, ButtonSize, Divider } from '../../../ui-kit';
import { FollowType } from '../constants';
import { Follower } from '../types';
import { getActionBtnName, getButtonType } from './utils';

type Props = Follower & {
  followType: FollowType;
  isFollowing: boolean;
  loading: boolean;
  onFollow: () => void;
};

const FollowerItem = ({
  onFollow,
  followType,
  name,
  avatar,
  followerNumber,
  frameList,
  isFollowing,
  loading,
}: Props) => {
  const { screenSize } = useAdaptiveSlider();

  return (
    <FollowerContainer>
      <FollowerWrapper>
        <FollowerInfoWrapper>
          <Avatar background={avatar} />
          <FollowerInfo>
            <div>
              <FollowerTitle>{name}</FollowerTitle>
              <Fallowers>{`${followerNumber} followers`}</Fallowers>
            </div>
            <Button
              style={{ borderRadius: 12, height: 40 }}
              size={ButtonSize.Small}
              btnType={getButtonType(followType, isFollowing)}
              disabled={
                (followType === FollowType.FOLLOWERS && isFollowing) || loading
              }
              onClick={onFollow}
            >
              {getActionBtnName(followType, isFollowing)}
            </Button>
          </FollowerInfo>
        </FollowerInfoWrapper>
        {screenSize > screenSizes.mobileL && (
          <Frames>
            {frameList.slice(0, 4).map((frame, index) => (
              <Frame background={frame.src} key={index} />
            ))}
          </Frames>
        )}
      </FollowerWrapper>
      <Divider />
    </FollowerContainer>
  );
};

export default FollowerItem;

const FollowerContainer = styled.div`
  margin-bottom: 32px;

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const FollowerWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  padding: 12px;
  border-radius: 12px;

  @media (${devices.mobile}) {
    flex-direction: column;
  }
`;

const FollowerInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 20px;

  @media (${devices.mobile}) {
    display: flex;
    align-items: center;
    gap: 20px;
    /* justify-items: center; */
  }
`;

const Avatar = styled.div<{ background: string }>`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-size: cover;
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
`;

const FollowerInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (${devices.mobile}) {
    flex-direction: row;
    gap: 20px;
  }
`;

const FollowerTitle = styled.h2`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin: 0;
`;

const Fallowers = styled.span`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
  display: block;
  margin-bottom: 12px;
`;

const Frames = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 130px;

  @media (${devices.mobile}) {
    flex-wrap: wrap;
    margin-left: 0;
    justify-content: flex-end;
    margin-top: 30px;
  }
`;

const Frame = styled.div<{ background: string }>`
  width: 112px;
  height: 88px;
  border-radius: 12px;
  background-size: cover;
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
`;
