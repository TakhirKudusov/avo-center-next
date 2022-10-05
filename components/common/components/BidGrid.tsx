import styled from 'styled-components';
import { Bid } from '../../home-page/HotBids/types';
import BidItem from './BidItem';

type Props = {
  items: Bid[];
};
const BidGrid: React.FC<Props> = ({ items }) => {
  return (
    <Grid>
      {items.map((item, index) => (
        <BidItem key={`bid-item-${index}`} bid={item} />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;
  row-gap: 24px;
`;

export default BidGrid;
