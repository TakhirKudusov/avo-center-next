import styled from 'styled-components';
import RoundButton from '../../../RoundButton';
import CloseSvg from '../../../../../assets/svg/close-icon.svg';
import { devices } from '../../../../../common/constants';

type Props = {
  title: string;
  onClose: () => void;
  dangerStyle?: boolean;
};

const ModalTitle = ({ title, dangerStyle = false, onClose }: Props) => {
  return (
    <TitleWrapper>
      <Title dangerStyle={dangerStyle}>{title}</Title>
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

const Title = styled.span<{ dangerStyle: boolean }>`
  font-size: 32px;
  font-weight: 400;
  color: ${({ dangerStyle }) => (dangerStyle ? '#ED1F2B' : '#ffffff')};
  line-height: 40px;

  @media (${devices.mobile}) {
    font-size: 24px;
  }
`;
