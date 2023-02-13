import { TableHead } from '../../UI/table/types';

const tableHead: TableHead[] = [
  {
    id: 1,
    name: 'ID',
    width: '10%',
    configurable: false,
  },
  {
    id: 2,
    name: 'Title',
    width: '20%',
    configurable: true,
  },
  {
    id: 3,
    name: 'Description',
    width: '40%',
    configurable: true,
  },
  {
    id: 4,
    name: 'Created at:',
    width: '15%',
    configurable: false,
  },
  {
    id: 5,
    name: 'Updated at:',
    width: '15%',
    configurable: false,
  },
];

export { tableHead };
