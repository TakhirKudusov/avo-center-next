import * as Yup from 'yup';
import { LoginTitle } from './enums';

const FORM_SCHEMA = Yup.object().shape({
  [LoginTitle.LOGIN]: Yup.string().required('Field login is required'),
  [LoginTitle.PASSWORD]: Yup.string().required('Field password is required'),
});

export { FORM_SCHEMA };
