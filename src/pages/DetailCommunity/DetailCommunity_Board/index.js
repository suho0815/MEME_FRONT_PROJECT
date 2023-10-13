/** 게시글 상세보기 페이지 */
import {
  StyledTitle,
  StyledSection,
  StyledButton,
  NavBoxTest,
  BoardFrame,
  BoardTitleFrame,
  BoardTitle,
  BoardContentFrame,
  Title,
  SubTitle
} from '../../../styled'
import {Icon} from '../../../components'
import theme from '../../../styled/theme'

export const DetailCommunity_Board = () => {
  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">Community</StyledTitle>
      <BoardFrame>
        <BoardTitleFrame>
          <BoardTitle>
            <Title textSize={theme.fontSize.xl} font="poppins" paddingLeft="25px">
              title
            </Title>
            <SubTitle textSize={theme.fontSize.md} font="poppins" paddingRight="25px">
              2023-10-11
            </SubTitle>
          </BoardTitle>
          <BoardTitle>
            <SubTitle
              textSize={theme.fontSize.base}
              font="poppins"
              paddingLeft="25px"
              style={{display: 'flex', alignItems: 'center'}}>
              <Icon name="person" />
              작성자
            </SubTitle>
            <SubTitle textSize={theme.fontSize.base} font="poppins" paddingRight="25px">
              조회수: ?
            </SubTitle>
          </BoardTitle>
        </BoardTitleFrame>
        <BoardContentFrame>
          <div>내용입니다.</div>
        </BoardContentFrame>
      </BoardFrame>
    </StyledSection>
  )
}
