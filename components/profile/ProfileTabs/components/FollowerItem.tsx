import styled from 'styled-components';
import { Button, ButtonSize, ButtonType, Divider } from '../../../ui-kit';
import { FollowType } from '../constants';
import { Follower } from '../types';

type Props = Omit<Follower, 'id'> & {
  followType: FollowType;
};

const FollowerItem = ({
  followType,
  name,
  avatar,
  followerNumber,
  frameList,
}: Props) => (
  <FollowerContainer>
    <FollowerWrapper>
      <FollowerInfoWrapper>
        <Avatar src={avatar} />
        <FollowerInfo>
          <FollowerTitle>{name}</FollowerTitle>
          <Fallowers>{`${followerNumber}followers`}</Fallowers>
          <Button
            style={{ borderRadius: 90 }}
            size={ButtonSize.Small}
            type={
              followType === FollowType.FOLLOW
                ? ButtonType.Secondary
                : ButtonType.Primary
            }
          >
            {followType === FollowType.FOLLOW ? 'Follow' : 'Unfollow'}
          </Button>
        </FollowerInfo>
      </FollowerInfoWrapper>
      <Frames>
        {frameList.map((frame) => (
          <Frame src={frame.src} key={frame.id} />
        ))}
      </Frames>
    </FollowerWrapper>
    <Divider />
  </FollowerContainer>
);

export default FollowerItem;

const FollowerContainer = styled.div`
  margin-bottom: 32px;
`;

const FollowerWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

const FollowerInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
`;

const FollowerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const FollowerTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
  margin: 0;
`;

const Fallowers = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
  display: block;
  margin-bottom: 12px;
`;

const Frames = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 130px;
`;

const Frame = styled.img`
  width: 112px;
  height: 88px;
  border-radius: 12px;
`;
