import styled from 'styled-components'
import theme from '../theme'

// 게시글 리스트 관련 style

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

export const Total = styled.div`
  width: 90%;
  padding: 22px;
  text-align: left;
  margin: auto;
  font-size: 16px;
  position: relative;
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

// 게시글 상세보기 관련 style
export const BoardFrame = styled.div`
  margin: auto;
  margin-top: 70px;
  width: 90%;
`

export const BoardTitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #bb99cd;
  border-bottom: 1px solid #bb99cd;
  background-color: white;
`
export const BoardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const BoardContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 25px;
`
