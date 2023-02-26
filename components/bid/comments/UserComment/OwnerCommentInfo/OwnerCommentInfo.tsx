import React, { memo } from 'react';
import styled from 'styled-components';
import { devices } from '../../../../../common/constants';
import CommentSubInfo from '../CommentSubInfo';
import LikeButton from '../../components/LikeButton';
import { useAppSelector } from '../../../../../redux/hooks';
import { TAuthState } from '../../../../../redux/types';

type Props = {
  likes: string[];
  time: string | undefined;
  withReply: boolean;
  commentId: string;
  onPressReply: () => void;
  onCommentLike: (commentId: string) => void;
  onCommentUnlike: (commentId: string) => void;
  userId?: string;
};

const OwnerCommentInfo: React.FC<Props> = ({
  userId,
  likes,
  time,
  withReply,
  commentId,
  onPressReply,
  onCommentLike,
  onCommentUnlike,
}) => {
  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const handleLikeComment = () => {
    if (!!user) onCommentLike(commentId);
  };

  const handleUnlikeComment = () => {
    if (!!user) onCommentUnlike(commentId);
  };

  return (
    <OwnerCommentInfoWrapper>
      <CommentSubInfo
        likes={likes}
        time={time}
        withReply={withReply}
        onPressReply={onPressReply}
      />
      <LikeButton
        isLiked={!!likes?.find((likeUserId) => likeUserId === userId)}
        onCommentLike={handleLikeComment}
        onCommentUnlike={handleUnlikeComment}
      />
    </OwnerCommentInfoWrapper>
  );
};

const OwnerCommentInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 4px;
  height: 24px;
  margin-bottom: 12px;

  @media (${devices.tablet}) {
    height: auto;
  }
`;

export default memo(OwnerCommentInfo);
