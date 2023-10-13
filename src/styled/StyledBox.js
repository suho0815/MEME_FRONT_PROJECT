import styled from 'styled-components'
import theme from './theme'

/** 배경 입힌 section
 * @param width: 가로
 * @param height: 세로
 */
export const StyledSection = styled.section`
  background-color: #f5edf7;
  width: ${props => props.width || '100vw'};
  height: ${props => props.height || '100vh'};
`

/** 중앙 정렬된 div */
export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
`
