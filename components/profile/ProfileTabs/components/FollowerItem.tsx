import styled from 'styled-components';
import { devices } from '../../../../common/constants';
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
  return (
    <FollowerContainer>
      <FollowerWrapper>
        <FollowerInfoWrapper>
          <Avatar background={avatar} />
          <FollowerInfo>
            <FollowerTitle>{name}</FollowerTitle>
            <Fallowers>{`${followerNumber} followers`}</Fallowers>
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
        <Frames>
          {frameList.map((frame, index) => (
            <Frame background={frame.src} key={index} />
          ))}
        </Frames>
      </FollowerWrapper>
      <Divider />
    </FollowerContainer>
  );
};

export default FollowerItem;

const FollowerContainer = styled.div`
  margin-bottom: 32px;
`;

const FollowerWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;

  @media (${devices.mobile}) {
    flex-direction: column;
  }
`;

const FollowerInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 20px;

  @media (${devices.mobile}) {
    justify-items: center;
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
