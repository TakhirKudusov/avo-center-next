import { TableContent } from '../../UI/table/types';
import { FC, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Divider } from '../../../ui-kit';

type Props = {
  modalData: any;
};
const UsersInfo: FC<Props> = ({ modalData }) => {
  return (
    <Wrapper>
      <InfoText>
        <b>ID:</b> {modalData?.id}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Username:</b> {modalData?.username}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Role:</b> {modalData?.role}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Public address:</b> {modalData?.publicAddress}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Followers:</b> {modalData?.followers}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Nonce:</b> {modalData?.nonce}
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

export default memo(UsersInfo);
