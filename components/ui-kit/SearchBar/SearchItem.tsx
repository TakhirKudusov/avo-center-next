import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import styled from 'styled-components';
import { ProductType } from '../../../common/enums';

type Props = {
  id: string;
  title: string;
  type: ProductType;
  onClick?: () => void;
};
const SearchItem: FC<Props> = ({ id, title, type, onClick }) => {
  const router = useRouter();

  const handleSearchItemClick = () => {
    switch (type) {
      case ProductType.Bid:
        router.push(`/bids/${id}`);
        break;
      case ProductType.NFT:
        router.push(`/nfts/${id}`);
        break;
      case ProductType.Collection:
        router.push(`/collections/${id}`);
        break;
      default:
        break;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <SearchItemWrapper onClick={handleSearchItemClick}>
      <SearchItemImage />
      <SearchItemTitle>{title}</SearchItemTitle>
    </SearchItemWrapper>
  );
};

const SearchItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #a2c7661f;
  }
`;

const SearchItemImage = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: #ccc;
`;

const SearchItemTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #000;
`;

export default memo(SearchItem);
