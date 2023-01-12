import * as Yup from 'yup';
import { LoginTitle } from './enums';

const FORM_SCHEMA = Yup.object().shape({
  [LoginTitle.USERNAME]: Yup.string()
    .required('Field username is required')
    .matches(/^admin$/gim, 'Enter a correct username'),
  [LoginTitle.PASSWORD]: Yup.string()
    .required('Field password is required')
    .matches(/^12345$/gim, 'Enter a correct password'),
});

export { FORM_SCHEMA };
