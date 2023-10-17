// 내가 작성한 댓글 컴포넌트
import {StyledDiv, StyledButton, SubTitle} from '../../../styled'
import {BoardList} from '../../DetailCommunity/BoardList'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import * as D from '../../../dummydata'

export const MyComment = () => {
  const [total, setTotal] = useState(0)
  const Navigate = useNavigate()

  const ShowMoreClicked = () => {}
  return (
    <StyledDiv alignitems="center" style={{flexDirection: 'column', paddingBottom: '30px'}}>
      <SubTitle width="80%" font="poppins" textSize="24px" padding="70px 0px 30px 0px">
        내가 작성한 댓글
      </SubTitle>
      {/* 댓글 목록 */}
      <BoardList
        id={1}
        title={D.randomTitleText()}
        write={D.randomName()}
        date={D.randomDayMonthYear()}
        heart={1}
        view={1}
      />
      {/* 댓글 목록 3개 초과 시 더보기 버튼 */}
      {total > 3 && (
        <StyledDiv justifycontents="end" width="80%" style={{marginTop: '15px'}}>
          <StyledButton onClick={ShowMoreClicked}>더보기</StyledButton>
        </StyledDiv>
      )}
    </StyledDiv>
  )
}
