import debounce from 'lodash/debounce';
import { useCallback, useEffect, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { MultiRangeSlider } from '../../ui-kit';
import { MultiRangeSliderValue } from '../../ui-kit/MultiRangeSlider/types';
import { Filter, FilterBody, FilterTitle } from './common';

type Props = {
  title: string;
  min: number;
  max: number;
  filterStyles?: CSSProperties;
  onChange: (values: any) => void;
};

const RangeSelectionFilter: React.FC<Props> = ({
  title,
  min,
  max,
  filterStyles,
  onChange,
}) => {
  const [values, setValues] = useState({ min, max });

  useEffect(() => {
    setValues({ min, max });
  }, [min, max]);

  const handleSliderChange = (sliderValues: MultiRangeSliderValue) => {
    if (sliderValues.min !== values.min || sliderValues.max !== values.max) {
      delayedChange(sliderValues);
    }
  };

  const delayedChange = useCallback(
    debounce((values) => {
      onChange(values);
      setValues(values);
    }, 100),
    [],
  );

  return (
    <Filter style={filterStyles}>
      <FilterTitle>{title}</FilterTitle>
      <FilterBody style={{ marginTop: '0' }}>
        <MultiRangeSlider
          label={''}
          min={min!}
          max={max!}
          value={values}
          onChange={handleSliderChange}
        />
      </FilterBody>
    </Filter>
  );
};

export default RangeSelectionFilter;
