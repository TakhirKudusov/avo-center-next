import { TableHead } from '../../UI/table/types';
import styled from 'styled-components';
import Image from 'next/image';
const tableHead: TableHead[] = [
  {
    id: 1,
    name: 'Verification ID',
    width: '15%',
  },
  {
    id: 2,
    name: 'Photo ID',
    width: '15%',
  },
  {
    id: 3,
    name: 'Face photo',
    width: '20%',
    render: (data: string) => (
      <ImageContainer>
        <Image
          src={'/' + data}
          alt="User photo"
          loading="lazy"
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
    ),
  },
  {
    id: 4,
    name: 'User ID',
    width: '10%',
  },
  {
    id: 5,
    name: 'Status',
    width: '10%',
  },
  {
    id: 6,
    name: 'Created at:',
    width: '15%',
  },
  {
    id: 7,
    name: 'Updated at:',
    width: '15%',
  },
];

const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export { tableHead };
