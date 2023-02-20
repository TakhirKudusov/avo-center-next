import { FC, memo } from 'react';
import { Nft } from '../../../../redux/APIs/types';
import styled from 'styled-components';
import { Divider } from '../../../ui-kit';

type Props = {
  data: Nft;
};
const NFTInfo: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <InfoText>
        <b>ID:</b> {data?.id}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Name:</b> {data?.name}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Description:</b> {data?.description}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Creator ID:</b> {data?.creatorId}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Type:</b> {data?.type}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Total:</b> {data?.total}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Available:</b> {data?.available}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Is on sale:</b> {data?.isOnSale}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Likes</b> {data?.likesLength}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Royalties:</b> {data?.royalties}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Sale price:</b> {data?.salePrice}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Owner ID:</b> {data?.ownerId}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Updated at:</b> {data?.updatedAt}
      </InfoText>
    </Wrapper>
  );
};

const InfoText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export default memo(NFTInfo);
