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
  font-family: 'Montserrat';
  font-weight: ${(props) => props.weight};
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
`;

const ReplyButton = styled.button`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  background: none;
  cursor: pointer;
  border: none;
  color: rgba(255, 255, 255, 0.7);

  &:focus,
  &:hover {
    color: #ffffff;
  }
`;

export default memo(CommentSubInfo);
