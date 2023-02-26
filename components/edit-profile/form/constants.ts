import * as Yup from 'yup';
import { VerificationsKeys } from '../common/constants';

export const VERIFY_FORM_SCHEMA = Yup.object().shape({
  [VerificationsKeys.ID_PHOTO]: Yup.array()
    .length(1)
    .required('Field idPhoto is required'),
  [VerificationsKeys.FACE_PHOTO]: Yup.array()
    .length(1)
    .required('Field facePhoto is required'),
});
