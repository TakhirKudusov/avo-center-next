import styled from 'styled-components';
import { screenSizes } from '../../../common/constants';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { Bid } from '../../home-page/HotBids/types';
import { ReactSlick } from '../../ui-kit';
import BidItem from './BidItem';

type Props = {
  items: Bid[];
  elemPerRow?: number;
};
const BidGrid: React.FC<Props> = ({ items, elemPerRow = 4 }) => {
  const { screenSize, slidesPerRow } = useAdaptiveSlider(elemPerRow);

  return (
    <>
      {screenSize > screenSizes.tablet ? (
        <Grid elemPerRow={elemPerRow}>
          {items.map((item, index) => (
            <BidItem key={`bid-item-${index}`} bid={item} />
          ))}
        </Grid>
      ) : (
        <ReactSlick screenSize={screenSize} slidesPerRow={slidesPerRow}>
          {items.map((item, index) => (
            <BidItem key={`bid-item-${index}`} bid={item} />
          ))}
        </ReactSlick>
      )}
    </>
  );
};

const Grid = styled.div<{ elemPerRow: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ elemPerRow }) =>
    `repeat(${elemPerRow || 4}, 1fr)`};
  row-gap: 24px;
`;

export default BidGrid;
