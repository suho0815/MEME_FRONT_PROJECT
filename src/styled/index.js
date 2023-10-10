import styled from 'styled-components'
import theme from './theme'

export const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  color: ${props => props.color || 'gray'};
  background: ${props => props.background || 'white'};
`

export const StyledDiv = styled.div`
  font-size: ${theme.fontSize.lg};
  font-family: 'Inter';
  font-weight: bold;
`
