import * as Yup from 'yup';
import { ReplyCommentKeys } from './constants';

export const FORM_SCHEMA = Yup.object().shape({
  [ReplyCommentKeys.REPLY_COMMENT]: Yup.string().required(
    'Field replyComment is required',
  ),
});
