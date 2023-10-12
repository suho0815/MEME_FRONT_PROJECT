import styled from 'styled-components'
import theme from '../theme'

/** 게시글 목록 리스트 틀 */
export const BoardLists = styled.div`
  width: 90%;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin: auto;
  background-color: white;
`

export const BoardListsDiv = styled.div`
  font-size: 16px;
  font-family: poppins;
  font-weight: bold;
  color: ${props => props.color};
  width: ${props => props.width};
  height: 100%;
  display: flex;
  justify-content: ${props => (props.iscenter ? 'center' : 'left')};
  align-items: center;
`
