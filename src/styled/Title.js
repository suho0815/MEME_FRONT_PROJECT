import styled from 'styled-components'
import theme from './theme'

/**
 * @param textSize: 폰트 크기 지정
 * @param font: font 이름 ex) font="RedRose", font="Inter", font="PressStart2P", font="poppins"
 * @param bold: bold
 */
export const Title = styled.div`
  font-size: ${props => props.textSize || theme.fontSize.xl3};
  font-family: ${props => props.font};
  font-weight: ${props => props.bold || 'bold'};
`
/**
 * @param textSize: 폰트 크기 지정
 * @param font: font 이름 ex) font="RedRose", font="Inter", font="PressStart2P", font="poppins"
 * @param bold: bold
 */
export const SubTitle = styled.div`
  font-size: ${props => props.textSize || theme.fontSize.lg};
  font-family: ${props => props.font};
  font-weight: ${props => props.bold || 'semibold'};
`
