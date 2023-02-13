import { TableHead } from '../../UI/table/types';

const tableHead: TableHead[] = [
  {
    id: 1,
    name: 'Verification ID',
    width: '15%',
    configurable: false,
  },
  {
    id: 2,
    name: 'Message',
    width: '20%',
    configurable: true,
  },
  {
    id: 3,
    name: 'Creator',
    width: '20%',
    configurable: false,
  },
  {
    id: 4,
    name: 'NFT',
    width: '15%',
    configurable: false,
  },
  {
    id: 5,
    name: 'Created at:',
    width: '15%',
    configurable: false,
  },
  {
    id: 6,
    name: 'Updated at:',
    width: '15%',
    configurable: false,
  },
];

export { tableHead };
