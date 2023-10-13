/** 커뮤니티 게시판 */
import {StyledTitle, StyledSection, StyledButton, NavBoxTest, Total} from '../../styled'
import {BoardList} from './BoardList'
import {useNavigate} from 'react-router-dom'
import * as D from '../../dummydata'

export const DetailCommunity = () => {
  const Navigate = useNavigate()

  // 글쓰기 페이지로 이동
  const BoardPostBtnCliked = () => {
    Navigate('/community/write')
  }

  // 게시글 상세보기 페이지로 이동
  const BoardListCliked = () => {}

  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">Community</StyledTitle>
      <Total>
        Total : -
        <StyledButton
          color="white"
          background="#7929FF"
          onClick={BoardPostBtnCliked}
          style={{position: 'absolute', right: '0px', bottom: '11px'}}>
          post
        </StyledButton>
      </Total>

      <div style={{marginBottom: '55px'}}>
        {/* 공지사항 */}
        <BoardList
          title={D.randomTitleText()}
          write={D.randomName()}
          date={D.randomRelativeDate()}
          heart={1}
          view={1}
        />
      </div>
      <div>
        {/* 자유 게시글 */}
        <BoardList
          id={1}
          title={D.randomTitleText()}
          write={D.randomName()}
          date={D.randomDayMonthYear()}
          heart={1}
          view={1}
        />
      </div>
      {/* 페이지네이션 */}
    </StyledSection>
  )
}
