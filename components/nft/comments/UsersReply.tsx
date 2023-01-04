import React, { memo } from 'react';
import styled from 'styled-components';
import OwnerAvatar from './OwnerAvatar';
import { CommentsData, OwnerMessage } from '../common/types';
import UserComment from './UserComment';
import { devices } from '../../../common/constants';

type Props = {
  commentsData: OwnerMessage[];
};

const UsersReply: React.FC<Props> = ({ commentsData }) => {
  return (
    <>
      {commentsData?.map((el, i) => {
        return (
          <ReplyContainer key={el.name + i}>
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
