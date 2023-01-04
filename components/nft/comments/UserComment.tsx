import styled from 'styled-components';
import OwnerCommentInfo from './OwnerCommentInfo';
import TextAreaBlock from './TextAreaBlock';
import { getPastTime } from '../common/helpers';
import { CommentsData, OwnerMessage } from '../common/types';
import { memo } from 'react';
import { devices } from '../../../common/constants';

type Props = {
  commentsData: OwnerMessage;
  withTextArea: boolean;
  withReply: boolean;
};

const UserComment: React.FC<Props> = ({
  commentsData,
  withTextArea,
  withReply,
}) => {
  const timeFromPost = getPastTime(commentsData?.time);

  return (
    <CurrentOwnerBlock>
      <OwnerCommentsDataWrapper>
        <CreatorsName>{commentsData?.name}</CreatorsName>
        <CreatorCommentText>{commentsData?.message}</CreatorCommentText>
        <OwnerCommentInfo
          withReply={withReply}
          time={timeFromPost}
          likes={commentsData?.likes}
        />
        {withTextArea && <TextAreaBlock />}
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
  height: 136px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
    height: auto;
  }
`;

const OwnerCommentsDataWrapper = styled.div`
  height: 84px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    height: auto;
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
  height: 24px;
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
