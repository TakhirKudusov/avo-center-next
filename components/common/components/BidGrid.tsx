import styled from 'styled-components';
import { screenSizes } from '../../../common/constants';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { IBid, INFT } from '../../../swagger';
import { ReactSlick } from '../../ui-kit';
import BidItem from './BidItem';
import { NftItem } from './NftItem';

type Props = {
  items: Array<IBid | INFT>;
  elemPerRow?: number;
};

const BidGrid: React.FC<Props> = ({ items, elemPerRow = 4 }) => {
  const { screenSize, slidesPerRow } = useAdaptiveSlider(elemPerRow);

  return (
    <>
      {screenSize > screenSizes.tablet ? (
        <Grid elemPerRow={elemPerRow}>
          {items.map((item, index) =>
            (item as IBid).nft ? (
              <BidItem key={`bid-item-${index}`} item={item as IBid} />
            ) : (
              <NftItem key={`bid-item-${index}`} item={item as INFT} />
            ),
          )}
        </Grid>
      ) : (
        <ReactSlick screenSize={screenSize} slidesPerRow={slidesPerRow}>
          {items.map((item, index) =>
            (item as IBid).nft ? (
              <BidItem key={`bid-item-${index}`} item={item as IBid} />
            ) : (
              <NftItem key={`bid-item-${index}`} item={item as INFT} />
            ),
          )}
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
  height: fit-content;
`;

export default BidGrid;
