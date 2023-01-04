import styled from 'styled-components';
import { FlexContainer } from '../../common';
import DownArrowSVG from '../../../assets/svg/down-arrow.svg';
import ArrowLeftSVG from '../../../assets/svg/arrow-left.svg';
import ArrowRightSVG from '../../../assets/svg/arrow-right.svg';
import { sellers } from './constants';
import ParticipantItem from './ParticipantItem';
import {
  SelectItemBackground,
  SelectItemSize,
} from '../../ui-kit/Select/enums';
import { SelectItem } from '../../ui-kit/Select/types';
import Select from '../../ui-kit/Select';
import { ReactSlick } from '../../ui-kit';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { devices } from '../../../common/constants';

const Popular = () => {
  const dates: SelectItem[] = [
    {
      label: 'Today',
      value: '1',
    },
    {
      label: 'Tomorrow',
      value: '2',
    },
  ];

  const { screenSize, slidesPerRow } = useAdaptiveSlider(5);

  return (
    <PopularWrapper>
      <ContentContainer>
        <SectionHeader>
          <SectionTitles>
            <SectionTitle>Popular</SectionTitle>
            <SectionSelect>
              <SectionSelectTitle>Sellers</SectionSelectTitle>
              <DownArrowSVG />
            </SectionSelect>
          </SectionTitles>
          <TimeframeWrapper>
            <SelectLabel>Timeframe</SelectLabel>
            <Select
              items={dates}
              background={SelectItemBackground.White}
              size={SelectItemSize.Medium}
              style={{ width: '256px' }}
            />
          </TimeframeWrapper>
        </SectionHeader>
        <ReactSlick screenSize={screenSize} slidesPerRow={slidesPerRow}>
          {sellers.map(({ name, avoAmount, avatar }, index) => (
            <ParticipantItem
              key={`participant-item-${index}`}
              name={name}
              avoAmount={avoAmount}
              avatar={avatar}
              rank={index + 1}
            />
          ))}
        </ReactSlick>
      </ContentContainer>
    </PopularWrapper>
  );
};

const PopularWrapper = styled.div`
  background: #f4f5f6;
  padding: 128px 144px;
  margin-top: 128px;
  height: 663px;

  @media (${devices.mobile}) {
    padding: 64px 15px;
    margin-top: 64px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${devices.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
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
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #23262f;

  @media (${devices.mobile}) {
    display: block;
  }
`;

const TimeframeWrapper = styled.div`
  @media (${devices.mobile}) {
    margin-top: 24px;
  }
`;

const SelectLabel = styled.div`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #b1b5c4;
  margin-bottom: 12px;
`;

// const Participants = styled.div`
//   position: relative;
//   margin-top: 64px;
//   display: flex;
//   align-items: flex-start;
//   gap: 32px;
// `;

export default Popular;
