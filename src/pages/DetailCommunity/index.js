/** 커뮤니티 게시판 */
import {StyledTitle, StyledSection, StyledButton, NavBoxTest, Total} from '../../styled'
import {BoardList} from './BoardList'
import * as D from '../../dummydata'

export const DetailCommunity = () => {
  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">Community</StyledTitle>
      <Total>
        Total : -
        <StyledButton color="white" background="#7929FF" style={{position: 'absolute', right: '0px', bottom: '11px'}}>
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
