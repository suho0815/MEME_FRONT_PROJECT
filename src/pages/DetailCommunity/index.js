/** 커뮤니티 게시판 */
import {StyledTitle, StyledSection, StyledButton, NavBoxTest} from '../../styled'
import {BoardList} from './BoardList'

export const DetailCommunity = () => {
  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">Community</StyledTitle>

      <BoardList title="제목" write="작성자" date="2023-01-01" heart={1} view={1} />
    </StyledSection>
  )
}
