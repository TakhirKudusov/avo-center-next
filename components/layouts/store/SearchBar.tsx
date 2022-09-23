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
`;

export default SearchBar;
