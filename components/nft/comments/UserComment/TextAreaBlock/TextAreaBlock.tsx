import { FormikProps } from 'formik';
import React, { useContext, useRef } from 'react';
import styled from 'styled-components';

import CornerDownRightSVG from '../../../../../assets/svg/corner-down-right.svg';
import RightSideCornerSVG from '../../../../../assets/svg/right-side-corner.svg';
import { devices } from '../../../../../common/constants';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { TNftsState } from '../../../../../redux/slicers/nftsSlicer/types';
import {
  commentNft,
  setNft,
} from '../../../../../redux/slicers/nftsSlicer/nftSlicer';
import { TAuthState } from '../../../../../redux/types';
import { INFT } from '../../../../../swagger';
import { ConnectWalletContext } from '../../../NFT/context';
import CommentField from '../../components/CommentField';
import { ReplyCommentKeys } from './constants';

import { FORM_SCHEMA } from './schema';

type Props = {
  isReplyPressed: boolean;
  parentCommentId?: string;
};

const TextAreaBlock: React.FC<Props> = ({
  parentCommentId,
  isReplyPressed,
}) => {
  const dispatch = useAppDispatch();

  const { nft } = useAppSelector<TNftsState>((state) => state.nfts);
  const { user } = useAppSelector<TAuthState>((state) => state.auth);
  const formRef = useRef<FormikProps<any>>(null);

  const { setOpenConnectWallet } = useContext(ConnectWalletContext);

  const handleMesageSend = async (values: any) => {
    if (!user) {
      setOpenConnectWallet(true);
    }

    if (nft?._id && parentCommentId) {
      const result = await dispatch(
        commentNft({
          nftId: nft?._id,
          body: { message: values.replyComment, parent: parentCommentId },
        }),
      );

      if (result.payload) {
        //TODO: replace with nft
        dispatch(setNft(result.payload as INFT));

        formRef.current?.setFieldValue(ReplyCommentKeys.REPLY_COMMENT, '');
        setTimeout(() =>
          formRef.current?.setFieldError(
            ReplyCommentKeys.REPLY_COMMENT,
            undefined,
          ),
        );
      }
    }
  };

  return (
    <TextAreaWrapper hasFullHeight={isReplyPressed}>
      {isReplyPressed && (
        <>
          <SendMessageButtonWrapper>
            <CornerDownRightSVG />
            <RightSideCornerSVG />
          </SendMessageButtonWrapper>
          <CommentField
            name="replyComment"
            placeholder="Answer..."
            formSchema={FORM_SCHEMA}
            formRef={formRef}
            handleMesageSend={handleMesageSend}
          />
        </>
      )}
    </TextAreaWrapper>
  );
};

const TextAreaWrapper = styled.div<{ hasFullHeight: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
  gap: 6px;
  width: 1056px;
  height: ${({ hasFullHeight }) => (hasFullHeight ? 'auto' : '0')};

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const SendMessageButtonWrapper = styled.div`
  width: 26px;
  height: 26px;
  & :first-child {
    position: relative;
    left: 16.67%;
    right: 16.67%;
    top: -20.33%;
    bottom: 37.5%;
  }
  & :last-child {
    position: relative;
    right: 5%;
    top: 0%;
    bottom: 16.67%;
  }
`;

export default TextAreaBlock;
