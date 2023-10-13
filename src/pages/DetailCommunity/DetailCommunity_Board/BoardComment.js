import {
  CommentInputDiv,
  CommentInput,
  StyledDiv,
  StyledButton,
  BoardTitleFrame,
  BoardTitle,
  SubTitle
} from '../../../styled'
import {Icon} from '../../../components'
import theme from '../../../styled/theme'

export const BoardComment = () => {
  return (
    <div>
      <CommentInputDiv>
        <StyledDiv width="20%">
          <Icon name="person" />
          작성자
        </StyledDiv>
        <CommentInput placeholder="댓글 내용 작성하셈!" />
        <StyledDiv width="20%">
          <StyledButton color="white" background="#7929FF">
            등록
          </StyledButton>
        </StyledDiv>
      </CommentInputDiv>
      <BoardTitleFrame width="90%">
        <BoardTitle>
          <SubTitle textSize={theme.fontSize.base} paddingLeft="25px" style={{display: 'flex', alignItems: 'center'}}>
            <Icon name="person" />
            작성자
          </SubTitle>
          <SubTitle textSize={theme.fontSize.base} paddingRight="25px">
            2023-10-11
          </SubTitle>
        </BoardTitle>
        <BoardTitle>
          <SubTitle textSize={theme.fontSize.base} paddingLeft="25px">
            댓글 내용입니다.
          </SubTitle>
          <SubTitle textSize={theme.fontSize.base} paddingRight="25px" style={{display: 'flex', alignItems: 'center'}}>
            <Icon name="warning" />
            신고하기
          </SubTitle>
        </BoardTitle>
      </BoardTitleFrame>
    </div>
  )
}
