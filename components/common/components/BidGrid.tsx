import styled from 'styled-components';
import { Bid } from '../../home-page/HotBids/types';
import BidItem from './BidItem';

type Props = {
  items: Bid[];
  elemPerRow?: number;
};
const BidGrid: React.FC<Props> = ({ items, elemPerRow = 4 }) => {
  return (
    <Grid elemPerRow={elemPerRow}>
      {items.map((item, index) => (
        <BidItem key={`bid-item-${index}`} bid={item} />
      ))}
    </Grid>
  );
};

const Grid = styled.div<{ elemPerRow: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ elemPerRow }) =>
    `repeat(${elemPerRow || 4}, 1fr)`};
  column-gap: 32px;
  row-gap: 24px;
`;

export default BidGrid;
