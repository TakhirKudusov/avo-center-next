import { FieldInputProps, FormikProps } from 'formik';
import { memo } from 'react';
import styled from 'styled-components';
import useConnectForm from '../useConnectForm';
import Tooltip from './components/Tooltip';

import { useRangeSlider } from './useRangeSlider';

type Props = {
  label: string;
  form?: FormikProps<any>;
  field?: FieldInputProps<any>;
  hasSchema?: boolean;
  step?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};

const RangeSlider = ({
  label,
  form,
  field,
  hasSchema,
  min = 0,
  max = 10,
  step = 0.1,
  onChange,
}: Props) => {
  const { value, handleValueChange, getBackgroundSize } = useRangeSlider(max);

  const currentThumbPosition = (value / max) * 256;

  useConnectForm(value, form, field, hasSchema, onChange);

  return (
    <SliderWrapper>
      <Label>{label}</Label>
      <SliderContainer>
        <Tooltip
          currentThumbPosition={currentThumbPosition}
          content={<ContentWrapper>{value} ETH</ContentWrapper>}
        >
          <SliderInput
            type="range"
            min={min}
            max={max}
            step={step}
            onChange={handleValueChange}
            style={getBackgroundSize()}
            value={value}
          />
        </Tooltip>
        <Slider>
          <SliderLeftValue>{`${min} ETH`}</SliderLeftValue>
          <SliderRightValue>{`${max} ETH`}</SliderRightValue>
        </Slider>
      </SliderContainer>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  padding-bottom: 23px;
`;

const SliderContainer = styled.div`
  margin: 10px 0 23px;
`;

const Label = styled.div`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #b1b5c4;
`;

const SliderInput = styled.input`
  -webkit-appearance: none;
  height: 8px;
  background: #e6e8ec;
  border-radius: 5px;
  background-image: linear-gradient(#3772ff, #3772ff);
  background-repeat: no-repeat;
  width: 256px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #3772ff;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    border: 4px solid #fcfcfd;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

const Slider = styled.div`
  position: relative;
  width: 256px;
`;

const SliderLeftValue = styled.div`
  position: absolute;
  color: #23262f;
  font-size: 12px;
  margin-top: 10px;
  font-weight: 600;
`;

const SliderRightValue = styled.div`
  position: absolute;
  color: #23262f;
  font-size: 12px;
  margin-top: 10px;
  right: 0;
  font-weight: 600;
`;

const ContentWrapper = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #fff;
`;

export default memo(RangeSlider);
