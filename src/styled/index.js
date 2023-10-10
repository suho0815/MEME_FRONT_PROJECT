import styled, {css} from 'styled-components'

export const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  color: ${color => color || 'gray'};
  background: ${props => props.background || 'white'};
`
