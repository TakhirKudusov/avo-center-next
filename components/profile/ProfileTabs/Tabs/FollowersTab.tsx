import styled from 'styled-components';
import { getImageUrl } from '../../../../common/helpers/getImageUrl.helper';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import {
  followUser,
  getUserProfile,
  unFollowUser,
} from '../../../../redux/slicers/profileSlicer/profileSlicer';
import { TProfileState } from '../../../../redux/slicers/profileSlicer/types';
import { TAuthState } from '../../../../redux/types';
import { IUser } from '../../../../swagger';
import { FollowerItem } from '../components';
import { FollowType } from '../constants';
import { Follower } from '../types';

type Props = {
  followType: FollowType;
};

export const FollowersTab = ({ followType }: Props) => {
  const dispatch = useAppDispatch();

  const { user: profileUser, loading } = useAppSelector<TProfileState>(
    (state) => state.profile,
  );
  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const followers =
    followType === FollowType.FOLLOWING
      ? profileUser?.following!
      : profileUser?.followers!;

  const handleFollow = (id: string) => async () => {
    if (followType === FollowType.FOLLOWERS) {
      const followResult = await dispatch(followUser(id));

      if (followResult) {
        dispatch(getUserProfile(profileUser?._id as string));
      }
    }

    if (followType === FollowType.FOLLOWING) {
      const followResult = await dispatch(unFollowUser(id));

      if (followResult) {
        dispatch(getUserProfile(profileUser?._id as string));
      }
    }
  };

  const deserializeFollowingUser = (followers: IUser[]): Follower[] => {
    return followers.map((item) => ({
      _id: item._id,
      name: item.username,
      avatar: getImageUrl(item.avatar),
      followerNumber: item.followers.length,
      frameList: (item as any).userNFTs.map(
        (userNft: IUser & { file: any }) => ({
          id: userNft._id,
          src: getImageUrl(userNft.file),
        }),
      ),
      followers: item.followers,
    }));
  };

  // const followingUser = profileUser?.followers.find((item) =>
  //   (item.followers as unknown[]).find((followerId) => followerId === user?.id),
  // );

  return (
    <TabWrapper>
      {!!followers?.length ? (
        deserializeFollowingUser(followers).map((follower, index) => (
          <FollowerItem
            {...follower}
            // userNft=
            onFollow={handleFollow(follower._id)}
            followType={followType}
            loading={loading}
            isFollowing={
              !!follower.followers.find((item) => item._id !== user?.id)
            }
            key={`${followType}-${index}`}
          />
        ))
      ) : (
        <NoData>No data found</NoData>
      )}
    </TabWrapper>
  );
};

export default FollowersTab;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NoData = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #23262f;
  font-weight: 600;
  line-height: 32px;
  margin-top: 32px;
`;
