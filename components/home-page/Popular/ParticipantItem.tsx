import styled from 'styled-components';
import ParticipantRank from './ParticipantRank';
import SquarePlusSVG from '../../../assets/svg/square-plus.svg';
import ArrowExpandSVG from '../../../assets/svg/arrow-expand.svg';
import VerifiedSVG from '../../../assets/svg/verified.svg';

type Props = {
  name: string;
  avoAmount: number;
  avatar: string;
  rank: number;
};

const ParticipantItem: React.FC<Props> = ({
  name,
  avoAmount,
  avatar,
  rank,
}) => {
  return (
    <ParticipantWrapper>
      <ParticipantContent>
        <ParticipantHeader>
          <ParticipantRank rank={rank} />
          {/* <ActionBtns>
            <ActionBtn>
              <SquarePlusSVG />
            </ActionBtn>
            <ActionBtn>
              <ArrowExpandSVG />
            </ActionBtn>
          </ActionBtns> */}
        </ParticipantHeader>
        <ParticipantBody>
          <ParticipantAvatar
            style={{ backgroundImage: `url(/images/${avatar})` }}
          >
            <ParticipantVerifiedIcon>
              <VerifiedSVG />
            </ParticipantVerifiedIcon>
          </ParticipantAvatar>
          <ParticipantName>{name}</ParticipantName>
          <ParticipantAvoAmount>
            <ParticipantAvoAmountValue>{avoAmount}</ParticipantAvoAmountValue>
            <ParticipantAvoAmountCurrency>AVO</ParticipantAvoAmountCurrency>
          </ParticipantAvoAmount>
        </ParticipantBody>
      </ParticipantContent>
    </ParticipantWrapper>
  );
};

const ParticipantWrapper = styled.div`
  height: 263px;
  display: inline-flex;

  &:nth-of-type(n) {
    margin-right: 32px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const ParticipantContent = styled.div`
  padding: 24px;
  width: 198.4px;
  height: 247px;
  background: #fcfcfd;
  border-radius: 16px;

  &:hover {
    box-shadow: 0 64px 64px -48px rgba(31, 47, 70, 0.12);
    height: 263px;

    & > div:last-child > div:first-child {
      width: 80px;
      height: 80px;
    }
  }
`;

const ParticipantHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #e6e8ec;
`;

// const ActionBtns = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 7px;
// `;

// const ActionBtn = styled.button`
//   display: flex;
//   align-items: center;
//   background: none;
//   padding: 0;
//   border: none;
//   cursor: pointer;
// `;

const ParticipantBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
`;

const ParticipantAvatar = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

const ParticipantVerifiedIcon = styled.div`
  position: absolute;
  bottom: -10px;
  right: -4px;
`;

const ParticipantName = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-top: 15px;
  color: #23262f;
`;

const ParticipantAvoAmount = styled.div`
  display: flex;
  gap: 3px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`;

const ParticipantAvoAmountValue = styled.span`
  font-weight: 600;
  color: #353945;
`;

const ParticipantAvoAmountCurrency = styled.span`
  color: #777e91;
`;

export default ParticipantItem;
