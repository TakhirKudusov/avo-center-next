import styled from 'styled-components';
import { ContentContainer, FlexContainer } from '../../common';
import Button from '../../ui-kit/Button/Button';
import FlatList from '../../ui-kit/FlatList';
import {
  SelectItemBackground,
  SelectItemSize,
} from '../../ui-kit/Select/enums';
import { ListItem } from '../../ui-kit/FlatList/types';
import CloseSVG from '../../../assets/svg/close.svg';
import { BID_LIST, GENRES, PERIODS, SORT_CONFIG_LIST } from './constants';
import BidGrid from '../../common/components/BidGrid';
import Select from '../../ui-kit/Select';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';
import { MultiRangeSlider } from '../../ui-kit';

const Discover = () => {
  const handleGenreChange = (item: ListItem) => {
    console.log(item);
  };

  return (
    <DiscoverWrapper id="discover">
      <FlexContainer>
        <ContentContainer>
          <SectionTitle>Discover</SectionTitle>
          <FilterRow>
            <Select
              items={PERIODS}
              background={SelectItemBackground.White}
              size={SelectItemSize.Medium}
              style={{ width: '180px' }}
            />
            <FlatList items={GENRES} onChange={handleGenreChange} />
            <Button size={ButtonSize.Large} btnType={ButtonType.Secondary}>
              <FilterBtnContent>
                Filter
                <CloseSVG />
              </FilterBtnContent>
            </Button>
          </FilterRow>
          <SortRow>
            {SORT_CONFIG_LIST.map((sortConfig, index) => (
              <SortItem key={`sort-config-${index}`}>
                <SortItemLabel>{sortConfig.label}</SortItemLabel>
                <Select
                  items={sortConfig.items}
                  background={SelectItemBackground.White}
                  size={SelectItemSize.Medium}
                  style={{ width: '256px' }}
                ></Select>
              </SortItem>
            ))}
            <SortItem>
              <MultiRangeSlider
                label="price range"
                step={0.01}
                min={0.01}
                max={10}
              />
            </SortItem>
          </SortRow>
          <BidGrid items={BID_LIST} />
          <ButtonWrapper>
            <Button size={ButtonSize.Medium} round={true} loading={true}>
              Load more
            </Button>
          </ButtonWrapper>
        </ContentContainer>
      </FlexContainer>
    </DiscoverWrapper>
  );
};

const DiscoverWrapper = styled.div`
  background: #fcfcfd;
  padding: 128px 0;
`;

const SectionTitle = styled.div`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #23262f;
`;

const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e6e8ec;
`;

const FilterBtnContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SortRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  padding-bottom: 32px;
`;

const SortItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SortItemLabel = styled.div`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #b1b5c4;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  justify-content: center;
`;

export default Discover;
