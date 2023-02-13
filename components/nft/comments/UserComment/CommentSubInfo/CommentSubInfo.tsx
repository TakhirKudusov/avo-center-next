import styled from 'styled-components';
import React, { memo } from 'react';

type Props = {
  likes: string[];
  time: string | undefined;
  withReply: boolean;
  onPressReply: () => void;
};

const CommentSubInfo: React.FC<Props> = ({
  likes,
  time,
  withReply,
  onPressReply,
}) => {
  return (
    <OwnerCommentInfoBlock>
      <OwnerComment weight={'400'}>{time || '0s'}</OwnerComment>
      <OwnerComment weight={'400'}>Like: {likes?.length}</OwnerComment>
      {withReply && <ReplyButton onClick={onPressReply}>Reply</ReplyButton>}
    </OwnerCommentInfoBlock>
  );
};

const OwnerCommentInfoBlock = styled.div`
  display: flex;
  padding: 0;
  gap: 20px;
  height: 24px;
`;

const OwnerComment = styled.div<any>`
  height: 24px;
  font-family: 'Poppins';
  font-weight: ${(props) => props.weight};
  font-size: 14px;
  line-height: 24px;
  color: #777e90;
`;

const ReplyButton = styled.button`
  font-weight: 700;
  background: none;
  cursor: pointer;
  border: none;
  color: #777e90;

  &:focus {
    color: #b1b2b7;
  }
`;

export default memo(CommentSubInfo);
