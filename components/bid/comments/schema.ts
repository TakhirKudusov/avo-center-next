import * as Yup from 'yup';
import { CommentKeys } from './constants';

export const FORM_SCHEMA = Yup.object().shape({
  [CommentKeys.COMMENT]: Yup.string().required('Field comment is required'),
});
