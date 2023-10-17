/** 내가 등록한 게시글/댓글 보기 페이지(member회원) */
import {StyledSection, NavBoxTest, StyledTitle, StyledDiv, SubTitle} from '../../../styled'
import {BoardList} from '../../DetailCommunity/BoardList'
import * as D from '../../../dummydata'

export const MyPageBoardList = ({myBoard}) => {
  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">MyPage</StyledTitle>
      <StyledDiv alignitems="center" style={{flexDirection: 'column', paddingBottom: '30px'}}>
        <SubTitle width="80%" font="poppins" padding="70px 0px 30px 0px">
          내가 작성한 {myBoard ? myBoard : '게시글'}
        </SubTitle>
        <BoardList
          id={1}
          title={D.randomTitleText()}
          write={D.randomName()}
          date={D.randomDayMonthYear()}
          heart={1}
          view={1}
        />
      </StyledDiv>
    </StyledSection>
  )
}
