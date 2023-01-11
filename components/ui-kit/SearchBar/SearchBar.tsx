import { KeyboardEventHandler, useState } from 'react';
import styled from 'styled-components';

import SearchSVG from '../../../assets/svg/search.svg';
import ArrowRightSVG from '../../../assets/svg/arrow-right.svg';
import { RoundButton } from '../../ui-kit';

import { SearchBarType } from './constants';

type Props = {
  type: SearchBarType;
  placeholder?: string;
  fullSize?: boolean;
  onKeyEnterDown?: KeyboardEventHandler<HTMLInputElement>;
};

const SearchBar: React.FC<Props> = ({
  placeholder = 'Search',
  type,
  fullSize,
  onKeyEnterDown,
}) => {
  const [value, setValue] = useState('');

  const handleChange = () => (e: any) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    console.log('search!', value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      handleSearch();

      if (onKeyEnterDown) {
        onKeyEnterDown(event);
      }
    }
  };

  const renderSearchBarIcon = () => {
    if (!value && type === SearchBarType.WITH_ICON) {
      return <SearchSVG />;
    }
    if (type === SearchBarType.WITH_BUTTON) {
      return (
        <StyledRoundButton
          icon={<ArrowRightSVG color="#FCFCFD" />}
          onClick={handleSearch}
        />
      );
    }
  };

  return (
    <SearchWrapper type={type}>
      <SearchInput
        type={type}
        fullSize={fullSize}
        value={value}
        placeholder={placeholder}
        onChange={handleChange()}
        onKeyDown={handleKeyDown}
      />
      {renderSearchBarIcon()}
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div<{ type: SearchBarType }>`
  position: relative;

  svg {
    position: ${({ type }) =>
      type === SearchBarType.WITH_ICON ? 'absolute' : 'static'};
    top: 10px;
    right: 13px;
  }
`;
const SearchInput = styled.input<{ type: SearchBarType; fullSize?: boolean }>`
  font-family: 'Poppins', sans-serif;
  width: ${({ fullSize }) => (fullSize ? '100%' : '256px')};
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: ${({ type }) =>
    type === SearchBarType.WITH_ICON ? '8px' : '90px'};
  padding: 10px 16px;
  box-sizing: border-box;
  font-size: 12px;
  outline: none;

  &:focus {
    border-color: rgba(51, 51, 51, 0.5);
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
  }
`;

const StyledRoundButton = styled(RoundButton)`
  position: absolute;
  top: 4px;
  right: 8px;
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: #333333;
`;

export default SearchBar;
