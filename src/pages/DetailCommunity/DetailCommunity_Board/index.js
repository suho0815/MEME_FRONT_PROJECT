/** 게시글 상세보기 페이지 */
import {StyledTitle, StyledSection, StyledButton, NavBoxTest, BoardbtnDiv} from '../../../styled'
import {BoardContent} from './BoardContent'
import {BoardComment} from './BoardComment'
import {useNavigate} from 'react-router-dom'

export const DetailCommunity_Board = () => {
  const Navigate = useNavigate()

  const BoardListOnClicked = () => {
    Navigate('/community')
  }

  const BoardDeclarationOnClicked = () => {
    Navigate('/community/declaration')
  }

  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose" bold="bold">
        Community
      </StyledTitle>
      {/* 게시글 내용 */}
      <BoardContent />
      {/* 신고, 목록 버튼 */}
      <BoardbtnDiv>
        <StyledButton onClick={BoardDeclarationOnClicked} style={{marginRight: '30px'}}>
          신고하기
        </StyledButton>
        <StyledButton onClick={BoardListOnClicked}>목록</StyledButton>
      </BoardbtnDiv>
      {/* 댓글 */}
      <BoardComment />
    </StyledSection>
  )
}
