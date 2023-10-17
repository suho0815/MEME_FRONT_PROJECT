import React from 'react'
import { SearchContainer, SearchInput, SearchButton } from '../../../styled/page'
import SearchBT from '../../../assets/searchBT.svg'
export const DetailSearch_txt = () => {

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="상세 검색" />
      <SearchButton type="submit">
        <img src={SearchBT}  width="18" height="18" alt="search" ></img>
      </SearchButton>
    </SearchContainer>
  )
}