import styled from 'styled-components'
import theme from '../theme'
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';

export const StyledSearchIcon = styled(SearchIcon)`
    fill: #BB99CD;
  `
export const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid ${theme.borderColor}; /* 테마에서 색상 가져오기 */
`

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
`