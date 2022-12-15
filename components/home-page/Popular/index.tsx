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
          <Select
            items={dates}
            background={SelectItemBackground.White}
            size={SelectItemSize.Medium}
            style={{ width: '256px' }}
          ></Select>
        </SectionHeader>
        <ReactSlick slidesPerRow={5}>
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
`;

const Participants = styled.div`
  position: relative;
  margin-top: 64px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

export default Popular;
