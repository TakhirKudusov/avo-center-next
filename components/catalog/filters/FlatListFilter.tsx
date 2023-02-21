import { useEffect, useState } from 'react';
import { CSSProperties } from 'styled-components';
import FlatList from '../../ui-kit/FlatList';
import { ListItem } from '../../ui-kit/FlatList/types';
import { Filter, FilterBody } from './common';
import { FilterOption } from './types';

type Props = {
  filterStyles?: CSSProperties;
  options?: FilterOption[];
  onChange: (selectedOption: FilterOption) => void;
};

const FlatListFilter: React.FC<Props> = ({
  filterStyles,
  options,
  onChange,
}) => {
  const [stateOptions, setStateOptions] = useState(options);
  const [value, setValue] = useState<ListItem>();

  useEffect(() => {
    setStateOptions(options);

    const curOption = options?.find((option) => option.checked === true);

    if (
      (value && curOption && value.value !== curOption.url) ||
      (!value && curOption)
    ) {
      setValue({
        id: curOption?.id,
        value: curOption?.url,
        label: curOption?.name,
      });
    } else if (value && !curOption) {
      setValue(undefined);
    }
  }, [options]);

  const handleChange = () => (item: ListItem) => {
    const options = [...stateOptions!];
    const activeOption = options?.find((option) => option.checked);

    if (activeOption) {
      activeOption!.checked = false;
    }

    const curOption = options?.find((option) => option.url === item.value);

    if (curOption) {
      curOption.checked = true;

      setValue({
        id: curOption?.id,
        value: curOption?.url,
        label: curOption?.name,
      });
    }

    setStateOptions(options);
    onChange(curOption!);
  };

  return (
    <Filter style={filterStyles}>
      <FilterBody>
        <FlatList
          items={
            options?.map((option) => ({
              id: option.id,
              label: option.name,
              value: option.url,
            })) ?? []
          }
          onChange={handleChange()}
          value={value}
        />
      </FilterBody>
    </Filter>
  );
};

export default FlatListFilter;
