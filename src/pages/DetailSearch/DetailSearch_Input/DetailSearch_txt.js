import React from 'react'
import {SearchContainer, SearchInput, SearchButton, StyledSearchIcon} from '../../../styled/page'
import { ReactComponent as SearchIcon } from '../../../assets/SearchIcon.svg';

export const DetailSearch_txt = () => {

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="상세 검색" />
      <SearchButton type="submit">
        <StyledSearchIcon />
      </SearchButton>
    </SearchContainer>
    )
}