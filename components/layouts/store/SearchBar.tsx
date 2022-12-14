import { useState } from 'react';
import styled from 'styled-components';
import SearchSVG from '../../../assets/svg/search.svg';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const handleChange = () => (e: any) => {
    setValue(e.target.value);
  };

  return (
    <SearchWrapper>
      <SearchInput
        value={value}
        placeholder="Search"
        onChange={handleChange()}
      />
      {!value && <SearchSVG />}
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 10px;
    right: 13px;
  }
`;
const SearchInput = styled.input`
  font-family: 'Poppins', sans-serif;
  width: 256px;
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  padding: 10px 16px;
  box-sizing: border-box;
  font-size: 12px;
  outline: none;

  &:focus {
    border-color: rgba(51, 51, 51, 0.5);
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
  }
`;

export default SearchBar;
