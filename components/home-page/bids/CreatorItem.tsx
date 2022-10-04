import styled from 'styled-components';

type Props = {
  name: string;
  avatar: string;
  uploadNumber: number;
  avoAmount: number;
};
const CreatorItem: React.FC<Props> = ({
  name,
  avatar,
  uploadNumber,
  avoAmount,
}) => {
  return (
    <CreatorItemWrapper>
      <CreatorAvatar style={{ backgroundImage: `url(/images/${avatar})` }}>
        <CreatorUploadNumber>{uploadNumber}</CreatorUploadNumber>
      </CreatorAvatar>
      <CreatorItemInfo>
        <CreatorName>{name}</CreatorName>
        <CreatorAvoAmount>
          <CreatorAvoAmountValue>{avoAmount}</CreatorAvoAmountValue>
          <CreatorAvoAmountCurrency>AVO</CreatorAvoAmountCurrency>
        </CreatorAvoAmount>
      </CreatorItemInfo>
    </CreatorItemWrapper>
  );
};

const CreatorItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #e6e8ec;
  padding: 24px 0;

  &:last-of-type {
    border-bottom: none;
  }
`;

const CreatorAvatar = styled.div`
  width: 56px;
  height: 56px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 50%;
`;

const CreatorUploadNumber = styled.div`
  position: absolute;
  top: -4px;
  left: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  background: #23262f;
  border: 2px solid #fff;
  border-radius: 50%;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #fcfcfd;
`;

const CreatorItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CreatorName = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #23262f;
`;

const CreatorAvoAmount = styled.div`
  display: flex;
  gap: 3px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`;

const CreatorAvoAmountValue = styled.span`
  font-weight: 600;
  color: #353945;
`;

const CreatorAvoAmountCurrency = styled.span`
  color: #777e91;
`;

export default CreatorItem;
