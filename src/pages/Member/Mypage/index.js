/** 내 정보 페이지(member회원) */
import {StyledSection, NavBoxTest, StyledTitle} from '../../../styled'
import {MyInfo} from './MyInfo'
import {MyBoard} from './MyBoard'
import {MyComment} from './MyComment'

export const MyPage = () => {
  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">MyPage</StyledTitle>
      {/* 내 정보 */}
      <MyInfo />
      {/* 내가 작성한 게시글 3개 */}
      <MyBoard />
      {/* 내가 작성한 댓글 3개 */}
      <MyComment />
    </StyledSection>
  )
}
