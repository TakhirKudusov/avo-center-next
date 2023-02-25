import { ButtonType } from '../../../ui-kit';
import { FollowType } from '../constants';

export const getActionBtnName = (
  followType: FollowType,
  isFollowing: boolean,
) => {
  if (followType === FollowType.FOLLOWERS && !isFollowing) {
    return 'Follow';
  }

  if (followType === FollowType.FOLLOWING) {
    return 'Unfollow';
  }

  return 'Followed';
};

export const getButtonType = (followType: FollowType, isFollowing: boolean) => {
  if (followType === FollowType.FOLLOWERS && !isFollowing) {
    return ButtonType.Secondary;
  }

  return ButtonType.Outlined;
};
