import styled from 'styled-components';

type Props = {
  value: number;
};
const BidPrice: React.FC<Props> = ({ value }) => {
  return (
    <BidPriceWrapper>{value ? `${value} AVO` : 'Not on sale'}</BidPriceWrapper>
  );
};

export const BidPriceWrapper = styled.div`
  font-family: 'Montserrat';
  margin-top: 2px;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #45b36b;
  border: 2px solid #45b36b;
  border-radius: 4px;
  padding: 5px 8px;
`;

export default BidPrice;
