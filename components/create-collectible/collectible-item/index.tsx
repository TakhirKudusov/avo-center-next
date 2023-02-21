import styled from 'styled-components';
import { devices } from '../../../common/constants';
import { getImageUrl } from '../../../common/helpers/getImageUrl.helper';
import { INFT } from '../../../swagger';

type Props = {
  bid: INFT;
};
const CollectibleItem: React.FC<Props> = ({ bid }) => {
  const { name, total, available, file } = bid;

  return (
    <BidWrapper>
      <BidImage style={{ backgroundImage: `url(${file})` }}></BidImage>
      <BidBody>
        <BidInfo>
          <BidInfoRow>
            <BidName>{name}</BidName>
            {/* <BidNetwork>
              <BidNetworkImage
                style={{ backgroundImage: `url(/images/${network?.image})` }}
              />
              <BidNetworkName>{network?.name}</BidNetworkName>
            </BidNetwork> */}
          </BidInfoRow>
          <BidInfoRow style={{ gap: '24px', justifyContent: 'space-between' }}>
            <BidFeature>
              <BidFeatureCaption>Total:</BidFeatureCaption>
              <BidFeatureValue>{total}</BidFeatureValue>
            </BidFeature>
            <BidFeature>
              <BidFeatureCaption>Royalties:</BidFeatureCaption>
              <BidFeatureValue>{available}</BidFeatureValue>
            </BidFeature>
          </BidInfoRow>
        </BidInfo>
        <BidFooter>
          {/* <BidPrice value={avoAmonut} /> */}
          Not on sale
        </BidFooter>
      </BidBody>
    </BidWrapper>
  );
};

const BidWrapper = styled.div`
  width: 352px;
  min-width: 352px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 14px 39px -2px rgb(31 47 70 / 12%);
  overflow: hidden;
  height: 452px;

  @media (${devices.mobile}) {
    display: none;
  }
`;

const BidImage = styled.div`
  width: 352px;
  height: 300px;
  background: #ccc;
  background-size: cover;
  background-position: center;
`;

const BidBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 24px 16px;
`;

const BidInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  border-bottom: 1px solid #e6e8ec;
`;

const BidInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BidName = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #23262f;
`;

const BidFeature = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const BidFeatureCaption = styled.div`
  color: rgba(119, 126, 144, 0.6);
`;

const BidFeatureValue = styled.div`
  color: #777e90;
`;

const BidFooter = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BidNetwork = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 8px;
  background: #f4f5f6;
  border-radius: 4px;
  gap: 6px;
`;

const BidNetworkImage = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ccc;
  background-size: cover;
  background-position: center;
`;

const BidNetworkName = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
`;

export default CollectibleItem;
