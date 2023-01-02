import styled from 'styled-components';
import {
  Divider,
  MultiRangeSlider,
  RoundButton,
  Select,
  SelectItemBackground,
  SelectItemSize,
} from '../../../components/ui-kit';
import ResetFilterSvg from '../../../assets/svg/reset-filter.svg';

import { colors, networks } from './constants';

const Filters = () => {
  return (
    <FiltersWrapper>
      <FiltersLabel>Filters</FiltersLabel>
      <MultiRangeSlider label="price range" step={0.01} min={0.01} max={10} />
      <SliderDivider />
      <OpenLabel>Open</OpenLabel>
      <OpenFiltersWrapper>
        <Select
          items={colors}
          background={SelectItemBackground.White}
          size={SelectItemSize.Medium}
          style={{ width: '256px' }}
          placeholder="colors"
        />
        <Select
          items={networks}
          background={SelectItemBackground.White}
          size={SelectItemSize.Medium}
          style={{ width: '256px' }}
          placeholder="networks"
        />
      </OpenFiltersWrapper>
      <StyledDivider />
      <ResetFilterWrapper>
        <StyledRoundButton id="reset-filter" icon={<ResetFilterSvg />} />
        <ResetButtonName htmlFor="reset-filter">Reset filter</ResetButtonName>
      </ResetFilterWrapper>
    </FiltersWrapper>
  );
};

const FiltersWrapper = styled.div`
  width: 256px;
  margin-bottom: 10px;
`;

const FiltersLabel = styled.h2`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.01em;
  color: #353945;
  margin-bottom: 20px;
`;

const SliderDivider = styled(Divider)`
  margin: 0 0 24px 0;
`;

const OpenLabel = styled.div`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #b1b5c4;
  margin-bottom: 12px;
`;

const OpenFiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledDivider = styled(Divider)`
  margin: 24px 0;
`;

const ResetFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    svg > path {
      fill: rgba(35, 38, 47, 0.7);
    }

    label {
      color: rgba(35, 38, 47, 0.7);
    }
  }
`;

const StyledRoundButton = styled(RoundButton)`
  padding: 0;
  width: 20px;
  height: 20px;
  border: none;
`;

const ResetButtonName = styled.label`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #23262f;
  cursor: pointer;
`;

export default Filters;
