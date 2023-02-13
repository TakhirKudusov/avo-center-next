import { useEffect, useState } from 'react';
import { Select } from '../../ui-kit';
import { SelectItem } from '../../ui-kit/Select/types';
import { Filter, FilterBody, FilterTitle } from './common';
import { FilterOption } from './types';

type Props = {
  title: string;
  options?: FilterOption[];
  onChange: (selectedOption: FilterOption) => void;
};

const SingleSelectionFilter: React.FC<Props> = ({
  title,
  options,
  onChange,
}) => {
  const [stateOptions, setStateOptions] = useState(options);
  const [value, setValue] = useState<SelectItem>();

  useEffect(() => {
    setStateOptions(options);

    const curOption = options?.find((option) => option.checked === true);

    if (
      (value && curOption && value.value !== curOption.url) ||
      (!value && curOption)
    ) {
      setValue({
        value: curOption?.url,
        label: curOption?.name,
      });
    } else if (value && !curOption) {
      setValue(undefined);
    }
  }, [options]);

  const handleChange = () => (url: string) => {
    const options = [...stateOptions!];
    const activeOption = options?.find((option) => option.checked);

    if (activeOption) {
      activeOption!.checked = false;
    }

    const curOption = options?.find((option) => option.url === url);

    if (curOption) {
      curOption.checked = true;

      setValue({
        value: curOption?.url,
        label: curOption?.name,
      });
    }

    setStateOptions(options);
    onChange(curOption!);
  };

  return (
    <Filter>
      <FilterTitle>{title}</FilterTitle>
      <FilterBody>
        <Select
          items={options?.map((option) => ({
            value: option.url,
            label: option.name,
          }))}
          onChange={handleChange()}
          value={value}
        ></Select>
      </FilterBody>
    </Filter>
  );
};

export default SingleSelectionFilter;
