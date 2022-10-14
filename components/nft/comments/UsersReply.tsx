import React, { memo } from 'react';
import styled from 'styled-components';
import OwnerAvatar from './OwnerAvatar';
import { CommentsData, OwnerMessage } from '../common/types';
import UserComment from './UserComment';

type Props = {
  commentsData: OwnerMessage[];
};

const UsersReply: React.FC<Props> = ({ commentsData }) => {
  return (
    <>
      {commentsData?.map((el, i) => {
        return (
          <ReplyContainer key={i}>
            <OwnerAvatar image={el.image} />
            <UserComment
              commentsData={el}
              withTextArea={false}
              withReply={false}
            />
          </ReplyContainer>
        );
      })}
    </>
  );
};

const ReplyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  height: 84px;
`;

export default memo(UsersReply);
