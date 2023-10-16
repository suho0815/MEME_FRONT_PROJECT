/** 내 정보 페이지(member회원) */
import {
  StyledSection,
  NavBoxTest,
  StyledTitle,
  StyledDiv,
  StyledButton,
  Title,
  SubTitle,
  MyInfoDiv,
  MyInfoSubDiv
} from '../../styled'
import {BoardList} from '../DetailCommunity/BoardList'
import * as D from '../../dummydata'

export const MyPage = () => {
  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">MyPage</StyledTitle>
      {/* 내 정보 */}
      <StyledDiv alignitems="center" style={{flexDirection: 'column'}}>
        <SubTitle width="80%" font="poppins" textSize="24px" padding="70px 0px 30px 0px">
          나의 정보
        </SubTitle>
        <MyInfoDiv>
          <MyInfoSubDiv>
            <Title width="20%" textSize="19px">
              이메일
            </Title>
            <SubTitle textSize="19px">{D.randomEmail()}</SubTitle>
          </MyInfoSubDiv>
          <MyInfoSubDiv>
            <Title width="20%" textSize="19px">
              닉네임
            </Title>
            <SubTitle textSize="19px">{D.randomName()}</SubTitle>
          </MyInfoSubDiv>
          <MyInfoSubDiv>
            <Title width="20%" textSize="19px">
              휴대폰 번호
            </Title>
            <SubTitle textSize="19px">010-1234-5678</SubTitle>
          </MyInfoSubDiv>
          <MyInfoSubDiv>
            <Title width="20%" textSize="19px">
              주소
            </Title>
            <SubTitle textSize="19px">{D.randomTitleText()}</SubTitle>
          </MyInfoSubDiv>
        </MyInfoDiv>
        <StyledDiv justifycontents="end" width="80%" style={{marginTop: '15px'}}>
          <StyledButton>회원탈퇴</StyledButton>
        </StyledDiv>
      </StyledDiv>
      {/* 내가 작성한 댓글 */}
      <StyledDiv alignitems="center" style={{flexDirection: 'column', paddingBottom: '30px'}}>
        <SubTitle width="80%" font="poppins" textSize="24px" padding="70px 0px 30px 0px">
          내가 작성한 게시글
        </SubTitle>
        <BoardList
          id={1}
          title={D.randomTitleText()}
          write={D.randomName()}
          date={D.randomDayMonthYear()}
          heart={1}
          view={1}
        />
        <StyledDiv justifycontents="end" width="80%" style={{marginTop: '15px'}}>
          <StyledButton>더보기</StyledButton>
        </StyledDiv>
      </StyledDiv>
      {/* 내가 작성한 댓글 */}
      <StyledDiv alignitems="center" style={{flexDirection: 'column', paddingBottom: '30px'}}>
        <SubTitle width="80%" font="poppins" textSize="24px" padding="70px 0px 30px 0px">
          내가 작성한 댓글
        </SubTitle>
        <BoardList
          id={1}
          title={D.randomTitleText()}
          write={D.randomName()}
          date={D.randomDayMonthYear()}
          heart={1}
          view={1}
        />
        <StyledDiv justifycontents="end" width="80%" style={{marginTop: '15px'}}>
          <StyledButton>더보기</StyledButton>
        </StyledDiv>
      </StyledDiv>
    </StyledSection>
  )
}
