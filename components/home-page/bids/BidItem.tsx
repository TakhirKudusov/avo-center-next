import styled from 'styled-components';
import BidPrice from '../../common/components/BidPrice';
import Button from '../../ui-kit/Button/Button';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';

type Props = {
  image: string;
  name: string;
  price: number;
  number: number;
  creatorAvatar: string;
  black?: boolean;
};
const BidItem: React.FC<Props> = ({
  image,
  name,
  price,
  number,
  creatorAvatar,
  black,
}) => {
  return (
    <BidItemWrapper>
      <BidItemPhoto style={{ backgroundImage: `url(/images/${image})` }} />
      <BidItemBody>
        <BidItemTitle>{name}</BidItemTitle>
        <BidItemInfo>
          <CreatorAvatar
            style={{ backgroundImage: `url(/images/${creatorAvatar})` }}
          />
          <BidPrice value={price} />
          <BidLength>1 of {number}</BidLength>
        </BidItemInfo>
        <Button
          style={{ width: 'fit-content' }}
          type={ButtonType.Primary}
          size={ButtonSize.Small}
        >
          Place a bid
        </Button>
      </BidItemBody>
    </BidItemWrapper>
  );
};

const BidItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const BidItemPhoto = styled.div`
  width: 160px;
  height: 148px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
`;

const BidItemBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const BidItemTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  max-width: 167px;
`;

const BidItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: 8px;
  margin-bottom: 12px;
`;

const CreatorAvatar = styled.div`
  width: 24px;
  height: 24px;
  background-size: cover;
  background-position: center;
`;

const BidLength = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
`;

export default BidItem;
