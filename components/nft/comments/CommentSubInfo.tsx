import styled from 'styled-components';
import React, { memo } from 'react';

type Props = {
  likes: string;
  time: string | undefined;
  withReply: boolean;
};

const CommentSubInfo: React.FC<Props> = ({ likes, time, withReply }) => {
  return (
    <OwnerCommentInfoBlock>
      <OwnerComment weight={'400'}>{time}</OwnerComment>
      {likes !== '0' && (
        <OwnerComment weight={'400'}>Like: {likes}</OwnerComment>
      )}
      {withReply && (
        <OwnerComment weight={'700'} cursor={'pointer'}>
          Reply
        </OwnerComment>
      )}
    </OwnerCommentInfoBlock>
  );
};

const OwnerCommentInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  width: 156px;
  height: 24px;
`;

const OwnerComment = styled.div<any>`
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: 14px;
  line-height: 24px;
  color: #777e90;
  cursor: ${(props) => (props.cursor === 'pointer' ? 'pointer' : 'default')};
`;

export default memo(CommentSubInfo);
