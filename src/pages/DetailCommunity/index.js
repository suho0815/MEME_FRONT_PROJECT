/** 커뮤니티 게시판 */
import {StyledTitle, StyledSection, StyledButton, NavBoxTest} from '../../styled'
import {BoardList} from './BoardList'
import * as D from '../../dummydata'

export const DetailCommunity = () => {
  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">Community</StyledTitle>
      <div>Total : -</div>
      <div>
        <BoardList
          title={D.randomTitleText()}
          write={D.randomName()}
          date={D.randomRelativeDate()}
          heart={1}
          view={1}
        />
      </div>
      <div>
        <BoardList
          id={1}
          title={D.randomTitleText()}
          write={D.randomName()}
          date={D.randomDayMonthYear()}
          heart={1}
          view={1}
        />
      </div>
    </StyledSection>
  )
}
