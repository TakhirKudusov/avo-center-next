import styled from 'styled-components';
import WinnerSVG from '../../../assets/svg/winner.svg';
import DonutSVG from '../../../assets/svg/donut.svg';
import LightningSVG from '../../../assets/svg/lightning.svg';
import DoughnutSVG from '../../../assets/svg/doughnut.svg';

type Props = {
  rank: number;
};
const ParticipantRank: React.FC<Props> = ({ rank }) => {
  const getColor = (rank: number) => {
    switch (rank) {
      case 1:
        return '#3772FF';

      case 2:
        return '#9757D7';

      case 3:
        return '#45B36B';

      case 4:
        return '#23262F';

      default:
        return '#777E91';
    }
  };
  return (
    <Rank style={{ backgroundColor: getColor(rank) }}>
      {rank === 1 && <WinnerSVG />}
      {rank === 2 && <DonutSVG />}
      {rank === 3 && <LightningSVG />}
      {rank === 4 && <DoughnutSVG />}
      {rank > 4 && <DoughnutSVG />}
      <RankValue>#{rank}</RankValue>
    </Rank>
  );
};

const Rank = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 8px;
  gap: 5px;
  background: red;
  border-radius: 24px;
`;

const RankValue = styled.div`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #fcfcfd;
`;

export default ParticipantRank;
