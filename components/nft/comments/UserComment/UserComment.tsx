import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import { getPastTime } from '../../common/helpers';
import { devices } from '../../../../common/constants';

import TextAreaBlock from './TextAreaBlock';
import OwnerCommentInfo from './OwnerCommentInfo';
import { IComment } from '../../../../swagger';

type Props = {
  commentsData: IComment;
  withTextArea: boolean;
  withReply: boolean;
  onCommentLike: (commentId: string) => void;
  onCommentUnlike: (commentId: string) => void;
  userId?: string;
  parentCommentId?: string;
};

const UserComment: React.FC<Props> = ({
  userId,
  parentCommentId,
  commentsData,
  withTextArea,
  withReply,
  onCommentLike,
  onCommentUnlike,
}) => {
  const timeFromPost = getPastTime(commentsData?.createdAt);
  const [isReplyPressed, setisReplyPressed] = useState(false);

  const handlePressReply = () => setisReplyPressed((prev) => !prev);

  return (
    <CurrentOwnerBlock>
      <OwnerCommentsDataWrapper>
        <CreatorsName>{commentsData?.author?.username}</CreatorsName>
        <CreatorCommentText>{commentsData?.message}</CreatorCommentText>
        <OwnerCommentInfo
          commentId={commentsData._id}
          userId={userId}
          withReply={withReply}
          time={timeFromPost}
          likes={commentsData?.likes}
          onPressReply={handlePressReply}
          onCommentLike={onCommentLike}
          onCommentUnlike={onCommentUnlike}
        />
        {withTextArea && (
          <TextAreaBlock
            parentCommentId={parentCommentId}
            isReplyPressed={isReplyPressed}
          />
        )}
      </OwnerCommentsDataWrapper>
    </CurrentOwnerBlock>
  );
};

const CurrentOwnerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  height: 'auto';

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
    height: auto;
  }
`;

const OwnerCommentsDataWrapper = styled.div`
  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    height: auto;
    width: 100%;
  }
`;

const CreatorsName = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 24px;
  width: 628px;
  height: 24px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
  margin-bottom: 6px;

  @media (${devices.tablet}) {
    width: auto;
    height: auto;
  }

  @media (${devices.mobile}) {
    width: auto;
    height: auto;
  }
`;

const CreatorCommentText = styled.div`
  width: 998px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 6px;
  color: #23262f;

  @media (${devices.tablet}) {
    width: 100%;
    height: auto;
  }

  @media (${devices.mobile}) {
    width: 100%;
    height: auto;
  }
`;

export default memo(UserComment);
