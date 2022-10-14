import styled from 'styled-components';

type Props = {
  likes: string;
  time: string | undefined;
};

const OwnerCommentInfo: React.FC<Props> = ({ likes, time }) => {
  return (
    <OwnerCommentInfoWrapper>
      <OwnerCommentInfoBlock>
        <OwnerComment weight={'400'}>{time}</OwnerComment>
        <OwnerComment weight={'400'}>Like: {likes}</OwnerComment>
        <OwnerComment weight={'700'}>Reply</OwnerComment>
      </OwnerCommentInfoBlock>
    </OwnerCommentInfoWrapper>
  );
};

const OwnerCommentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  width: 1056px;
  height: 24px;
`;

const OwnerCommentInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 155px;
  height: 24px;
`;

const OwnerComment = styled.div<any>`
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: 14px;
  line-height: 24px;
  color: #777e90;
`;

export default OwnerCommentInfo;
