import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  imageUrl: string;
  title: string;
  amount: number;
};

const ExploreItem: FC<Props> = ({ imageUrl, title, amount }) => {
  return (
    <ExploreItemContainer>
      <ExporeImage imageUrl={imageUrl} />
      <ExploreItemInfo>
        <ExploreItemTitle>{title}</ExploreItemTitle>
        <ExploreItemSubtitle>{amount} items</ExploreItemSubtitle>
      </ExploreItemInfo>
    </ExploreItemContainer>
  );
};

const ExploreItemContainer = styled.div`
  min-width: 256px;
  height: 64px;
  border: 1px solid #e6e8ec;
  border-radius: 76px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 24px 24px -16px rgba(15, 15, 15, 0.2);
  }
`;

const ExporeImage = styled.div<{ imageUrl: string }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const ExploreItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExploreItemTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #141416;
`;

const ExploreItemSubtitle = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

export default ExploreItem;
