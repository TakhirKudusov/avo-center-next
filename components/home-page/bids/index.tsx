import styled from 'styled-components';
import { ButtonSize } from '../../common/enums/buttonSize.enum';
import Button from '../../ui-kit/Button';
import BidItem from './BidItem';
import { bids, creators } from './constants';
import CreatorItem from './CreatorItem';
import MainBid from './MainBid';
import RightArrowSVG from '../../../assets/svg/right-arrow.svg';

const Bids = () => {
  return (
    <BidsWrapper>
      <MainBid />
      <BidsList>
        {bids.map(({ image, name, price, number, creatorAvatar }, index) => (
          <BidItem
            key={`bid-item-${index}`}
            image={image}
            name={name}
            price={price}
            number={number}
            creatorAvatar={creatorAvatar}
          />
        ))}
      </BidsList>
      <CreatorList>
        <CreatorsCaption>Latest upload from creators 🔥</CreatorsCaption>
        {creators.map(({ name, avatar, uploadNumber, avoAmount }, index) => (
          <CreatorItem
            key={`creator-item-${index}`}
            name={name}
            avatar={avatar}
            uploadNumber={uploadNumber}
            avoAmount={avoAmount}
          />
        ))}
        <Button
          size={ButtonSize.Medium}
          style={{ width: 'fit-content', marginTop: '10px' }}
          round={true}
        >
          <span>Discover more</span>
          <RightArrowSVG style={{ marginLeft: '12px' }} />
        </Button>
      </CreatorList>
    </BidsWrapper>
  );
};

const BidsWrapper = styled.div`
  margin-top: 136px;
  display: flex;
  width: 100%;
  gap: 32px;
`;

const BidsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CreatorList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left: 1px solid #e6e8ec;
`;

const CreatorsCaption = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

export default Bids;
