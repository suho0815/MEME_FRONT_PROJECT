/** 신고 페이지 */
import {BoardbtnDiv, StyledButton, StyledDiv, Title, NavBoxTest, CommentInput, BoardContentWrite} from '../../../styled'
import {useNavigate} from 'react-router-dom'
import {useRef} from 'react'

export const Community_Declaration = () => {
  const Navigate = useNavigate()
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  const SubmitBtnClicked = () => {
    console.log(titleRef.current.value)
    console.log(contentRef.current.value)
  }
  const CancleBtnClicked = () => {
    Navigate(-1)
  }
  return (
    <section>
      <NavBoxTest></NavBoxTest>
      <div style={{display: 'flex', width: '50%', height: '150px', alignItems: 'center', justifyContent: 'center'}}>
        <Title font="RedRose" margin="" padding="6px 12px">
          신고하기
        </Title>
      </div>
      <StyledDiv width="70%" style={{flexDirection: 'column'}}>
        <CommentInput placeholder="신고 제목 입력하셈!" />
        <select style={{marginTop: '25px'}}>
          <option>부적절한 단어 사용</option>
        </select>
        <BoardContentWrite ref={contentRef} placeholder="신고 내용 입력하셈!" style={{marginTop: '25px'}} />
      </StyledDiv>
      <BoardbtnDiv justifycontents="center">
        <StyledButton color="white" background="#7929FF" style={{marginRight: '30px'}} onClick={SubmitBtnClicked}>
          신고하기
        </StyledButton>
        <StyledButton onClick={CancleBtnClicked}>취소하기</StyledButton>
      </BoardbtnDiv>
    </section>
  )
}
