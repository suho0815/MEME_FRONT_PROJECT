import styled from 'styled-components'
import theme from '../theme'

export const MemberTables = styled.table`
  margin: auto;
  margin-top: 70px;
  border-collapse: collapse;
  border: 1px solid black;
  width: 80%;
  font-family: 'Inter';
`

export const MemberTableThead = styled.thead`
  background-color: #e5e5e5;
`

export const MemberTableTbody = styled.tbody`
  background-color: white;
`

export const MemberTableth = styled.th`
  border: 1px solid black;
  width: ${props => props.width};
  padding: 8px 16px;
`
export const MemberTabletd = styled.td`
  border: 1px solid black;
  width: ${props => props.width};
  padding: 8px 16px;
`
