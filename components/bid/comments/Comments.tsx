import { memo, useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { FormikProps } from 'formik';
import { useRouter } from 'next/router';

import { devices } from '../../../common/constants';
import { ConnectWalletContext } from '../NFT/context';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { TAuthState } from '../../../redux/types';

import {
  commentNft,
  likeCommentNft,
  unlikeCommentNft,
} from '../../../redux/slicers/nftsSlicer/nftSlicer';
import { TBidsState } from '../../../redux/slicers/bidsSlicer/types';
import { FORM_SCHEMA } from './schema';
import { likeBid, setBid } from '../../../redux/slicers/bidsSlicer/bidsSlicer';
import { IComment, INFT } from '../../../swagger';

import HideAnswers from './HideAnswers';
import UserComment from './UserComment';
import UsersReply from './UsersReply';
import OwnerAvatar from './OwnerAvatar';
import CommentField from './components';
import { CommentKeys } from './constants';

const Comments: React.FC = () => {
  const router = useRouter();

  const { bid } = useAppSelector<TBidsState>((state) => state.bids);
  const { user } = useAppSelector<TAuthState>((state) => state.auth);
  const [isAnswersHidden, setIsAnswersHidden] = useState<{
    [key: string]: boolean;
  }>({});

  const { setOpenConnectWallet } = useContext(ConnectWalletContext);

  const dispatch = useAppDispatch();
  const formRef = useRef<FormikProps<any>>(null);

  const comments = bid?.nft?.comments;

  const handleCommentLike = async (commentId: string) => {
    const result = await dispatch(likeCommentNft(commentId));

    if (result.payload) {
      dispatch(likeBid(result.payload as IComment));
    }
  };

  const handleCommentUnlike = async (commentId: string) => {
    const result = await dispatch(unlikeCommentNft(commentId));

    if (result.payload) {
      dispatch(likeBid(result.payload as IComment));
    }
  };

  const handleAnwserToggle = (commentId: string) => () =>
    setIsAnswersHidden((prev) => {
      if (!!prev[commentId]) {
        prev[commentId] = false;
      } else {
        prev[commentId] = true;
      }

      return { ...prev };
    });

  const handleMesageSend = async (values: any) => {
    if (!user) {
      setOpenConnectWallet(true);
    }

    if (bid?.nft._id) {
      const result = await dispatch(
        commentNft({
          nftId: bid?.nft._id,
          body: { message: values.comment, parent: '' },
        }),
      );

      if (result.payload) {
        dispatch(setBid(result.payload as INFT));

        formRef.current?.setFieldValue(CommentKeys.COMMENT, '');
        setTimeout(() =>
          formRef.current?.setFieldError(CommentKeys.COMMENT, undefined),
        );
      }
    }
  };

  const handleCreatorClick = (id: string) => () => {
    router.push(`/profile/${id}`);
  };

  return (
    <BlockWrapper>
      <Header>Comments</Header>
      <CommentsWrapper>
        {comments?.map((comment) => (
          <CommentWrapper key={comment._id}>
            <OwnerAvatar
              image={comment?.author?.avatar}
              onClick={handleCreatorClick(comment.author._id)}
            />
            <CommentsBlock>
              {comment && (
                <UserComment
                  userId={user?.id}
                  parentCommentId={comment._id}
                  commentsData={comment}
                  withTextArea={true}
                  withReply={true}
                  onCommentLike={handleCommentLike}
                  onCommentUnlike={handleCommentUnlike}
                />
              )}
              {!!comment.comments?.length && (
                <HideAnswers
                  isAnswersHidden={!!isAnswersHidden[comment._id]}
                  onAnwserToggle={handleAnwserToggle(comment._id)}
                  commentsQuantity={String(comment.comments.length)}
                />
              )}
              {!!isAnswersHidden[comment._id] && (
                <UsersReply
                  userId={user?.id}
                  parentCommentId={comment._id}
                  commentsData={comment.comments}
                  onCommentLike={handleCommentLike}
                  onCommentUnlike={handleCommentUnlike}
                />
              )}
            </CommentsBlock>
          </CommentWrapper>
        ))}
      </CommentsWrapper>
      <CommentField
        name="comment"
        placeholder="Comment..."
        formSchema={FORM_SCHEMA}
        formRef={formRef}
        handleMesageSend={handleMesageSend}
      />
    </BlockWrapper>
  );
};

const BlockWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 96px;

  @media (${devices.tablet}) {
    padding-left: 80px;
    width: 100vw;
  }

  @media (${devices.mobile}) {
    width: auto;
  }
`;

const Header = styled.div`
  display: block;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 48px;
  height: 48px;
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #fcfcfd;

  @media (${devices.mobile}) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 64px;
`;

const CommentWrapper = styled.div`
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
  gap: 12px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
    height: auto;
  }
`;

export default memo(Comments);
