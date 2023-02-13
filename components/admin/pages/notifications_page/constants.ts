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
    width: '15%',
    configurable: true,
  },
  {
    id: 3,
    name: 'Message',
    width: '15%',
    configurable: true,
  },
  {
    id: 4,
    name: 'Image',
    width: '15%',
    configurable: true,
  },
  {
    id: 5,
    name: 'User',
    width: '15%',
    configurable: false,
  },
  {
    id: 6,
    name: 'Created at:',
    width: '15%',
    configurable: false,
  },
  {
    id: 7,
    name: 'Updated at:',
    width: '15%',
    configurable: false,
  },
];

export { tableHead };
