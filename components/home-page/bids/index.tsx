import styled from 'styled-components';
import Button from '../../ui-kit/Button/Button';
import BidItem from './BidItem';
import { bids, creators } from './constants';
import CreatorItem from './CreatorItem';
import MainBid from './MainBid';
import RightArrowSVG from '../../../assets/svg/right-arrow.svg';
import { ButtonSize } from '../../ui-kit/Button/enums';

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
      <CreatorListWrapper>
        <CreatorsCaption>Latest upload from creators 🔥</CreatorsCaption>
        <CreatorList>
          {creators.map(({ name, avatar, uploadNumber, avoAmount }, index) => (
            <CreatorItem
              key={`creator-item-${index}`}
              name={name}
              avatar={avatar}
              uploadNumber={uploadNumber}
              avoAmount={avoAmount}
            />
          ))}
        </CreatorList>
        {/* TODO: remove if unnecessary */}
        {/* <Button
          size={ButtonSize.Medium}
          style={{ width: 'fit-content', marginTop: '10px' }}
          round={true}
        >
          <span>Discover more</span>
          <RightArrowSVG style={{ marginLeft: '12px' }} />
        </Button> */}
      </CreatorListWrapper>
    </BidsWrapper>
  );
};

const BidsWrapper = styled.div`
  margin-top: 136px;
  display: flex;
  width: 100%;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    /* width: 100%; */
  }

  @media (max-width: 415px) {
    display: block;
  }
`;

const BidsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CreatorListWrapper = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const CreatorList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left: 1px solid #e6e8ec;

  @media (max-width: 1024px) {
    flex-direction: row;
    padding-left: 0;
    border-left: none;
  }

  @media (max-width: 415px) {
    overflow: scroll;
  }
`;

const CreatorsCaption = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
  text-align: center;

  @media (max-width: 1024px) {
    text-align: left;
  }

  @media (max-width: 415px) {
    text-align: left;
    margin-top: 40px;
  }
`;

export default Bids;
