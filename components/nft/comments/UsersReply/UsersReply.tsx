import React, { memo } from 'react';
import styled from 'styled-components';

import { devices } from '../../../../common/constants';
import UserComment from '../UserComment';
import OwnerAvatar from '../OwnerAvatar';
import { IComment } from '../../../../swagger';

type Props = {
  parentCommentId: string;
  commentsData: IComment[];
  onCommentLike: (commentId: string) => void;
  onCommentUnlike: (commentId: string) => void;
  userId?: string;
};

const UsersReply: React.FC<Props> = ({
  userId,
  parentCommentId,
  commentsData,
  onCommentLike,
  onCommentUnlike,
}) => {
  return (
    <>
      {commentsData?.map((comment, i) => (
        <ReplyContainer key={comment.author?.username + i}>
          <OwnerAvatar image={comment.author?.avatar} onClick={() => {}} />
          <UserComment
            userId={userId}
            parentCommentId={parentCommentId}
            commentsData={comment}
            withTextArea={false}
            withReply={false}
            onCommentLike={() => onCommentLike(comment._id)}
            onCommentUnlike={() => onCommentUnlike(comment._id)}
          />
        </ReplyContainer>
      ))}
    </>
  );
};

const ReplyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  height: 84px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
    height: auto;
  }
`;

export default memo(UsersReply);
