/**  게시글 쓰기 페이지 */
import {
  StyledTitle,
  StyledSection,
  StyledButton,
  NavBoxTest,
  StyledDiv,
  CommentInput,
  BoardContentWrite,
  BoardbtnDiv
} from '../../../styled'
import {useNavigate} from 'react-router-dom'

export const DetailCommunity_write = () => {
  const Navigate = useNavigate()

  const SubmitBtnClicked = () => {}
  const CancleBtnClicked = () => {
    Navigate(-1)
  }

  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">Community</StyledTitle>

      <StyledDiv width="70%" alignItems="left" style={{flexDirection: 'column'}}>
        <CommentInput
          width="40%"
          placeholder="게시글 제목 입력하셈!"
          style={{marginTop: '25px', marginBottom: '25px'}}
        />
        <StyledButton color="white" font="poppins" background="#7929FF">
          이미지 첨부
        </StyledButton>
        <BoardContentWrite placeholder="게시글 내용 입력하셈!" style={{marginTop: '25px'}} />
      </StyledDiv>
      <BoardbtnDiv justifyContent="center">
        <StyledButton color="" background="" style={{marginRight: '30px'}}>
          등록하기
        </StyledButton>
        <StyledButton>취소하기</StyledButton>
      </BoardbtnDiv>
    </StyledSection>
  )
}
