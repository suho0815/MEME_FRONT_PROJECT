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

// 게시글 제목 세부 틀 (+ 댓글 List 세부 틀)
export const BoardTitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #bb99cd;
  border-bottom: 1px solid #bb99cd;
  background-color: white;
  margin: auto;
  width: ${props => props.width};
`
export const BoardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-bottom: 15px;
`

export const BoardContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 25px;
`

// 신고, 목록 버튼을 감싸는 Div
export const BoardbtnDiv = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'end'};
  align-items: center;
  padding: 50px;
  width: 100%;
`
// 댓글 관련 style
export const CommentInputDiv = styled.div`
  display: flex;
  width: 90%;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin: auto;
  background-color: white;
`
// 댓글 등록 버튼 (+ 게시글 작성 input)
export const CommentInput = styled.input`
  width: ${props => props.width || '60%'};
  height: ${props => props.height || '50px'};
  border-radius: 5px;
  border: 1px solid #bb99cd;
  background-color: ${props => props.background || '#f5f5f5'};
  padding: 10px;
  font-family: ${props => props.font || 'poppins'};
  font-size: ${props => props.textSize};
`

// 게시글 작성 관련 style
export const BoardContentWrite = styled.textarea`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  border: 1px solid #bb99cd;
  background-color: ${props => props.background || '#f5f5f5'};
  padding: 10px;
  resize: none;
  font-family: ${props => props.font || 'poppins'};
  font-size: ${props => props.textSize};
`
