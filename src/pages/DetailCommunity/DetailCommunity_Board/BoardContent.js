import {
  BoardFrame,
  BoardTitleFrame,
  BoardTitle,
  BoardContentFrame,
  Title,
  SubTitle,
  StyledButton,
  StyledDiv
} from '../../../styled'
import {Icon} from '../../../components'
import theme from '../../../styled/theme'

export const BoardContent = () => {
  return (
    <BoardFrame>
      <BoardTitleFrame>
        <BoardTitle>
          <Title textSize={theme.fontSize.xl} font="poppins" paddingLeft="25px">
            제목입니다.
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
        <StyledDiv>
          <StyledButton borderColor="#BB99CD" color="black" font="poppins">
            <Icon name="favorite" />
            좋아요
          </StyledButton>
        </StyledDiv>
      </BoardContentFrame>
    </BoardFrame>
  )
}
