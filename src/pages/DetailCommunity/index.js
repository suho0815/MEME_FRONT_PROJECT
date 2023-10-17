/** 커뮤니티 게시판 */
import {StyledTitle, StyledSection, StyledButton, NavBoxTest, Total} from '../../styled'
import {BoardList} from './BoardList'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {Pagenation} from '../../components'
import * as D from '../../dummydata'

export const DetailCommunity = () => {
  const [total, setTotal] = useState(50)
  const [page, setPage] = useState(1)
  const limit = 10
  const offset = (page - 1) * limit

  const Navigate = useNavigate()

  // 글쓰기 페이지로 이동
  const BoardPostBtnCliked = () => {
    Navigate('/community/write')
  }

  // 게시글 상세보기 페이지로 이동
  const BoardListCliked = () => {}

  return (
    <StyledSection height="100vh">
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
          noticeid={1}
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
      <Pagenation total={total} limit={limit} page={page} setPage={setPage} />
    </StyledSection>
  )
}
