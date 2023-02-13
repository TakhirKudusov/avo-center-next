import { KeyboardEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';

import SearchSVG from '../../../assets/svg/search.svg';
import ArrowRightSVG from '../../../assets/svg/arrow-right.svg';
import { RoundButton } from '../../ui-kit';

import { SearchBarType } from './constants';
import { ICollection, INFT } from '../../../swagger';
import SearchItem from './SearchItem';
import { ProductType } from '../../../common/enums';
import React from 'react';
import {
  clearItems,
  searchItems,
} from '../../../redux/slicers/searchSlicer/searchSlicer';
import { TSearchState } from '../../../redux/slicers/searchSlicer/types';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useRouter } from 'next/router';

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
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector<TSearchState>(
    (state) => state.search,
  );
  const [searchPhrase, setSearchPhrase] = useState('');
  const router = useRouter();

  const handleChange = () => (e: any) => {
    setSearchPhrase(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/search?name=${searchPhrase}&types=nft`);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
      setSearchPhrase('');

      if (onKeyEnterDown) {
        onKeyEnterDown(event);
      }
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchPhrase) {
        dispatch(searchItems(searchPhrase));
      } else {
        dispatch(clearItems());
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchPhrase]);

  const renderSearchBarIcon = () => {
    if (!searchPhrase && type === SearchBarType.WITH_ICON) {
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

  const handleSearchItemClick = () => {
    setSearchPhrase('');
  };

  return (
    <SearchWrapper type={type}>
      <SearchInput
        type={type}
        fullSize={fullSize}
        value={searchPhrase}
        placeholder={placeholder}
        onChange={handleChange()}
        onKeyDown={handleKeyDown}
      />
      {renderSearchBarIcon()}
      <SearchDropdown>
        {loading && <ResultText>...loading</ResultText>}
        {items.length === 0 && !!searchPhrase && !loading && (
          <ResultText>No results found</ResultText>
        )}
        {!loading &&
          !!searchPhrase &&
          items.map((item, index) => {
            const nft = item as INFT;
            const collection = item as ICollection;

            return (
              <React.Fragment key={`search-item-${index}`}>
                {!!nft.type && (
                  <SearchItem
                    title={nft.name}
                    type={ProductType.NFT}
                    id={nft._id}
                    onClick={handleSearchItemClick}
                  />
                )}
                {!!collection.nftList && (
                  <SearchItem
                    title={collection.name}
                    type={ProductType.Collection}
                    id={collection._id}
                    onClick={handleSearchItemClick}
                  />
                )}
              </React.Fragment>
            );
          })}
      </SearchDropdown>
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

const SearchDropdown = styled.div`
  background: #fcfcfd;
  box-shadow: 0 9px 45px -6px rgb(31 47 70 / 12%);
  padding: 8px 8px 4px;
  position: absolute;
  width: 100%;
  margin-top: 8px;
  border-radius: 12px;
`;

const ResultText = styled.div`
  padding: 5px 10px 10px;
`;

export default SearchBar;
