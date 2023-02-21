import { FieldInputProps, FormikProps } from 'formik';
import React, { useCallback, useEffect, useState, useRef, memo } from 'react';
import styled from 'styled-components';
import useConnectForm from '../useConnectForm';
import { MultiRangeSliderValue } from './types';

type Props = {
  label?: string;
  value?: MultiRangeSliderValue;
  min: number;
  max: number;
  form?: FormikProps<any>;
  field?: FieldInputProps<any>;
  hasSchema?: boolean;
  step?: number;
  onChange?: (value: MultiRangeSliderValue) => void;
};

const MultiRangeSlider = ({
  label,
  value,
  form,
  field,
  hasSchema,
  min,
  max,
  step = 0.1,
  onChange,
}: Props) => {
  const [minVal, setMinVal] = useState(value ? value.min : min);
  const [maxVal, setMaxVal] = useState(value ? value.max : max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement | null>(null);

  const sliderValue = { min: minVal, max: maxVal };

  useConnectForm(sliderValue, form, field, hasSchema, onChange);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  const handleMinValChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = Math.min(+event.target.value, maxVal - 0.1);

    setMinVal(value);
    minValRef.current = value;
  };

  const handleMaxValChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = Math.max(+event.target.value, minVal + 0.1);

    setMaxVal(value);
    maxValRef.current = value;
  };

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Container>
        <ThumbLeft
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={handleMinValChange}
          style={{ zIndex: minVal > max - 1 ? '5' : '' }}
        />
        <ThumbRight
          type="range"
          min={min}
          step={step}
          max={max}
          value={maxVal}
          onChange={handleMaxValChange}
        />
        <Slider>
          <SliderTrack />
          <SliderRange ref={range} />
          <SliderLeftValue>{`${minVal} AVO`}</SliderLeftValue>
          <SliderRightValue>{`${maxVal} AVO`}</SliderRightValue>
        </Slider>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const Label = styled.div`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #b1b5c4;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
  width: 100%;
  padding-right: 7px;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
`;

const SliderTrack = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 8px;
  background-color: #e6e8ec;
  width: 100%;
  z-index: 1;
  top: -3px;
`;

const SliderRange = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 8px;
  background-color: #3772ff;
  z-index: 2;
  top: -3px;
`;

const SliderLeftValue = styled.div`
  position: absolute;
  color: #23262f;
  font-size: 12px;
  margin-top: 20px;
  font-weight: 600;
`;

const SliderRightValue = styled.div`
  position: absolute;
  color: #23262f;
  font-size: 12px;
  margin-top: 20px;
  right: 0;
  font-weight: 600;
`;

const Thumb = styled.input`
  position: absolute;
  height: 0;
  width: 100%;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  pointer-events: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #3772ff;
    cursor: pointer;
    pointer-events: all;
    box-shadow: 0 0 2px 0 #555;
    border: 4px solid #fcfcfd;
  }
`;

const ThumbLeft = styled(Thumb)`
  z-index: 3;
`;

const ThumbRight = styled(Thumb)`
  z-index: 4;
`;

export default memo(MultiRangeSlider);
