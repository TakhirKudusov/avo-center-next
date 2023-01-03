import UpSideCorner from '../../../assets/svg/up-side-corner.svg';
import styled from 'styled-components';

const ListingHeader = () => {
  return (
    <Header>
      <HeaderText>Listings</HeaderText>
      <CornerButton />
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 0 8px;
  gap: 480px;
  border-top: 1px solid #e6e8ec;
  text-align: start;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }
`;

const HeaderText = styled.p`
  width: 60px;
  height: 16px;
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #23262f;
  margin-top: 0;
  margin-left: 5px;
  margin-bottom: 0;
`;

const CornerButton = styled(UpSideCorner)`
  position: relative;
  top: -10px;
`;

export default ListingHeader;
