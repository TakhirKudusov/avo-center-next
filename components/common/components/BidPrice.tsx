import styled from 'styled-components';

type Props = {
  value: number;
};
const BidPrice: React.FC<Props> = ({ value }) => {
  return <BidPriceWrapper>{value} AVO</BidPriceWrapper>;
};

const BidPriceWrapper = styled.div`
  margin-top: 2px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #45b36b;
  border: 2px solid #45b36b;
  border-radius: 4px;
  padding: 5px 8px;
`;

export default BidPrice;
