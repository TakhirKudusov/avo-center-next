import React, { memo } from 'react';
import styled from 'styled-components';
import CommentSubInfo from './CommentSubInfo';
import LikeButton from './LikeButton';

type Props = {
  likes: string;
  time: string | undefined;
  withReply: boolean;
};

const OwnerCommentInfo: React.FC<Props> = ({ likes, time, withReply }) => {
  return (
    <OwnerCommentInfoWrapper>
      <CommentSubInfo likes={likes} time={time} withReply={withReply} />
      <LikeButton />
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
`;

export default memo(OwnerCommentInfo);
