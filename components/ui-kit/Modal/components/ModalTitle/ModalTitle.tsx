import styled from 'styled-components';
import RoundButton from '../../../RoundButton';
import CloseSvg from '../../../../../assets/svg/close-icon.svg';

type Props = {
  title: string;
  onClose: () => void;
};

const ModalTitle = ({ title, onClose }: Props) => {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <RoundButton
        onClick={onClose}
        icon={<CloseSvg color="rgba(255, 255, 255, 0.7)" />}
        style={{ background: 'none' }}
      />
    </TitleWrapper>
  );
};

export default ModalTitle;

const TitleWrapper = styled.div`
  font-family: 'Nasalization';
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
`;
