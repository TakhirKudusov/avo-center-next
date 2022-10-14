import { memo, useEffect } from 'react';
import { CommentsData } from '../common/types';
import styled from 'styled-components';
import CornerDownRightSVG from '../../../assets/svg/corner-down-right.svg';
import RightSideCornerSVG from '../../../assets/svg/right-side-corner.svg';
import OwnerAvatar from './OwnerAvatar';
import OwnerCommentInfo from './OwnerCommentInfo';
import { getPastTime } from '../common/helpers';
import TextAreaBlock from './TextAreaBlock';

type Props = {
  commentsData: CommentsData;
};

const Comments: React.FC<Props> = ({ commentsData }) => {
  const timeFromPost = getPastTime(commentsData?.currentOwner?.time);

  return (
    <BlockWrapper>
      <Header>Comments</Header>
      <CommentsWrapper>
        <OwnerAvatar image={commentsData.currentOwner?.image} />
        <CommentsBlock>
          <CurrentOwnerBlock>
            <OwnerCommentsDataWrapper>
              <CreatorsName>{commentsData?.currentOwner?.name}</CreatorsName>
              <CreatorCommentText>
                {commentsData?.currentOwner?.message}
              </CreatorCommentText>
              <OwnerCommentInfo
                time={timeFromPost}
                likes={commentsData.currentOwner.likes}
              />
              <TextAreaBlock />
            </OwnerCommentsDataWrapper>
          </CurrentOwnerBlock>
        </CommentsBlock>
      </CommentsWrapper>
    </BlockWrapper>
  );
};

const BlockWrapper = styled.div`
  width: 1120px;
  height: 604px;
  margin-top: 100px;
`;

const Header = styled.div`
  display: block;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 48px;
  height: 48px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #23262f;
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  width: 1120px;
  height: 508px;
`;

const CommentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 1056px;
  height: 508px;
`;

const CurrentOwnerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 1056px;
  height: 136px;
`;

const OwnerCommentsDataWrapper = styled.div`
  width: 1056px;
  height: 84px;
`;

const CreatorsName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 24px;
  width: 628px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
  margin-bottom: 6px;
`;

const CreatorCommentText = styled.div`
  width: 1056px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 6px;
  color: #23262f;
`;

export default memo(Comments);
