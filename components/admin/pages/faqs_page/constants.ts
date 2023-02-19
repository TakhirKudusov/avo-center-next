import { TableHead } from '../../UI/table/types';
import * as Yup from 'yup';
import { FAQ_FORM_NAME } from './enums';
import { FAQFormValues } from './types';

const tableHead: TableHead[] = [
  {
    id: 1,
    name: 'ID',
    width: '10%',
  },
  {
    id: 2,
    name: 'Title',
    width: '20%',
  },
  {
    id: 3,
    name: 'Description',
    width: '40%',
  },
  {
    id: 4,
    name: 'Created at:',
    width: '15%',
  },
  {
    id: 5,
    name: 'Updated at:',
    width: '15%',
  },
];

const FORM_SCHEMA = Yup.object().shape({
  [FAQ_FORM_NAME.TITLE]: Yup.string().required('Field login is required'),
  [FAQ_FORM_NAME.DESCRIPTION]: Yup.string().required('Field login is required'),
});

const initialValues: FAQFormValues = {
  [FAQ_FORM_NAME.TITLE]: '',
  [FAQ_FORM_NAME.DESCRIPTION]: '',
};

export { tableHead, FORM_SCHEMA, initialValues };
