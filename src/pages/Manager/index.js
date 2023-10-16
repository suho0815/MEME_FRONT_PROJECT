/** 회원 관리 페이지(manager회원) */
import {StyledButton, NavBoxTest, StyledTitle, StyledSection} from '../../styled'
import {MemberTable} from './MemberTable'

export const MemberListPage = () => {
  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">회원관리</StyledTitle>
      <MemberTable></MemberTable>
    </StyledSection>
  )
}
