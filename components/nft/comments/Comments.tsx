import { memo } from 'react';
import { CommentsData } from '../common/types';
import styled from 'styled-components';
import OwnerAvatar from './OwnerAvatar';
import HideAnswers from './HideAnswers';
import UserComment from './UserComment';
import UsersReply from './UsersReply';

type Props = {
  commentsData: CommentsData;
};

const Comments: React.FC<Props> = ({ commentsData }) => {
  return (
    <BlockWrapper>
      <Header>Comments</Header>
      <CommentsWrapper>
        <OwnerAvatar image={commentsData.currentOwner?.image} />
        <CommentsBlock>
          {commentsData.currentOwner && (
            <UserComment
              commentsData={commentsData?.currentOwner}
              withTextArea={true}
              withReply={true}
            />
          )}
          <HideAnswers commentsQuantity={commentsData.commentsQuantity} />
          {commentsData.oldOwners && (
            <UsersReply commentsData={commentsData.oldOwners} />
          )}
        </CommentsBlock>
      </CommentsWrapper>
    </BlockWrapper>
  );
};

const BlockWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 96px;
`;

const Header = styled.div`
  display: block;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 48px;
  height: 48px;
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #23262f;
`;

const CommentsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
`;

const CommentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 24px;
  height: 508px;
`;

export default memo(Comments);
