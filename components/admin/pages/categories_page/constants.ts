import { TableHead } from '../../UI/table/types';

const tableHead: TableHead[] = [
  {
    id: 1,
    name: 'ID',
    width: '20%',
    configurable: false,
  },
  {
    id: 2,
    name: 'Name',
    width: '30%',
    configurable: true,
  },
  {
    id: 3,
    name: 'Created at:',
    width: '25%',
    configurable: false,
  },
  {
    id: 4,
    name: 'Updated at:',
    width: '25%',
    configurable: false,
  },
];

export { tableHead };
