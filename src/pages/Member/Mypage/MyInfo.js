import {StyledDiv, StyledButton, Title, SubTitle, MyInfoDiv, MyInfoSubDiv} from '../../../styled'
import * as D from '../../../dummydata'

export const MyInfo = () => {
  // 회원 탙퇴 버튼 클릭 시
  const AccountClosureClicked = () => {}

  return (
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
        <StyledButton onClick={AccountClosureClicked}>회원탈퇴</StyledButton>
      </StyledDiv>
    </StyledDiv>
  )
}
