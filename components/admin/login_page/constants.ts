import * as Yup from 'yup';
import { LoginTitle } from './enums';

const FORM_SCHEMA = Yup.object().shape({
  [LoginTitle.USERNAME]: Yup.string().required('Field username is required'),
  [LoginTitle.PASSWORD]: Yup.string().required('Field password is required'),
});

export { FORM_SCHEMA };
