import { TableHead } from '../../UI/table/types';
import { FIELD_VALUES_KEYS } from './enums';
import * as Yup from 'yup';

const tableHead: TableHead[] = [
  {
    id: 1,
    name: 'ID',
    width: '20%',
  },
  {
    id: 2,
    name: 'Name',
    width: '30%',
  },
  {
    id: 3,
    name: 'Created at:',
    width: '25%',
  },
  {
    id: 4,
    name: 'Updated at:',
    width: '25%',
  },
];

const FORM_SCHEMA = Yup.object().shape({
  [FIELD_VALUES_KEYS.NAME]: Yup.string().required('Field name is required'),
});

const initialValues = {
  [FIELD_VALUES_KEYS.NAME]: '',
};

export { tableHead, FORM_SCHEMA, initialValues };
