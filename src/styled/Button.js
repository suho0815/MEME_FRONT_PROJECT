import styled from 'styled-components'
import theme from './theme'

/**
 * @param color: 글자 색
 * @param background: 배경 색
 */
export const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  cursor: pointer;
  color: ${props => props.color || 'gray'};
  background: ${props => props.background || 'white'};
`
