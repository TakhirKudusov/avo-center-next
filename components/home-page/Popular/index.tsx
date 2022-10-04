import styled from 'styled-components';
import { FlexContainer } from '../../common';
import DownArrowSVG from '../../../assets/svg/down-arrow.svg';
import ArrowLeftSVG from '../../../assets/svg/arrow-left.svg';
import ArrowRightSVG from '../../../assets/svg/arrow-right.svg';
import { sellers } from './constants';
import ParticipantItem from './ParticipantItem';
import Select, {
  SelectItem,
  SelectItemBackground,
  SelectItemSize,
} from '../../ui-kit/Select';

const Popular = () => {
  const dates: SelectItem[] = [
    {
      label: 'Today',
      value: '',
    },
  ];
  return (
    <PopularWrapper>
      <FlexContainer>
        <ContentContainer>
          <SectionHeader>
            <SectionTitles>
              <SectionTitle>Popular</SectionTitle>
              <SectionSelect>
                <SectionSelectTitle>Sellers</SectionSelectTitle>
                <DownArrowSVG />
              </SectionSelect>
            </SectionTitles>
            <Select
              items={dates}
              background={SelectItemBackground.White}
              size={SelectItemSize.Medium}
              style={{ width: '256px' }}
            ></Select>
          </SectionHeader>
          <Participants>
            <Arrow style={{ left: '-70px' }}>
              <ArrowLeftSVG />
            </Arrow>
            {sellers.map(({ name, avoAmount, avatar }, index) => (
              <ParticipantItem
                name={name}
                avoAmount={avoAmount}
                avatar={avatar}
                rank={index + 1}
              />
            ))}
            <Arrow style={{ right: '-70px' }}>
              <ArrowRightSVG />
            </Arrow>
          </Participants>
        </ContentContainer>
      </FlexContainer>
    </PopularWrapper>
  );
};

const PopularWrapper = styled.div`
  background: #f4f5f6;
  padding: 128px 144px;
  margin-top: 128px;
  height: 663px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitles = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #777e91;
`;

const SectionSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SectionSelectTitle = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #23262f;
`;

const Participants = styled.div`
  position: relative;
  margin-top: 64px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: 50%;
  cursor: pointer;
`;

export default Popular;
