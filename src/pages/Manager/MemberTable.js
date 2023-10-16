import {
  MemberTables,
  MemberTableThead,
  MemberTableTbody,
  MemberTableth,
  MemberTabletd,
  StyledButton
} from '../../styled'

export const MemberTable = () => {
  return (
    <MemberTables>
      <MemberTableThead>
        <MemberTableth>아이디</MemberTableth>
        <MemberTableth>신고 건수</MemberTableth>
        <MemberTableth>회원 상태</MemberTableth>
        <MemberTableth>회원 탈퇴</MemberTableth>
      </MemberTableThead>
      <MemberTableTbody>
        <MemberTabletd></MemberTabletd>
        <MemberTabletd></MemberTabletd>
        <MemberTabletd></MemberTabletd>
        <MemberTabletd
        // style={{display: 'flex', justifyContent: 'center'}}
        >
          <StyledButton color="#7929FF" borderColor="#7929FF">
            회원 탈퇴
          </StyledButton>
        </MemberTabletd>
      </MemberTableTbody>
    </MemberTables>
  )
}
