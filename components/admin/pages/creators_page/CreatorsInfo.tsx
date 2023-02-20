import styled from 'styled-components';
import { Divider } from '../../../ui-kit';
import { FC, memo } from 'react';

type Props = {
  modalData: any;
};
const CreatorsInfo: FC<Props> = ({ modalData }) => {
  return (
    <Wrapper>
      <InfoText>
        <b>ID:</b> {modalData?.id}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Sum:</b> {modalData?.sum}
      </InfoText>
      <Divider />
      <InfoText>
        <b>Creator ID:</b> {modalData?.creatorId}
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

export default memo(CreatorsInfo);
